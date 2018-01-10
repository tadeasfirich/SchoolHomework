import React from "react";
import PropTypes from "prop-types";
import UU5 from "uu5g04";
import createReactClass from "create-react-class";
import "uu5g04-bricks";

import ns from "ns";

import "./column.less";

const Column = createReactClass({

  //@@viewOn:mixins
  mixins:[
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics:{
    tagName: ns.tag("Route003.Column"),
    classNames:{
      main: ns.css("route003-column")
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes:{
    action:PropTypes.oneOf(["disabled", "hidden"]).isRequired,
    onDelete: PropTypes.func.isRequired
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  getInitialState(){
    return {
      active:false
    }
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  _handleButtonClick(){
    this.setState((prevState) => {
      return {
        active: !prevState.active
      }
    })
  },

  _buildAttrs(){
    let props = {};
    // this.props.action -> disabled || hidden
    props[this.props.action] = this.state.active;
    // pros.disabled = this.state.active
    // pros.hidden = this.state.active
    return props;
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    /**
     * Tlačítko pro smazání volá předaný callback přes vlastnost (props) onDelete
     */
    return (
      <UU5.Bricks.Column colWidth="xs4" {...this.getMainPropsToPass()}>
        <UU5.Bricks.Button onClick={this._handleButtonClick}/>
        <UU5.Bricks.Paragraph {...this._buildAttrs()} />
        <UU5.Bricks.Paragraph {...this._buildAttrs()} />
        <UU5.Bricks.Button
          colorSchema="danger"
          onClick={this.props.onDelete}
          content="Smaž mě"
        />
      </UU5.Bricks.Column>
    )
  }
  //@@viewOff:render

});

export default Column
