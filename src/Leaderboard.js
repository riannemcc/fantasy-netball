import React from 'react';
import { LeaderboardTable } from "./Tables/LeaderboardTable";
import './Home.css';
import './Leaderboard.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


function Leaderboard() {
    const hasTeam = true
    return (
        <div>
          {hasTeam ? (
              <>
                <h3>Your Team -</h3>
                <h3> Leaderboard</h3>
                <table>
                    <tr>
                        <th>Player</th>
                        <th>Team Name</th>
                        <th>Round Two</th>
                        <th>Round Three</th>
                        <th>Round Four</th>
                        <th>Round Five</th>
                        <th>Round Six</th>
                        <th>Total points</th>

                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </>
            ) : (
                    <>
                        <Link to="/team-selection">Select your team!</Link>
                    </>
                )}
           
        </div>
    );
}

export default Leaderboard;