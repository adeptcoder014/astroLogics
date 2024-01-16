import { useEffect } from "react"
import { SineWave } from "./sineWave"

export const CurrentTransit = () => {
    // =============================================================

    const sunPosition = {
        planet: 'sun',
        whichHouse: '10',
    }
    const moonPosition = {
        planet: 'moon',
        whichHouse: '12',
    }
    const mercuryPosition = {
        planet: 'mercury',
        whichHouse: '9',
    }
    const venusPosition = {
        planet: 'venus',
        whichHouse: '8',
    }
    const jupiterPosition = {
        planet: 'jupiter',
        whichHouse: '1',
    }
    const marsPosition = {
        planet: 'mars',
        whichHouse: '9',
    }
    const saturnPosition = {
        planet: 'saturn',
        whichHouse: '11',
    }
    const nodePosition = {
        planet: 'node',
        whichHouse: '12',
    }
    // =============================================================

    
    return (
        <>
            <SineWave
                sunPosition={sunPosition}
                moonPosition={moonPosition}
                mercuryPosition={mercuryPosition}
                venusPosition={venusPosition}
                marsPosition={marsPosition}
                jupiterPosition={jupiterPosition}
                saturnPosition={saturnPosition}
                nodePosition={nodePosition}
            />

        </>
    )
}