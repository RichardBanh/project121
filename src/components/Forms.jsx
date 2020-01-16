import React, { Component } from "react";
import Form from "./Form";
import datap from "../datap/boop";

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], changeinvalue: 0, calchange: 0 };
    this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
    const data = datap.movies;
    this.setState({ data });
  }

  calculate = obj => {
    console.log("calc")
  };

  render() {
    if (!this.state.data) {
      return <div>Loading</div>;
    } else {
      const formpopulated = this.state.data.map(x => (
        <Form
          department={x.department}
          weight={parseInt(x.weight, 10)}
          clicked={this.props.clicked}
          selcName={this.props.selcName}
          whatIsLocked={this.props.whatIsLocked}
          whatIsUnlocked={this.props.whatIsUnlocked}
          calculate={this.calculate}
        />
      ));
      return (
        <form>
          {formpopulated}
          <input className="btn" type="submit" />
        </form>
      );
    }
  }
}
