/**
 * Server calls of application client.
 */
const localStorage = window.localStorage;

function _getItems() {
  return JSON.parse(localStorage.getItem("items") || "[]");
}

function _setItems(data) {
  localStorage.setItem("items", JSON.stringify(data));
}

/**
 * simulates network latency and server response time
 *
 * @returns {number}
 * @private
 */
function _getRandomResponseTime() {
  return Math.random() * 1000 + 100;
}

let Calls = {
  listItems(dtoIn) {
    setTimeout(() => dtoIn.done(_getItems()), _getRandomResponseTime());
  },

  createItem(dtoIn) {
    setTimeout(() => {
      let items = _getItems();
      //console.log(items);
      items.push(dtoIn.data);
      _setItems(items);
      dtoIn.done(items);
    }, _getRandomResponseTime());
  },

  readItems(dtoIn) {
    return _getItems();
  },

  removeItem(id, allValues) {
    console.log(id);
    console.log(allValues);
    let index;
    allValues.map((value) => {
      if (value.id === id) {
        index = allValues.indexOf(value);
      }
    });
    allValues.splice(index, 1);
    console.log(allValues);
    _setItems(allValues);
  },

  resetItems(dtoIn) {
    setTimeout(() => {
      _setItems([]);
      dtoIn.done();
    }, _getRandomResponseTime());
  }
};

export default Calls;
