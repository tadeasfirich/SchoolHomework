import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import UU5 from "uu5g04";
import "uu5g04-bricks";

let Props = createReactClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU.Trainee.Props",
    classNames: {
      main: "uu-trainee-props"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  /**
   * Pokud komponenta očekává vlastnosti (props), musí je definovat nejen názvem, ale také typem.
   */
  propTypes: {
    text: PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  getDefaultProps() {
    /**
     * Metoda nastavuje výchozí hodnoty vlastností (props).
     */
    return {
      text: "nebyl zadán"
    }
  },
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
        {this.props.text}
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render

});

export default Props;
