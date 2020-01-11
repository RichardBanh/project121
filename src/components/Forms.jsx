import React, { Component } from "react";
import Form from "./Form";
import datap from "../datap/boop";

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }


  componentDidMount() {
    const data = datap.movies;
    this.setState({ data });
    
  }

  

  render() {
    if (!this.state.data) {
      return <div>Loading</div>;
    } else {
      const formpopulated = this.state.data.map(x => (
        <Form department={x.department} weight={parseInt(x.weight, 10)} clicked = {this.props.clicked} />
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
