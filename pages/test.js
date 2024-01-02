import axios from "axios"
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import { checkPlanetStrength } from "../components/util/checkPlanetStrength"

//============================================================
const ge = {
    capricorn: 'male'
}
export default function Test() {
    //============================================================
    const [planet, setPlanet] = useState({})
    const [house, setHouse] = useState({})
    //============================================================

    useEffect(() => {
        astroServer.get('/user/get').then(res => {
            // console.log(res.data[0].planets[0]);
            setPlanet(res?.data[0]?.planets[0]);
            setHouse(res?.data[0]?.houses[0]);
        })
    }, [])
    // console.log(planet.name);
    // console.log('hosue ----',house);
    //============================================================

    const planet_any = 'mars'
    const lagna = 'aries'
    const planetSign = 'gemini'

    const planetAspect = 'aries'
    //============================================================

    let planetaryPerformanceStrength = checkPlanetStrength(planet_any, lagna, planetSign)
    let planetaryAspect = house.rashi
    // console.log('planetaryPerformanceStrength ----', planetaryPerformanceStrength.aspect[planetAspect]);
    let x = planetaryPerformanceStrength.aspect[planetAspect]

    let obj = {
        planetaryAspect: `planetary aspect is : ${ge[planetaryAspect]} and is ${x} ${planetAspect}`,
        planetaryPerformanceStrength: `the strength of the house @ which the planet is deposited is ${planetaryPerformanceStrength?.planetStrength}`,
        planetaryIntent: `the house rashi is in : ${house.rashi}`,
        planetaryIntention: `planeatary-house rulership is : ${planet.rulerOf}`,
    }
    console.log('obj  ----', obj);

    let color = 'red'

    return (
        // =============== VIEW ===========================
        <div>
            <svg width="278" height="274" viewBox="0 0 278 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="139" cy="137" rx="139" ry="137" fill="#D9D9D9" />
                <rect x="21" width="66" height="69" fill="#CE9393" />
                <rect x="21" y='50' width="66" height="69" fill={color} rx='5'/>
            </svg>


        </div>

    )
}