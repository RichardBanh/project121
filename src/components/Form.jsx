import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
          <a href="">{this.props.department}</a>
        <input
          type="text"
          name={this.props.department}
          value={this.props.weight}
        />
      </div>
    );
  }
}
