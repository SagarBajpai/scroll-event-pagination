import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Screens/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
