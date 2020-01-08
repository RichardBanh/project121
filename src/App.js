import React from "react";
import Forms from "./components/Forms";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecForms from "./components/SecForms";



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"  render={ (props) => <Forms {...props}/>} />
          <Route path="/:id" render={ (props) => <SecForms {...props}/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
