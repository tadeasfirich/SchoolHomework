import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";

/**
 * "calls" se v průběhu buildu nahradí za volání mocku, nebo živého serveru na základě nastavení
 */
import Calls from "calls";

export default createReactClass({

  //@@viewOn:mixins
  /**
   * LoadMixin v sobě obsahuje CallsMixin. LoadMixin volá metodu definovanou pod klíčem onLoad v momentě,
   * kdy se kompnenta vkládá do stránky. Postará se o to, že se vykreslí loading stav, zatímco probíha
   * AJAX request. Po doběhnutí requestu vykreslí chybu (pokud request spadl), nebo předá řízení komponentě.
   */
  mixins:[
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.RouteMixin,
    UU5.Common.LoadMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  /**
   * Pro použití Calls/LoadMixinu je nutné přidat klíč calls, který mapuje volání komponenty na metody
   * v souboru calls.js
   * Pro LoadMixin je vyžadována existence klíče onLoad
   */
  statics:{
    tagName:"UU5.Trainee.Route005",
    classNames:{
      main:"uu5-trainee-route005"
    },
    calls:{
      onLoad:"loadJokes",
      save:"createCategory"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  componentWillMount(){
    /**
     * Nastavení volání komponentě
     */
    this.setCalls(Calls);
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  _handleFormSave(){
    this.setState({
      feedback:"loading"
    }, () =>{
      /**
       * Vlastní volání serveru pomocí Calls mixinu. Nejdřív se call načte přes this.getCall.
       * Následně se zavolá s objektem obsahujícím 3 klíče - data, done a fail.
       * Klíč data obsahuje data, který se pošlou v requestu na server
       * Klíč done obsahuje callback, který se zavolá, když je request úspěšně hotov
       * Klíč fail obsahuje callback, který se zavolá, když request selže
       */
      this.getCall("save")({
        data:{data:"for", server:"here"},
        done:(dtoOut) =>{
          this.setState({
            feedback:"ready",
            data:dtoOut
          })
        },
        fail:() =>{console.error("what to do when request failed")}
      })
    });
  },

  _renderJokes(jokes){
    /**
     * Iterace přes data ze serveru. Při kliknutí na ikone se otevře modální okno s popisem vtipu.
     * Obsah modálního okna lze specifikovat v momentě jeho otevření.
     */
    return jokes.map((joke) => (
      <UU5.Bricks.TouchIcon key={joke.id} onClick={
        () => this._modal.open({
          content:<UU5.Bricks.P>{joke.text}</UU5.Bricks.P>
        })}
      >
        {joke.name}
      </UU5.Bricks.TouchIcon>
    ));
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    /**
     * Metoda this.getLoadFeedbackChildren se stará o vykreslení loading stavu. Jako parametr se
     * předává metoda, který se zavolá v momentě, kdy je request dokončen. Parametrem metody jsou
     * načtená data.
     * Modální okno se automaticky propojí s modálním oknem v komponentě UU5.Bricks.Page. Je možné
     * definovat více modálních oken napříč aplikací, všechny pak použijí komponentu v Page.
     */
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()} >
        {this.getLoadFeedbackChildren(this._renderJokes)}
        <UU5.Bricks.Modal ref_={(cmp) => this._modal = cmp}/>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render

});
