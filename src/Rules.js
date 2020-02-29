import React from 'react'
import './Rules.css'


function Rules() {
    return (
        <div className="rules">
            <ul className="rulesList">
                <li>Goals +2</li>
                <li>Misses -4</li>
                <li>Interceptions +10</li>
                <li>Turnovers -1</li>
                <li>Centre Pass Reception +0.5</li>
                <li>Contact -0.5</li>
                <li>Obstruction -0.5</li>
                <li>Pickups +10</li>
            </ul>
                * Captains will earn 2x the points for the week.
                Vice Captains will earn 1.5x the points for the week.
        </div>
    )
}

export default Rules;