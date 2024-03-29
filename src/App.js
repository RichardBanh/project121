import React, {Component} from "react";
import Forms from "./components/Forms";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecForms from "./components/SecForms";



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state ={ selcName : null, lockContainer: [], elemName: null}
    this.whatIsClicked = this.whatIsClicked.bind(this);
    this.whatIsUnlocked = this.whatIsUnlocked.bind(this);
    this.whatIsLocked = this.whatIsLocked.bind(this)
  }

  whatIsClicked = (event) => {
    const selcName = event.target.name
    const elemName = event.target.tagName
    console.log(elemName)
    this.setState({selcName:selcName, elemName})
  }

  whatIsLocked = (event) => {
    console.log(event.target.name + "locked")
    // const names = event.name
    // this.setState({lockContainer: this.state.lockContainer + names})
  }

  whatIsUnlocked = (event) => {
    console.log(event.target.name + "unlocked")
    // const names = event.name
    // this.setState({lockContainer: this.state.lockContainer - names})  

  }
 
  
  render() {
    return (
      <div className= "background" onClick={(e)=>this.whatIsClicked(e)}>
        <Router>
          <Switch>
            <Route exact path="/"  render={ (props) => <Forms {...props} selcName={this.state.selcName} whatIsLocked={this.whatIsLocked} whatIsUnlocked={this.whatIsUnlocked} elemName={this.state.elemName} lockedData = {this.state.lockContainer}/>} />
            <Route path="/:id" render={ (props) => <SecForms {...props} selcName={this.state.selcName} whatIsLocked={this.whatIsLocked} whatIsUnlocked={this.whatIsUnlocked} elemName={this.state.elemName}  lockedData = {this.state.lockContainer}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
} 