import React, { Component } from "react";
import Form from "./Form";
import datap from "../datap/boop";
import '../css/StyleSheet.css'

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], changeinvalue: 0,
      calchange: 0};
  }


  componentDidMount() {
    const data = datap.movies;
    this.setState({ data });
    
  }

  calculate = (obj) =>{
    
  }
  

  render() {
    if (!this.state.data) {
      return <div>Loading</div>;
    } else {
      const formpopulated = this.state.data.map(x => (
        <Form department={x.department} weight={parseInt(x.weight, 10)} clicked = {this.props.clicked} selcName = {this.props.selcName} />
      ));
      return (
        <form>
          {formpopulated}
          <button className="btn">Calculate</button>
          <input className="btn" type="submit" />
        </form>
      );
    }
  }
}
