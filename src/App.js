import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Signin from "./pages/Signin";
import Switch from "react-bootstrap/esm/Switch";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
      
    </Router>
  );
}

export default App;