import React from "react";
import Forms from "./components/Forms";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecForms from "./components/SecForms";
import './css/StyleSheet.css'


function App() {
  
  const settingvar = (clicked) => {
    var clicked = clicked
    console.log(clicked)
  }
  const whatIsClicked = (event) => {
    console.log(event)
    document.addEventListener("click", settingvar(event.target.nodeName))
  }

 
  return (
    <div className= "background" onClick={(e)=>{whatIsClicked(e)}}>
      <Router>
        <Switch>
          <Route exact path="/"  render={ (props) => <Forms {...props} clicked/>} />
          <Route path="/:id" render={ (props) => <SecForms {...props} clicked/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
