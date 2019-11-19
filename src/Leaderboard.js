import React from 'react';
import './Home.css';
import './Leaderboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";


function Leaderboard() {
    const hasTeam = false
    return (
        <>
          {hasTeam ? (
                <h3>Your Team: ""</h3>
            ) : (
                    <>
                        <Link to="/team-selection">Select your team!</Link>
                    </>
                )}
        <h3> Leaderboard</h3>
           
        </>
    );
}

export default Leaderboard;