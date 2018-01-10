import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";

export default createReactClass({

  //@@viewOn:mixins
  mixins:[
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.RouteMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics:{
    tagName:"UU5.Trainee.Route004",
    classNames:{
      main:"uu5-trainee-route004",
    },
    defaults:{
      languages:{
        cs:"Česky",
        en:"English"
      }
    },
    lsi:{
      on:{
        cs:"Zapnout",
        en:"Switch On"
      },
      off:{
        cs:"Vypnout",
        en:"Switch Off"
      }
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  getInitialState(){
    return {
      switchOn:false,
      language:this.getDefault().languages.cs
    };
  },

  componentWillMount(){
    UU5.Common.Tools.setLanguage("cs");
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  _setLanguage(lang){
    this.setState({language:this.getDefault().languages[lang]}, () => UU5.Common.Tools.setLanguage(lang));
    return this;
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    return (
      <UU5.Bricks.Div>
        <UU5.Bricks.Line size="xl" colorSchema={this.state.switchOn ? "success" : "grey-rich"}/>
        <UU5.Bricks.Button onClick={() => this.setState({switchOn:!this.state.switchOn})}>
          <UU5.Bricks.Lsi lsi={this.getLsi(this.state.switchOn ? "off" : "on")}/>
        </UU5.Bricks.Button>
        <UU5.Bricks.Dropdown label={this.state.language} colorSchema="primary">
          <UU5.Bricks.Dropdown.Item label={this.getDefault().languages.cs} onClick={() => this._setLanguage("cs")}/>
          <UU5.Bricks.Dropdown.Item label={this.getDefault().languages.en} onClick={() => this._setLanguage("en")}/>
        </UU5.Bricks.Dropdown>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render

});
