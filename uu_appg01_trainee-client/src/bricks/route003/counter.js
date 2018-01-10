import React from "react";
import UU5 from "uu5g04";
import createReactClass from "create-react-class";
import "uu5g04-bricks";

import ns from "ns";

let Counter = createReactClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.CcrWriterMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: ns.tag("Counter"),
    classNames: {
      main: ns.css("counter")
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
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  increment(setStateCallback) {
    /**
     * zvýšení předchozího stavu (pracuje s předchozím stavem, nastavení přes callback metodu)
     */
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    }, setStateCallback);
    return this;
  },

  decrement(setStateCallback) {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
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
    return <UU5.Bricks.Span content={this.state.count} {...this.getMainPropsToPass()} />
  }
  //@@viewOff:render

});

export default Counter
