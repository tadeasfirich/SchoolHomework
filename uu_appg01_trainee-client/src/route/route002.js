import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";

import Props from "../bricks/props.js";
import State from "../bricks/state.js";
import Interface from "../bricks/interface.js";
import Lifecycle from "../bricks/lifecycle.js";

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
    tagName:"UU5.Trainee.Route002",
    classNames:{
      main:"uu5-trainee-route002"
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
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()} >
        <UU5.Bricks.Link href="https://unicorn.com">Unicorn</UU5.Bricks.Link>

        <Props text="Hello world" />
        <Props/>
        <State/>
        <Lifecycle/>
        {/*
          ref_ nastavuje referenci na komponentu skrze callback
        */}
        <Interface ref_={(cmp) => this._ifc = cmp} />
        {/* volani nastavene reference */}
        <UU5.Bricks.Button
          colorSchema="primary"
          onClick={() => this._ifc.incrementCount()}
        />
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render

});
