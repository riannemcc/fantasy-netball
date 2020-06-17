import React, { useState, useEffect, useMemo } from 'react'

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
            <select name="shooters" id="shooterSelect" className="playerDropdown playerDropdown__shooters_one">
                <option value="">GS</option>
                {shooters ? (
                    <>
                        {shooters.map((playerDoc) => {
                            return <option value="shooter" key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                        })}
                    </>
                ): null}
            </select>
            <select name="shooters" id="shooterSelect" className="playerDropdown playerDropdown__shooters_two">
                <option value="">GA</option>
                {shooters ? (
                    <>
                        {shooters.map((playerDoc) => {
                            return <option value="shooter" key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                        })}
                    </>
                ): null}
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
            <select name="centreCourt" id="centreCourtSelect" className="playerDropdown playerDropdown__centreCourt_one">
                <option value="">WA</option>
                    {centreCourt ? (
                        <>
                        {centreCourt.map((playerDoc) => {
                                return <option value="centreCourt" key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                            })}
                        </>
                    ): null}
            </select>
            <select name="centreCourt" id="centreCourtSelect" className="playerDropdown playerDropdown__centreCourt_two">
                <option value="">C</option>
                    {centreCourt ? (
                        <>
                        {centreCourt.map((playerDoc) => {
                                return <option value="centreCourt" key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                            })}
                        </>
                    ): null}
            </select>
            <select name="centreCourt" id="centreCourtSelect" className="playerDropdown playerDropdown__centreCourt_three">
                <option value="">WD</option>
                    {centreCourt ? (
                        <>
                            {centreCourt.map((playerDoc) => {
                                return <option value="centreCourt" key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                            })}
                        </>
                    ): null}
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
            <select name="defenders" id="defendersSelect" className="playerDropdown playerDropdown__defence_one">
                <option value="">GD</option>
                    {defenders ? (
                        <>
                        {defenders.map((playerDoc) => {
                                return <option value="defenders" key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                            })}
                        </>
                    ): null}
            </select>
            <select name="defenders" id="defendersSelect" className="playerDropdown playerDropdown__defence_two">
                <option value="">GK</option>
                    {defenders ? (
                        <>
                        {defenders.map((playerDoc) => {
                                return <option value="defenders" key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                            })}
                        </>
                    ): null}
            </select>
        </>
    )

}

export const TeamSelection = ({firebase}) => {
    return (
        <div className="container">
            <div className="teamText">
                <h2> Select your Team</h2>
                <p>
                    Select one player for each position and 3 subs (1 shooter, 1 centre court and 1 defender)
                </p>
            </div>
            <NetballCourt>
                <ShooterSelection firebase={firebase} />
                <CentreCourtSelection firebase={firebase} />
                <DefenceSelection firebase={firebase} />
            </NetballCourt>
            <button className="teamSubmit">
                Submit team
            </button>
        </div>
    );
}

export default withFirebase(TeamSelection)