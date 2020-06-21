import React, { useState, useEffect } from 'react'

import { withFirebase } from './Firebase'
import { NetballCourt } from './NetballCourt'
import './Home.css'
import './LogIn.css'
import './TeamSelection.css'

function ShooterSelection({ firebase }) {
    const [shooters, setShooters] = useState(null)

    const fetchShooters = () => {
        firebase.playersByPositions(['GA', 'GS'])
            .then((playersSnapshot) => {
                setShooters(playersSnapshot.docs)
            })
            .catch(console.log)
    }

    useEffect(() => {
        if (!shooters) {
            fetchShooters()
        }
    })

    return (
        <>
            <select name="shooters1" id="shooterSelect" className="playerDropdown playerDropdown__shooters_one">
                <option value="">GS</option>
                {shooters ? (
                    <>
                        {shooters.map((playerDoc) => {
                            return <option value={playerDoc.id} key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                        })}
                    </>
                ) : null}
            </select>
            <select name="shooters2" id="shooterSelect" className="playerDropdown playerDropdown__shooters_two">
                <option value="">GA</option>
                {shooters ? (
                    <>
                        {shooters.map((playerDoc) => {
                            return <option value={playerDoc.id} key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                        })}
                    </>
                ) : null}
            </select>
            <select name="shootersSub" id="shooterSelect" className="playerDropdown playerDropdown__bench_one">
                <option value="">Shooter sub</option>
                {shooters ? (
                    <>
                        {shooters.map((playerDoc) => {
                            return <option value={playerDoc.id} key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                        })}
                    </>
                ) : null}
            </select>
        </>
    )

}

function CentreCourtSelection({ firebase }) {
    const [centreCourt, setCentreCourt] = useState(null)

    const fetchCentreCourt = () => {
        firebase.playersByPositions(['WA', 'C', 'WD'])
            .then((playersSnapshot) => {
                setCentreCourt(playersSnapshot.docs)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        if (!centreCourt) {
            fetchCentreCourt()
        }
    })

    return (
        <>
            <select name="centreCourt1" id="centreCourtSelect" className="playerDropdown playerDropdown__centreCourt_one">
                <option value="">WA</option>
                {centreCourt ? (
                    <>
                        {centreCourt.map((playerDoc) => {
                            return <option value={playerDoc.id} key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                        })}
                    </>
                ) : null}
            </select>
            <select name="centreCourt2" id="centreCourtSelect" className="playerDropdown playerDropdown__centreCourt_two">
                <option value="">C</option>
                {centreCourt ? (
                    <>
                        {centreCourt.map((playerDoc) => {
                            return <option value={playerDoc.id} key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                        })}
                    </>
                ) : null}
            </select>
            <select name="centreCourt3" id="centreCourtSelect" className="playerDropdown playerDropdown__centreCourt_three">
                <option value="">WD</option>
                {centreCourt ? (
                    <>
                        {centreCourt.map((playerDoc) => {
                            return <option value={playerDoc.id} key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                        })}
                    </>
                ) : null}
            </select>
            <select name="centreCourtSub" id="centreCourtSelect" className="playerDropdown playerDropdown__bench_two">
                <option value="">Centre Court Sub</option>
                {centreCourt ? (
                    <>
                        {centreCourt.map((playerDoc) => {
                            return <option value={playerDoc.id} key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                        })}
                    </>
                ) : null}
            </select>
        </>
    )

}
function DefenceSelection({ firebase }) {
    const [defenders, setDefenders] = useState(null)

    const fetchDefenders = () => {
        firebase.playersByPositions(['GD', 'GK'])
            .then((playersSnapshot) => {
                setDefenders(playersSnapshot.docs)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        if (!defenders) {
            fetchDefenders()
        }
    })

    return (
        <>
            <select name="defenders1" id="defendersSelect" className="playerDropdown playerDropdown__defence_one">
                <option value="">GD</option>
                {defenders ? (
                    <>
                        {defenders.map((playerDoc) => {
                            return <option value={playerDoc.id} key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                        })}
                    </>
                ) : null}
            </select>
            <select name="defenders2" id="defendersSelect" className="playerDropdown playerDropdown__defence_two">
                <option value="">GK</option>
                {defenders ? (
                    <>
                        {defenders.map((playerDoc) => {
                            return <option value={playerDoc.id} key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                        })}
                    </>
                ) : null}
            </select>
            <select name="defendersSub" id="defendersSelect" className="playerDropdown playerDropdown__bench_three">
                <option value="">Defence Sub</option>
                {defenders ? (
                    <>
                        {defenders.map((playerDoc) => {
                            return <option value={playerDoc.id} key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                        })}
                    </>
                ) : null}
            </select>
        </>
    )
}

export const TeamSelection = ({ firebase }) => {
    return (
        <div className="container">
            <div className="teamText">
                <h2> Select your Team</h2>
                <p>
                    Select one player for each position and 3 subs (1 shooter, 1 centre court and 1 defender)
                </p>
            </div>
            <form id="formy" onSubmit={(event) => {
                event.preventDefault()
                const data = new FormData(event.target)
                const shooters1 = data.get("shooters1")
                const shooters2 = data.get("shooters2")
                const centreCourt1 = data.get("centreCourt1")
                const centreCourt2 = data.get("centreCourt2")
                const centreCourt3 = data.get("centreCourt3")
                const defenders1 = data.get("defenders1")
                const defenders2 = data.get("defenders2")
                const shooterSub = data.get("shootersSub")
                const centreCourtSub = data.get("centreCourtSub")
                const defenceSub = data.get("defendersSub")
                const teamName = data.get("teamname")
                if (firebase.currentUserId) {
                    firebase.updateUserData(firebase.currentUserId, { teamName, team: [shooters1, shooters2, centreCourt1, centreCourt2, centreCourt3, defenders1, defenders2, shooterSub, centreCourtSub, defenceSub] })
                }
            }} >
                <label for="teamname">Team name:</label>
                <input type="text" id="teamname" name="teamname" label="Team name" className="teamnameInput"></input>
                <NetballCourt>
                    <ShooterSelection firebase={firebase} />
                    <CentreCourtSelection firebase={firebase} />
                    <DefenceSelection firebase={firebase} />
                </NetballCourt>
                <button type="submit" className="teamSubmit">
                    Submit team
                </button>
            </form>
        </div>
    );
}

export default withFirebase(TeamSelection)