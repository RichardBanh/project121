import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: this.props.weight,
      style: "none",
      changed: false,
      disabled: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ weight: e.target.value });
  }

  componentDidUpdate() {
    if (
      this.props.selcName === this.props.department &&
      this.state.changed === false &&
      this.state.disabled === false
    ) {
      console.log("match");
      this.setState({ style: "5px solid red", changed: true });
    } else if (
      //run calculation function here
      this.state.changed === true &&
      this.props.selcName !== this.props.department
    ) {
      this.setState({ changed: false, style: "none" });
    }
  }
  lock = e => {
    e.preventDefault();
    this.setState({ disabled: !this.state.disabled ? true : false });
  };

  render() {
    if (this.props.id) {
      return (
        <>
          <div className='label'>{this.props.department}</div>
          <input
            style={{ border: this.state.style }}
            type='text'
            name={this.props.department}
            value={this.state.weight}
            onChange={this.handleChange}
            onClick={this.selected}
            disabled={this.state.disabled}
          />
          <button className='btn' onClick={e => this.lock(e)}>
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
            type='text'
            name={this.props.department}
            value={this.state.weight}
            onChange={this.handleChange}
            onClick={this.selected}
            disabled={this.state.disabled}
          />
          <button className='btn' onClick={e => this.lock(e)}>
            lock
          </button>
        </>
      );
    }
  }
}
