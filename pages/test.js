import axios from "axios"
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import { checkPlanetStrength } from "../components/util/checkPlanetStrength"
import { useRouter } from "next/router";

//============================================================
const ge = {
    capricorn: 'male'
}
const me = {
    capricorn: 'male'
}
export default function Test() {
    const router = useRouter();
    const data = router.query
    console.log('data ---------------',data);

    //============================================================
    const [planet, setPlanet] = useState({})
    const [house, setHouse] = useState({})
    const [currentTransit, setCurrentTransit] = useState({})
    //============================================================

    useEffect(() => {
        astroServer.get('/user/get').then(res => {
            // console.log(res.data[0].planets[0]);
            setPlanet(res?.data[0]?.planets[0]);
            setHouse(res?.data[0]?.houses[0]);
        }),
            astroServer.post('/almanac/get', {
                "date": "2024-1-3",
                "time": "11:43"
            }).then(res => {
                setCurrentTransit(res?.data?.data)
            })
    }, [])
    // console.log(currentTransit[4].position.name);
   
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
    // console.log('obj  ----', obj);

    let color = 'red'

    return (
        // =============== VIEW ===========================
       <>
       <div>
        <button onClick={()=>router.push(`/detail/?planet=${currentTransit[4].position.name}`)}>
            page
        </button>
       </div>
       </>

    )
}