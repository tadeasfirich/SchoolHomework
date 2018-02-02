import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import Calls from "calls";

import Counter from "../bricks/route003/counter.js";

export default createReactClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.RouteMixin,
    UU5.Common.CcrReaderMixin,
    UU5.Common.LoadMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: "UU5.Trainee.Route007",
    classNames: {
      main: "uu5-trainee-route007"
    },
    calls:{
      onLoad:"listItems",
      save:"createItem",
      load:"readItems",
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
  componentDidMount() {
    console.log("Kukej");
    this._onLoadData();
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  //TODO: dodelat
  handleChange(values) {
    this.setState({data: values.name});
  },

  _updateItem(id, values) {
    console.log("ID: " + id + "Values: " + values.name);
    console.log(this._loadForm(values));
  },

  _deleteItem(id, values) {
    console.log(id);
    values.forEach(function(element) {
      console.log(element);
    });
  },

  _addColumn(values) {
    console.log("Hovno: " + values.name);
    let id = UU5.Common.Tools.generateUUID();
    //console.log(id);
    // díky CcrReader mixinu use můžeme ptát globálního registru na komponentu
    // a přidáme sloupec. Součástí sloupce je i callback metoda v onDelete, který nám zaručí jeho smazání.
    this._row.insertChild(
      <UU5.Bricks.Column colWidth="xs12" style="backgroundColor: grey;margin: 10px 0"  id={id}>
        <UU5.Bricks.P>{values.name}</UU5.Bricks.P>
        <UU5.Bricks.Button
          colorSchema="danger"
          onClick={() => this._deleteItem(id, values)}//this._row.deleteChild(id)}
          content="Delete Column"
        />
        <UU5.Bricks.Button
          colorSchema="danger"
          onClick={() => this._updateItem(id, values)}//this._row.deleteChild(id)}
          content="Edit Column"
        />
      </UU5.Bricks.Column>
    );
  },
  //Ukládá do local storage
  _onSave(values) {
    values.id = UU5.Common.Tools.generateUUID();
    values.checked = false;
    this.getCall("save")({
      data: values,
      done:(dtoOut) =>{
        this.setState({
          feedback:"ready",
          data:dtoOut
        })
      },
      fail:() =>{console.error("what to do when request failed")}
    });
    return this;
  },
  //Load from localStorage
  _onLoadData() {
    var allData = this.getCall("load")();
    console.log(allData.length);
    return allData.map((values) => {
      let key = UU5.Common.Tools.generateUUID();
      return(
        <UU5.Bricks.Column colWidth="xs12" style="backgroundColor: grey;margin: 10px 0"  id={values.id} key={key}>
          <UU5.Bricks.P>{values.name}</UU5.Bricks.P>
          <UU5.Bricks.Button
            colorSchema="danger"
            onClick={() => this._deleteItem(values.id, values)}//this._row.deleteChild(id)}
            content="Delete Column"
          />
          <UU5.Bricks.Button
            colorSchema="danger"
            onClick={() => this._updateItem(values.id, values)}//this._row.deleteChild(id)}
            content="Edit Column"
          />
        </UU5.Bricks.Column>
      );
    });
  },

  _loadForm(values) {
    return (
      <UU5.Forms.Form
        id="Form"
        ref={(form) => { this.mainForm = form; }}
        onSave={({component, values}) => this._onSave(values)}
        onCancel={({component}) => this._onCancel(component)}
      >
        <UU5.Forms.Text
          label='Name'
          name='name'
          placeholder='Paprika'
          required
        />
        <UU5.Forms.Select
          name="category"
          label="Category"
          required
        >
          <UU5.Forms.Select.Option value="Maso"/>
          <UU5.Forms.Select.Option value="Mléčné výrobky"/>
          <UU5.Forms.Select.Option value="Konzervy"/>
        </UU5.Forms.Select>
        <UU5.Forms.Number
          name="quantity"
          controlled={true}
          label="Number of items"
          value={1}
        />
        <UU5.Forms.TextArea
          name="description"
          label='Description'
          placeholder='Type here some description'
        />
        <UU5.Forms.Controls buttonReset />
      </UU5.Forms.Form>
    )
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        {this._loadForm()}
        <UU5.Bricks.Row
          ref_={(cmp) => this._row = cmp}
          dynamic
        >
          {this._onLoadData()}
        </UU5.Bricks.Row>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render

});
