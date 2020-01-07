import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { weight: this.props.weight};
    this.handleChange = this.handleChange.bind(this)
  }
  

  handleChange(e) {
    this.setState({weight: e.target.value})
  }

  render() {
    if (this.props.id) {
      return (
        <>
            <div>{this.props.department}</div>
            <input
            type="text"
            name={this.props.department}
            value={this.state.weight}
            onChange={this.handleChange}
          />
        </>
      );
    } else {
      return (
        <>
            <Link to={this.props.department}>{this.props.department}</Link>
            <input
            type="text"
            name={this.props.department}
            value={this.state.weight}
            onChange={this.handleChange}
          />
        </>
      );
    }
    
  }
    }
  