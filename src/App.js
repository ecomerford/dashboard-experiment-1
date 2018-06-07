import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.js";
import Navigation from "./components/Nav.js";
import Filters from "./components/Filters.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Filters />
        <hr></hr>
        <div className="tabs view-selection">
          <button className="tablinks">
            Summary
          </button>
          <button className="tablinks">
            Distribution
          </button>
          <button className="tablinks">
            Comparison
          </button>
          <button className="tablinks">
            Evolution
          </button>
        </div>
      </div>
    );
  }
}

export default App;
