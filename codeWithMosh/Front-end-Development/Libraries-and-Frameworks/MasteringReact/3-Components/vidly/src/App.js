import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movie";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
