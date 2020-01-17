import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "none",
      changed: false,
      disabled: false
    };
  }

  

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.weight, prevProps)
    
    if (
      this.props.selcName === this.props.department &&
      this.state.changed === false &&
      this.state.disabled === false
    ) {
      console.log("match");
      this.setState({ style: "5px solid red", changed: true });
    } else if (
      this.state.changed === true &&
      this.props.selcName !== this.props.department
    ) {
      this.setState({ changed: false, style: "none" });
      //here change something here!!!
      if (prevProps.weight !== this.props.weight) {
        const weight = parseInt(this.props.weight);
        const changeinval = weight - parseInt(prevProps.weight);
        console.log(weight, this.props.department, changeinval)
        this.props.calculate(weight, this.props.department, changeinval);
      }
    }
  }

  lock = e => {
    e.preventDefault();
    this.setState({ disabled: !this.state.disabled ? true : false });
    if (!this.state.disabled) {
      this.props.whatIsLocked(e);
    } else {
      this.props.whatIsUnlocked(e);
    }
  };

  render() {
    if (this.props.id) {
      return (
        <>
          <div className="label">{this.props.department}</div>
          <input
            style={{ border: this.state.style }}
            type="value"
            name={this.props.department}
            value={this.props.weight}
            onChange={this.props.handleChange}
            onClick={this.selected}
            disabled={this.state.disabled}
          />
          <button
            className="btn"
            name={this.props.department + "l"}
            onClick={e => this.lock(e)}
          >
            lock
          </button>
        </>
      );
    } else {
      return (
        <>
          <Link to={this.props.department}>{this.props.department}</Link>
          <input
            style={{ border: this.state.style }}
            type="value"
            name={this.props.department}
            value={this.props.weight}
            onChange={this.props.handleChange}
            onClick={this.selected}
            disabled={this.state.disabled}
          />
          <button
            className="btn"
            name={this.props.department + "l"}
            onClick={e => this.lock(e)}
          >
            lock
          </button>
        </>
      );
    }
  }
}
