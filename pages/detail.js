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
export default function Detail() {
    const router = useRouter();
    //============================================================
    const [planet, setPlanet] = useState([])
    const [house, setHouse] = useState({})
    const [currentTransit, setCurrentTransit] = useState([])
    //============================================================
    // console.log('currentTransit ---------------', currentTransit);

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
    // console.log(currentTransit[4]);


    let natalPlanetPosition = planet.isIn
    console.log('natalPlanetPosition ---------------',natalPlanetPosition);

    //============================================================
    const data = router.query
    const houseOwner = data["house-owner"]
    const rashi = data['rashi']
    const lagna = house.rashi

    //------------------------------------
    let currentTransitForPlanet = {}
    if (currentTransit) {
        currentTransitForPlanet = currentTransit?.find((x) => {
            if (x.name === houseOwner) {
                //    console.log('here --------',x);
                return x
            }
        })
    }
    let currentTransitSign = currentTransitForPlanet?.position?.name
    // console.log('currentTransitSign ---------------',currentTransitSign);
    let currentPlacesAway = checkPlanetStrength(houseOwner, lagna, currentTransitSign)
    let currentPlanetPosition = currentPlacesAway?.house
    console.log('currentPlanetPosition ---------------',currentPlanetPosition);

    let currentPlanetPositionPlacesAwayFromTheNatalPosition = (currentPlanetPosition-natalPlanetPosition)
    let obj ={
        awayFrom1st:currentPlacesAway?.capricorn?.placesAway,
        awayFrom2st:currentPlacesAway?.aquarius?.placesAway,
        currentPlanetPositionPlacesAwayFromTheNatalPosition:currentPlanetPositionPlacesAwayFromTheNatalPosition,
    }

    console.log('obj ---------------', obj);

    //============================================================

    // const planet_any = 'mars'
    // const lagna = 'aries'
    // const planetSign = 'gemini'

    // const planetAspect = 'aries'
    //============================================================



    return (
        // =============== VIEW ===========================
        <>
            <div>
                <h1>he</h1>
            </div>
        </>

    )
}


// checkPlanetStrength --------------- saturn capricorn capricorn
