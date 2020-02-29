import React from 'react';
import { withFirebase } from './Firebase'
import './Home.css'

const LogOutButton = ({ firebase }) => (
  <button type="button" className="logOutButton" onClick={firebase.doLogOut}>
    Log Out
  </button>
)
export default withFirebase(LogOutButton)