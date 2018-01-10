import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import UU5 from "uu5g04";
import "uu5g04-bricks";

let State = createReactClass({

  //@@viewOn:mixins
  mixins:[
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics:{
    tagName:"UU.Trainee.State",
    classNames:{
      main:"uu-trainee-state"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    text: PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  getInitialState() {
    /**
     * Základní stav komponenty, který je možné dále měnit pomocí setState. Změna stavu komponenty
     * vyvolá její překreslení.
     * Do základního stavu se může dostat hodnota z props, pokud je potřeba. Pokud se tento zápis použije,
     * je nutné ošetřit v komponentě, co se má stát při změne props metodou componentWillReceiveProps
     */
    return {
      count: 1,
      text: this.props.text
    }
  },

  /**
   * Slouží k rozhodnutí, co má komponenta udělat, když se ji zmeni props
   */
  componentWillReceiveProps(nextProps) {
    let newState = {};
    if(nextProps.text !== this.state.text) {
      newState.text = nextProps.text
    }
    this.setState(newState);
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  _handleClick(btn) {
    /**
     * Nastavení stavu je asynchronní úloha. To znamená, že nastavení stavu se propíše až po nějaké době.
     * Pokud chce komponenta "ihned" pracovat s novým stavem, musí použít callback metodu pro setState.
     * Volání setState má několik podob, ta základní je this.setState(changedState),
     * kde changedState je objekt se všemi změnami ve stavu komponenty (nikoli celý stav, stačí rozdíly).
     * Druhý parametr je pak callback, který se zavolá v momentě, kdy je stav přenastaven.
     * Může nastat situace, že se zavolá další setState dříve, než se vykonal předchozí. Pokud je nový
     * stav závislý na předchozím, je žádoucí použít zápis viz _handleClickWithFunction.
     */
    console.log("pred", this.state.count);
    this.setState({
      count: this.state.count + 1
      // 1. rychle volani state.count = 1 -> newState.count = 2
      // 2. rychle volani state.count = 1 -> newState.count = 2
      // 3. rychle volani state.count = 2 -> newState.count = 3
    }, () => {
      console.log("callback", this.state.count)
    });
    console.log("po", this.state.count);
  },

  _handleClickWithFunction(btn) {
    /**
     * Pokud je stav aplikace závislý na předchozím stavu (čítač, true/false přepínač), je vhodné použít
     * volání metody setState s parametrem ve formě callbacku (metody), který dostává jako první parametr
     * aktuální stav (stav komponenty v čase vykonání callbacku, nikoli v čase volání metody setState).
     * Tento callback poté vrací (rozdílový) objekt pro nastavení nového stavu komponenty.
     */
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <UU5.Bricks.Button onClick={this._handleClick}>
          Přidej číslo
        </UU5.Bricks.Button>
        {this.state.count}
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render

});

export default State;
