import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";

/**
 * Šablona komponenty obsahující základní konvence pro psaní komponent.
 * Komentáře viewOn/Off definují jednotlivé sekce komponenty. Sekce v komponentě
 * zůstávají i když v nich nic není.
 * mixins - mixiny (funkčnosti), které komponenta používá
 * statics - statické (konstatní) nastavení komponenty. Povinné položky
 * jsou tagName a classNames.main. Klíč tagName pojmenovává komponentu. Tento název
 * je pak knihovnou uu5 používán např. v chybových hláškách. Zanořený klíč classNames.main
 * je pak název css třídy, který bude automatcky přiřazen komponentě při použití
 * zápisu {...this.getMainPropsToPass()}, který předává údaje pro správnou fukčnost
 * zanořených uu5 komponent.
 * Každá React komponenta musí mít metodu render()
*/

let Component = createReactClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU.Trainee.Component",
    classNames: {
      main: "uu-trainee-component"
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
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <UU5.Bricks.Paragraph />
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render

});

export default Component;
