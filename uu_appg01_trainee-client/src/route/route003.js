import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import ns from "ns";

import Counter from "../bricks/route003/counter.js";
import Column from "../bricks/route003/column.js";

export default createReactClass({

  //@@viewOn:mixins
  mixins:[
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.RouteMixin,
    UU5.Common.CcrReaderMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics:{
    tagName: ns.tag("Route003"),
    classNames:{
      main: ns.css("route003")
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
  _addColumn(){
    /**
     * Každý prvek v poli (insertChild přidává do pole) potřebuje unikýtní identifikátor. Hlavně proto,
     * aby React věděl, kterou komponentu má ze stránky smazat. Pokud by se id nezadalo,
     * přiřadil by se automaticky klíč na základě indexu pole. Pokud by se pak mazal např. 1. prvek z pole,
     * který ma index 0, nahradil by jej následující prvek (který by ale opět byl na indexu 0,
     * v důsledku by se smazal pouze poslední prvek pole, vše ostatní by se jen posunulo)
     */
    let id = UU5.Common.Tools.generateUUID();
    // díky CcrReader mixinu use můžeme ptát globálního registru na komponentu
    let counter = this.getCcrComponentByKey("uu5TraineeCount");
    // zvýšíme číslo v čítači
    counter.increment();
    // a přidáme sloupec. Součástí sloupce je i callback metoda v onDelete, který nám zaručí jeho smazání.
    this._row.insertChild(
      <Column
        action="disabled"
        id={id}
        onDelete={() => {
          // před smazáním sloupce snížíme počet v čítači
          counter.decrement();
          // a skrze viditelné ID a referenci smažeme daný sloupec
          this._row.deleteChild(id)
        }}
      />
    )
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <UU5.Bricks.Button
          colorSchema="success"
          onClick={this._addColumn}
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
