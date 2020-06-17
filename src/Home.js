import React from 'react';
import Leaderboard from './Leaderboard';
import './Home.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


function Home() {
    const isSignedIn = true
    return (
        <div className="container">
            <h1>Fantasy Netball</h1>
            <h2> Vitality Netball Superleague</h2>
            {isSignedIn ? (
                <Leaderboard />
            ) : (
                    <>
                        <Link to="/sign-up" className="button">Sign Up</Link>
                        <Link to="/log-in" className="button">Log In</Link>
                    </>
                )}
        </div>
    );
}

export default Home;