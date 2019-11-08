import React from 'react';
import Home from './Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Home />
      </div>
    </Router>
  );
}

export default App;
