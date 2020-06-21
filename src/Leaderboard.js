import React, { useEffect, useState } from 'react';
import './Home.css';
import './Leaderboard.css'
import {
    Link
  } from "react-router-dom";
  import { withFirebase } from './Firebase'


function Leaderboard({firebase}) {
    const hasTeam = true 
    // need to update thosi to check whether user has a team 
    const [currentUser, setCurrentUser] = useState(null)
    
    useEffect(() => {
        const fetchUser = (uid) => {
            firebase.getUserData(uid)
                .then((userSnapshot) => {
                    setCurrentUser(userSnapshot.data())
                })
                .catch(console.log)
        }

        if (!currentUser && firebase.currentUserId) {
            fetchUser(firebase.currentUserId)
        }
    }, [firebase.currentUserId, currentUser, firebase])

    return (
        <div>
          {hasTeam ? (
              <>
                <h3>Your Team - {currentUser ? currentUser.teamName : ""} </h3>
                <h3> Leaderboard</h3>
                <table>
                    <tbody>
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
                    </tbody>
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

export default withFirebase(Leaderboard);