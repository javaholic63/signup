import React, { Component } from "react";
import AddContact from "./Components/AddContact";
import { Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={AddContact} />
      </Router>
    );
  }
}

export default App;
