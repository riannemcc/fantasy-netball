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
        <div className="playerDropdown playerDropdown__shooters">
            <select name="shooters" id="shooterSelect">
                <option value="">Shooter selection</option>
                {shooters ? (
                    <>
                        {shooters.map((playerDoc) => {
                            return <option value="shooter" key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                        })}
                    </>
                ): null}
            </select>
        </div>
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
        <div className="playerDropdown playerDropdown__centreCourt">
            <select name="centreCourt" id="centreCourtSelect">
                <option value="">centre court selection</option>
                    {centreCourt ? (
                        <>
                          {centreCourt.map((playerDoc) => {
                                return <option value="centreCourt" key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                            })}
                        </>
                    ): null}
            </select>
        </div>
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
        <div className="playerDropdown playerDropdown__defenders">
            <select name="defenders" id="defendersSelect">
                <option value="">defence selection</option>
                    {defenders ? (
                        <>
                          {defenders.map((playerDoc) => {
                                return <option value="defenders" key={playerDoc.id}>{playerDoc.get('name')} - {playerDoc.get('team-nickname')}</option>
                            })}
                        </>
                    ): null}
            </select>
        </div>
    )

}

export const TeamSelection = ({firebase}) => {
    return (
        <div className="container">
            <div className="teamText">
                <h2> Select your Team</h2>
                <p>
                    You may pick 3 shooting players (GS,GA), 4 centre court players (WA,C,WD) 
                    and three defensive players (GD,GK)
                </p>
            </div>
            <NetballCourt>
                <ShooterSelection firebase={firebase} />
                <CentreCourtSelection firebase={firebase} />
                <DefenceSelection firebase={firebase} />
            </NetballCourt>
            <button>Submit team</button>
        </div>
    );
}

export default withFirebase(TeamSelection)