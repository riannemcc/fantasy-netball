import React from 'react';
import './Home.css';
import './LogIn.css'


function LogIn() {
    return (
        <>
            <h3> Log in to Fantasy Netball</h3>
            <form>
                <input className="logInForm" placeholder="Email address" type="email" required />
                <input className="logInForm" placeholder="Password" type="password" required/>
                <button className="submitButton">Submit</button>
            </form>
        </>
    );
}

export default LogIn;