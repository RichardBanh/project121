import React, {Component} from "react";
import Forms from "./components/Forms";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecForms from "./components/SecForms";
import './css/StyleSheet.css'



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state ={ selcName : null}
    this.whatIsClicked = this.whatIsClicked.bind(this);
  }

  whatIsClicked = (event) => {
    console.log(event.target.name)
    const selcName = event.target.name
    this.setState({selcName:selcName})
  }

  
  render() {
    return (
      <div className= "background" onClick={(e)=>this.whatIsClicked(e)}>
        <Router>
          <Switch>
            <Route exact path="/"  render={ (props) => <Forms {...props} selcName={this.state.selcName} />} />
            <Route path="/:id" render={ (props) => <SecForms {...props} selcName={this.state.selcName}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
} 