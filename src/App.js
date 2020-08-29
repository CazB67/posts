import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Signin from "./pages/Signin";
import { Container } from 'react-bootstrap'
import Switch from "react-bootstrap/esm/Switch";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
      </Container>
    </Router>
  );
}

export default App;