import { useEffect, useState } from "react"
import { SineWave } from "./sineWave"
import { useQuery } from "react-query"
import { getAlmanac } from "../controller/transit"

const signHouse = {
    aries: '1',
    taurus: '2',
    gemini: '3',
    cancer: '4',
    leo: '5',
    virgo: '6',
    libra: '7',
    scorpio: '8',
    sagittarius: '9',
    capricorn: '10',
    aquarius: '11',
    pisces: '12',
}

export const CurrentTransit = () => {
    // =============================================================
    const position = [
        {
            planet: 'sun',
            whichHouse: '0',
        },
        {
            planet: 'moon',
            whichHouse: '0',
        },
        {
            planet: 'mercury',
            whichHouse: '0',
        },
        {
            planet: 'venus',
            whichHouse: '0',
        },
        {
            planet: 'mars',
            whichHouse: '10',
        },
        {
            planet: 'jupiter',
            whichHouse: '0',
        },
        {
            planet: 'saturn',
            whichHouse: '0',
        },
        {
            planet: 'mean node',
            whichHouse: '0',
        },
    ]






    // =============================================================

    const { data } = useQuery('getTransitData', getAlmanac)
    const [tranistData, setTranistData] = useState([])
    // console.log('tranist data ----', data.data.data[0]);

    let assigningTransitsValue = data?.data?.data?.map((x) => {
        position.filter(w => {
            if (x.name == w.planet) {
                w.whichHouse = signHouse[x.position.name]
            }

        })
    })



    return (
        <>

            <SineWave
                sunPosition={position[0]}
                moonPosition={position[1]}
                mercuryPosition={position[2]}
                venusPosition={position[3]}
                marsPosition={position[4]}
                jupiterPosition={position[5]}
                saturnPosition={position[6]}
                nodePosition={position[7]}
            />

        </>
    )
}