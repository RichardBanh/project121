import React, { Component } from 'react'
import datap from "../datap/boop"
import Form from "./Form"


export default class SecForms extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], id:"" };
  }
  componentDidMount() {
    var id = this.props.match.params.id;
    var data = datap[id];
    this.setState({
      data, id
    });
  }
  render() {
    if (!this.state.data) {
      return <div>Loading!</div>;
    } else {
      if (this.state.id) {
      let formpopulated = this.state.data.map(x => (
        <Form department={x.department} weight={parseInt(x.weight, 10)} id />
      )); return (<div> {formpopulated} <button>back</button> <button>Submit</button></div>)
    } else {
         return (<div>has data but database broken </div>)
      }
     
    }
  }
}
