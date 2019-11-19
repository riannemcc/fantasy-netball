import React from 'react';
import './Home.css';
import './LogIn.css'


function TeamSelection() {
    return (
        <>
            <h2> Select your Team</h2>
            <p>
                You may pick 3 shooting players (GS,GA), 4 centre court players (WA,C,WD) 
                and three defensive players (GD,GK)
            </p>

            <select name="shooters" id="shooterSelect">
                <option value="">Shooter selection</option>
                <option value="shooter">Jo Harten</option>
                <option value="shooter">Helen Housby</option>
                <option value="shooter">Caitlin Thwaites</option>
                <button className="submitButton">Submit</button>
            </select>

            <select name="shooters" id="shooterSelect">
                <option value="">Shooter selection</option>
                <option value="shooter">Jo Harten</option>
                <option value="shooter">Helen Housby</option>
                <option value="shooter">Caitlin Thwaites</option>
                <button className="submitButton">Submit</button>
            </select>

            <select name="shooters" id="shooterSelect">
                <option value="">Shooter selection</option>
                <option value="shooter">Jo Harten</option>
                <option value="shooter">Helen Housby</option>
                <option value="shooter">Caitlin Thwaites</option>
                <button className="submitButton">Submit</button>
            </select>

            <select name="centre-court" id="centreCourtSelect">
                <option value="">Centre court selection</option>
                <option value="centreCourt">Rianne</option>
                <option value="centreCourt">Kimmy Gee</option>
                <option value="centreCourt">Geva Mentor</option>
                <button className="submitButton">Submit</button>
            </select>

            <select name="centre-court" id="centreCourtSelect">
                <option value="">Centre court selection</option>
                <option value="centreCourt">Rianne</option>
                <option value="centreCourt">Kimmy Gee</option>
                <option value="centreCourt">Geva Mentor</option>
                <button className="submitButton">Submit</button>
            </select>

            <select name="centre-court" id="centreCourtSelect">
                <option value="">Centre court selection</option>
                <option value="centreCourt">Rianne</option>
                <option value="centreCourt">Kimmy Gee</option>
                <option value="centreCourt">Geva Mentor</option>
                <button className="submitButton">Submit</button>
            </select>

            <select name="centre-court" id="centreCourtSelect">
                <option value="">Centre court selection</option>
                <option value="centreCourt">Rianne</option>
                <option value="centreCourt">Kimmy Gee</option>
                <option value="centreCourt">Geva Mentor</option>
                <button className="submitButton">Submit</button>
            </select>

            <select name="defence" id="defenceSelect">
                <option value="">Defence selection</option>
                <option value="defence">Ama Agbeze</option>
                <option value="defence">Sonia Mkloma</option>
                <option value="defencde">Kadeen Corbin</option>
                <button className="submitButton">Submit</button>
            </select>

            <select name="defence" id="defenceSelect">
                <option value="">Defence selection</option>
                <option value="defence">Ama Agbeze</option>
                <option value="defence">Sonia Mkloma</option>
                <option value="defencde">Kadeen Corbin</option>
                <button className="submitButton">Submit</button>
            </select>

            <select name="defence" id="defenceSelect">
                <option value="">Defence selection</option>
                <option value="defence">Ama Agbeze</option>
                <option value="defence">Sonia Mkloma</option>
                <option value="defencde">Kadeen Corbin</option>
                <button className="submitButton">Submit</button>
            </select>
        </>
    );
}

export default TeamSelection;