import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";

let Interface = createReactClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU.Trainee.Interface",
    classNames: {
      main: "uu-trainee-interface"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  getInitialState() {
    /**
     * Metoda nastavuje základní stav komopnenty, který se pak může dál měnit přes volání setState
     */
    return {
      count: 1
    }
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  incrementCount(setStateCallback) {
    /**
     * Rozhraní komponenty - může být na komponentě voláno odkudkoli. Rozhraní vždy vrací hodnotu.
     * Pokud není žádná explicitní návratová hodnota (getter), vrací rozhraní samo sebe (return this).
     * Pokud rozhraní nastavuje stav komponenty přes setState, je poslední parametr vždy setStateCallback,
     * který se předá jako druhý parametr metodě setState. Pokud samo rozhraní implementuje vlastní
     * callback, volá se předaný callback uvnitř vlastní implementace.
     */
    this.setState({
      count: this.state.count + 1
    }, setStateCallback);
    return this;
  },
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()} >
        <UU5.Bricks.Button
          onClick={() => this.incrementCount()}
        />
        Interface: {this.state.count}
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render

});

export default Interface;
