import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import RoverForm from "./RoverForm";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/send-command/:id" component={RoverForm} />
    </Router>
  );
}

export default App;
