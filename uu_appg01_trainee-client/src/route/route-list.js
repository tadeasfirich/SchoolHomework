import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";

import UU5 from "uu5g04";
import "uu5g04-bricks";

export default createReactClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.RouteMixin,
    UU5.Common.CcrReaderMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU5.Trainee.RouteList",
    classNames: {
      main: "uu5-trainee-route-list"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    links: PropTypes.object
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  getDefaultProps() {
    return {
      links: {}
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
      <UU5.Bricks.Ul>
        {Object.keys(this.props.links).map(path => {
          //return <UU5.Bricks.Button displayBlock colWidth="xs-6 sm-4 md-3" content={name} />
          return (
            <UU5.Bricks.Li key={path}>
              <UU5.Bricks.Link
                content={this.props.links[path]}
                onClick={() => this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(path)}
              />
            </UU5.Bricks.Li>
          )
        })}
      </UU5.Bricks.Ul>
    );
  }
  //@@viewOff:render
});
