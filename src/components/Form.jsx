import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { weight: this.props.weight, style: "none" };
    this.handleChange = this.handleChange.bind(this);
    this.selected = this.selected.bind(this);
    this.clickoutside = this.clickoutside.bind(this);
  }

  handleChange(e) {
    this.setState({ weight: e.target.value });
  }

  selected() {
    this.setState({style: "2px solid red"})
  }
  
  clickoutside() {
    this.setState({style:"none"})
  }

  render() {
    if (this.props.id) {
      return (
        <>
          <div>{this.props.department}</div>
          <input
            style={{border: this.state.style}}
            type="text"
            name={this.props.department}
            value={this.state.weight}
            onChange={this.handleChange}
            onClick={this.selected}
          />
        </>
      );
    } else {
      return (
        <>
          <Link to={this.props.department}>{this.props.department}</Link>
          <input
            style={{border: this.state.style}}
            type="text"
            name={this.props.department}
            value={this.state.weight}
            onChange={this.handleChange}
            onClick={this.selected}
          />
        </>
      );
    }
  }
}
