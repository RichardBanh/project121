import React, { Component } from "react";
import Form from "./Form";
import datap from "../datap/boop";

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
    const data = datap.movies;
    this.setState({ data });
  }

  handleChange = e => {
    // console.log(e.target.name);
    e.persist();
    this.setState(state => {
      const data = state.data.map(x => {
        if (x.department === e.target.name) {
          return (x.weight = e.target.value);
        }
      });
      return data;
    });
  };

  calculate = (valuechanged, valuename, changeinvalue) => {
    // console.log(valuechanged, valuename, changeinvalue);
    this.setState(state => {
      const data = state.data.map(x => {
        if (x.department === valuename) {
          return (x.weight = valuechanged);
        } else if (x.department !== valuename) {
          return (x.weight =
            (-1 * parseFloat(x.weight, 10) * 100) /
            (changeinvalue / 100 + parseFloat(x.weight, 10)));
        }
      });
      return data;
    });
  };

  changed = () => {};

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
          handleChange={this.handleChange}
        />
      ));
      return (
        <form>
          {formpopulated}
          <input className='btn' type='submit' />
        </form>
      );
    }
  }
}
