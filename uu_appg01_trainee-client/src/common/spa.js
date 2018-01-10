import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import UU5 from "uu5g04";
import "uu5g04-bricks";

import Route from "../route/route.js";
import {serverData} from "../server_mock.js";

const Header = createReactClass({
  //@@viewOn:mixins
  mixins:[
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics:{
    tagName:"UU.Trainee.Header",
    classNames:{
      main:"uu-trainee-header"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    links: PropTypes.object
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    return (
      <UU5.Bricks.Box colorSchema="primary">
        <UU5.Bricks.Link onClick={() =>{ UU5.Environment.page.toggleLeft(); }}>
          <UU5.Bricks.Icon
            style="color: white;"
            icon="uu5-menu"
            className="font-size-xxl padding-s"
          />
        </UU5.Bricks.Link>
      </UU5.Bricks.Box>
    )
  }
  //@@viewOff:render

});

export const Spa = createReactClass({

  //@@viewOn:mixins
  mixins:[
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics:{
    tagName:"UU5.Trainee.Spa",
    classNames:{
      main:"uu5-trainee-spa"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    // define routes
    let appBasePath = (
      document.querySelector("base") && document.querySelector("base").getAttribute("data-uu-app-base")
    ) || location.pathname.replace(/^(.*\/).*/, "$1");
    let routerBasePath = appBasePath.replace(/\/$/, ""); // trim slash at the end
    let route = location.pathname.substr(routerBasePath.length);
    let routes = {
      "/":{component:<Route.Route001/>},
      "/route001":{component:<Route.Route001/>},
      "/route002":{component:<Route.Route002/>},
      "/route003":{component:<Route.Route003/>},
      "/route004":{component:<Route.Route004/>},
      "/route005":{component:<Route.Route005 data={serverData}/>},
      "/route006":{component:<Route.Route006/>},
      "/route007":{component:<Route.Route007/>},
      "/route008":{component:<Route.Route008/>},
      "/route009":{component:<Route.Route009/>}
    };

    return (
      <UU5.Bricks.Page
        type="1"
        top={<Header/>}
        modal={<UU5.Bricks.Modal />}
        leftWrapperProps={{style:{backgroundColor:"white"}}}
        left={(
          <Route.RouteList
            links={{
              "/route001":"ROUTE 001",
              "/route002":"ROUTE 002",
              "/route003":"ROUTE 003",
              "/route004":"ROUTE 004",
              "/route005":"ROUTE 005",
              "/route006":"ROUTE 006",
              "/route007":"ROUTE 007",
              "/route008":"ROUTE 008",
              "/route009":"ROUTE 009"
            }}
          />
        )}
        leftWidth="!xs-90 !s-90 m-30 l-30 xl-20"
      >
        <UU5.Common.Router basePath={routerBasePath} routes={routes} route={route}/>
      </UU5.Bricks.Page>
    );
  }
  //@@viewOff:render
});

export default Spa;
