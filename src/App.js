import React from 'react';
import Forms from './components/Forms'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SecForms from "./components/SecForms"

function App() {


  return (
    <div>
      <Router>
       <Switch>
         <Route exact path="/" component = {Forms}/>
        <Route path="/:id" component= {SecForms}/>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
