import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";

let Lifecycle = createReactClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU.Trainee.Lifecycle",
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
  getInitialState() {
    return {
      count: 0
    }
  },

  componentDidMount() {
    /**
     * Definice komponenty je definice třídy, použití komponenty je vytvoření instance.
     * Proto je možné v kopmponentě používat instanční proměnné (v rámci životního cyklu).
     * Metoda setInterval v JS nastavuje "vnitřní hodiny" a v tomto případě každou vteřinu
     * zavolá předanou metodu _incCount.
     * V životním cyklu se komopnenta může přihlásit, nebo vytvořit zdroje pro svou další funkčnost.
     * Je ale vyžadováno, aby se po smazání komponenty zabrané zdroje uvolnily.
     */
    this._interval = setInterval(() => this._incCount(), 1000);
  },

  componentWillUnmount() {
    /**
     * Pokud byla komponenta smazána ze stránky, je potřeba po sobě uklidit. Interval je v globálním
     * objektu a pokračoval by i po smazání komponenty. To by ovšem vyvolalo chybu, protože by se volala
     * metoda instance, která již neexistuje.
     */
    clearInterval(this._interval)
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  _incCount() {
    // viz State komponenta
    this.setState((prevState) => {
      return {
        count: ++prevState.count
      }
    })
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        Hodnota je: {this.state.count}
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render

});

export default Lifecycle;
