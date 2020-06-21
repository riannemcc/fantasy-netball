import React from 'react';
import { StatsTable } from "./Tables/StatsTable";
import './Home.css';
import './Stats.css'


function Stats() {


    return (
        <div className="container">
            <h2>
                Stats
            </h2>
            <div className="teamButtons">
                <button className="teamButton">Celtic Dragons</button>
                <button className="teamButton">Saracens Mavericks</button>
                <button className="teamButton">London Pulse</button>
                <button className="teamButton">Team Bath</button>
                <button className="teamButton">Loughborough Lightning</button>
                <button className="teamButton">Strathclyde Sirens</button>
                <button className="teamButton">Manchester Thunder</button>
                <button className="teamButton">Severn Stars</button>
                <button className="teamButton">Wasps Netball</button>
                <button className="teamButton">Surrey Storm</button>
            </div>
           <StatsTable />
        </div>
    );
}

export { Stats };