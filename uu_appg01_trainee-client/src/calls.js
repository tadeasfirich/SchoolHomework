/**
 * Server calls of application client.
 */
import {Uri} from "uu_appg01_core"
import {Client} from "uu_appg01"
import * as UU5 from "uu5g04"

let Calls = {

  /** URL containing app base, e.g. "https://uuos9.plus4u.net/vnd-app/tid-awid/". */
  APP_BASE_URI: location.protocol + "//" + location.host + document.querySelector("base").getAttribute("data-uu-app-base"),

  call(method, url, dtoIn, headers) {
    Client[method](url, dtoIn.data || null, headers).then(
      response => dtoIn.done(response.data),
      response => dtoIn.fail(response)
    );
  },

  loadJokes: (dtoIn) => {
    let _jokes = new Promise((resolve, reject) => {
      let targetUri = Calls.getCommandUri("listJokes").toString();
      Calls.call("get", targetUri, {data: {}, done: resolve, fail: reject})
    });
    let _categories = new Promise((resolve, reject) => {
      let targetUri = Calls.getCommandUri("listCategories").toString();
      Calls.call("get", targetUri, {data: {}, done: resolve, fail: reject})
    });
    Promise.all([_jokes, _categories]).then(values => {
      let [jokes, categories] = values;
      // categories to map
      let catMap = {};
      categories.itemList.forEach((item) => {
        catMap[item.id] = item
      });
      jokes = jokes.itemList.map((joke_item) => {
        if(!joke_item.categories) {
          joke_item.categories = [];
          return joke_item
        }
        joke_item.categories = joke_item.categories.map((cat) => catMap[cat]);
        return joke_item
      });
      dtoIn.done(jokes);
    })
  },

  loadCategories:(dtoIn) =>{
    let targetUri = Calls.getCommandUri("listCategories").toString();
    Calls.call("get", targetUri, dtoIn)
  },

  loadJokesByCategories:(dtoIn) =>{
    let targetUri = Calls.getCommandUri("listCategoryJokes").toString();
    let cats = dtoIn.data.itemList || [];
    let promises = cats.map((item) =>{
      return new Promise((resolve, reject) =>{
        Calls.call("get", targetUri, {data:{categoryId:item.id}, done:resolve, fail:reject})
      })
    });

    Promise.all(promises).then(values =>{
      // build whole object to pass
      let jokes = {};

      for(let category in cats){
        values[category].itemList.forEach((item) =>{
          jokes[item.id] = jokes[item.id] || Object.assign({}, item);
          jokes[item.id].categoryTags = jokes[item.id].categoryTags || [];
          jokes[item.id].categoryTags.push(cats[category].name)
        })
      }
      // return jokes
      dtoIn.done({"items":Object.values(jokes)});
    });
  },


  updateCategory: (dtoIn) => {
    let targetUri = Calls.getCommandUri("updateCategory").toString();
    Calls.call("post", targetUri, dtoIn)
  },

  createCategory: (dtoIn) => {
    let targetUri = Calls.getCommandUri("createCategory").toString();
    Calls.call("post", targetUri, dtoIn)
  },

  deleteCategory: (dtoIn) => {
    let targetUri = Calls.getCommandUri("deleteCategory").toString();
    Calls.call("post", targetUri, dtoIn)
  },

  updateJoke: (dtoIn) => {
    let targetUri = Calls.getCommandUri("updateJoke").toString();
    Calls.call("post", targetUri, dtoIn)
  },

  createJoke: (dtoIn) => {
    let targetUri = Calls.getCommandUri("createJoke").toString();
    Calls.call("post", targetUri, dtoIn)
  },

  deleteJoke: (dtoIn) => {
    let targetUri = Calls.getCommandUri("deleteJoke").toString();
    Calls.call("post", targetUri, dtoIn)
  },

  /*
  For calling command on specific server, in case of developing client site with already deployed
  server in uuCloud etc. You can specify url of this application (or part of url) in development
  configuration in *-client/config/uu5-environment-dev.json
  for example:
   {
     "gatewayUri": "https://uuos9.plus4u.net",
     "tid": "84723877990072695",
     "awid": "b9164294f78e4cd51590010882445ae5",
     "vendor": "uu",
     "app": "demoappg01",
     "subApp": "main"
   }
   */
  getCommandUri(aUseCase) { // useCase <=> e.g. "getSomething" or "sys/getSomething"
    // add useCase to the application base URI
    // NOTE Using string concatenation instead of UriBuilder to support also URLs
    // that don"t conform to uuUri specification.
    let targetUriStr = Calls.APP_BASE_URI + aUseCase.replace(/^\/+/, "");
    // override tid / awid if it"s present in environment (use also its gateway in such case)
    let env = UU5.Environment;
    if (env.tid || env.awid || env.vendor || env.app) {
      let uriBuilder = new Uri.UriBuilder();
      if (env.tid || env.awid) {
        if (env.gatewayUri) uriBuilder.gateway = env.gatewayUri;
        if (env.tid) uriBuilder.tid = env.tid;
        if (env.awid) uriBuilder.awid = env.awid;
      }
      if (env.vendor || env.app) {
        if (env.vendor) uriBuilder.vendor = env.vendor;
        if (env.app) uriBuilder.app = env.app;
        if (env.subApp) uriBuilder.subApp = env.subApp;
      }
      uriBuilder.useCase = aUseCase;
      targetUriStr = uriBuilder.toUri().toString();
    }

    return targetUriStr;
  }

};

export default Calls;
