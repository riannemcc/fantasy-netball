import React, { Component } from 'react'
import Home from './Home'
import SignUp from './SignUp'
import LogOutButton from './LogOut'
import LogIn from './LogIn'
import Account from './Account'
import Rules from './Rules'
import Stats from './Stats'
import TeamSelection from './TeamSelection'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { AuthUserContext, withAuthentication } from './Session'

class App extends Component {
  render() {
    return (
          <Router>
            <div>
              <header>
                <ul className="menuUl">
                    <li className="dropdown">
                        <button className="dropbtn">Menu</button>
                        <div className="dropdown-content">
                          <Link to="/">Home</Link>
                          <Link to="/rules">Rules</Link>
                          <Link to="/stats">Stats</Link>
                          <AuthUserContext.Consumer>
                            {authUser => authUser ? <LogOutButton /> : <Link to="/log-in">Log in</Link>}
                          </AuthUserContext.Consumer>
                        </div>
                    </li>
                  </ul>
                </header>
            <div className="App">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/sign-up" component={SignUp} />
                <Route path="/log-in" component={LogIn} />
                <Route path="/account">
                  <Account />
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
          </div>
        </Router >
    )
  }
}

export default withAuthentication(App)
