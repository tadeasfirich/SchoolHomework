import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";
/**
 * Pro použití modulu Forms je potřeba jej explicitně importovat
 */
import "uu5g04-forms";

export default createReactClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.RouteMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU5.Trainee.Route006",
    classNames: {
      main: "uu5-trainee-route006"
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
  render() {
    /**
     * Formulář má několik vlastností (props), které lze nastavit. Nejpoužívanější je onSave,
     * která očekává callback. Prvním parametrem je objekt, který obsahuje klíče component a values.
     * Klíč component je komponenta formuláře, kde je možné volat rozhraní isValid, které spustí validaci.
     */
    return (
      <UU5.Forms.Form
        {...this.getMainPropsToPass()}
        onSave={(opt) => {
          if(opt.component.isValid()) {
            console.log(opt.component.getValues())
          } else {
            console.log("form has some errors")
          }
        }}
      >
        <UU5.Forms.Text
          name="myInput"
          label="My Label"
          onEnter={(opt) => opt.event.preventDefault()} required
        />

        <UU5.Forms.Controls />
      </UU5.Forms.Form>
    );
  }
  //@@viewOff:render
});
