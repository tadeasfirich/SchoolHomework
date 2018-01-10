import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";

import Counter from "../bricks/route003/counter.js";

export default createReactClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.RouteMixin,
    UU5.Common.CcrReaderMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU5.Trainee.Route007",
    classNames: {
      main: "uu5-trainee-route007"
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
  _addRow() {
    let id = UU5.Common.Tools.generateUUID();
    // díky CcrReader mixinu use můžeme ptát globálního registru na komponentu
    let counter = this.getCcrComponentByKey("uu5TraineeCount");
    // zvýšíme číslo v čítači
    counter.increment();
    // a přidáme sloupec. Součástí sloupce je i callback metoda v onDelete, který nám zaručí jeho smazání.
    this._row.insertChild(
      <h1>
        <UU5.Bricks.Label colorSchema='info' content='Some task' action="disabled" id={id} />
      </h1>
    )
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <UU5.Bricks.Button
          colorSchema="success"
          onClick={this._addRow}
        />
        <Counter ccrKey="uu5TraineeCount" />
        <UU5.Bricks.Row
          ref_={(cmp) => this._row = cmp}
          dynamic
        />
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render

});
