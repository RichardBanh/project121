import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "none",
      changed: false,
      disabled: false,
      previousval: "",
      changedsnap: false
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.selcName === this.props.department &&
      this.state.changed === false &&
      this.state.disabled === false
    ) {
      this.setState({ style: "5px solid red", changed: true });
    } else if (
      this.state.changed === true &&
      this.props.selcName !== this.props.department
    ) {
      this.setState({ changed: false, style: "none" });
      if (this.state.previousval !== this.props.weight) {
        const weight = parseInt(this.props.weight);
        const changeinval = weight - parseInt(this.state.previousval);
        this.props.calculate(weight, this.props.department, changeinval);
      }
    } else if (
      this.props.selcName !== this.props.department &&
      this.state.changed === false &&
      this.state.previousval !== this.props.weight
    ) {
      this.setState({ previousval: this.props.weight });
    }
  }
  componentDidMount() {
    this.setState({ previousval: this.props.weight });
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
          <div className='label'>{this.props.department}</div>
          <input
            style={{ border: this.state.style }}
            type='value'
            name={this.props.department}
            value={this.props.weight}
            onChange={this.props.handleChange}
            onClick={this.selected}
            disabled={this.state.disabled}
          />
          <button
            className='btn'
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
            type='value'
            name={this.props.department}
            value={this.props.weight}
            onChange={this.props.handleChange}
            onClick={this.selected}
            disabled={this.state.disabled}
          />
          <button
            className='btn'
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