import React, { Component } from "react";
import "./App.css";
import VegList from "./VegList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  render() {
    return (
      <div className="App">
        <h1>Jim Reviews React</h1>
        <VegList />
      </div>
    );
  }
}

export default App;
