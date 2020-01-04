import React, { Component } from "react";
import {Link,BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SecForms from "./SecForms"
export default class Form extends Component {
  render() {
    return (
      <Router>
          
          <Link to={this.props.department}>{this.props.department}</Link>
          <input
          type="text"
          name={this.props.department}
          value={this.props.weight}
        />
        <Switch>
        <Route path="/:id" children={<SecForms/>}/>
        </Switch>
      </Router>
    );
  }
}
