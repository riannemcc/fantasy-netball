import React from 'react';
import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Rules from './Rules';
import Stats from './Stats';
import TeamSelection from './TeamSelection';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

const App = () => (
  <Router>
      <header>
        <ul>
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Menu</a>
                <div class="dropdown-content">
                <Link to="/">Home</Link>
                <Link to="/rules">Rules</Link>
                <Link to="/stats">Stats</Link>
                </div>
            </li>
            </ul>
        </header>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/log-in">
          <LogIn />
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
        <Route path="/team-selection">
          <TeamSelection />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  </Router >
)

export default App;
