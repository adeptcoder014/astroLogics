import axios from "axios"
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import { checkPlanetStrength } from "../util/checkPlanetStrength"
import { useRouter } from "next/router";
import {EventCard} from '../components/eventCard'
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
            setPlanet(res?.data[0]?.planets);
            setHouse(res?.data[0]?.houses);
        }),
            astroServer.post('/almanac/get', {
                "date": "2024-1-3",
                "time": "11:43"
            }).then(res => {
                setCurrentTransit(res?.data?.data)
            })
    }, [])


    // console.log('natalPlanetPosition ---------------', natalPlanetPosition);

    //============================================================
    const data = router.query
    const houseOwner = data["house-owner"]
    const rashi = data['rashi']
    const lagna = house[0]?.rashi

    let currentPlanet = planet.find(x => x.name === houseOwner)


    let natalPlanetPosition = currentPlanet?.isIn

    //------------------------------------
    let currentTransitForPlanet = {}
    if (currentTransit) {
        currentTransitForPlanet = currentTransit?.find((x) => {
            if (x.name === houseOwner) {
                return x
            }
        })
    }
    let planetRashi = house[natalPlanetPosition-1]?.rashi
    let currentTransitSign = currentTransitForPlanet?.position?.name
    
    let currentPlacesAway = checkPlanetStrength(houseOwner, lagna, currentTransitSign)
    let natalPlacesAway = checkPlanetStrength(houseOwner, lagna, planetRashi)
    console.log('currentPlacesAway ==========', currentTransitForPlanet);

    let currentPlanetPosition = currentPlacesAway?.house

    let currentPlanetPositionPlacesAwayFromTheNatalPosition = (currentPlanetPosition - natalPlanetPosition) + 1

    let obj = {
        awayFrom1stFromNatal: natalPlacesAway?.taurus?.placesAway,
        awayFrom2ndFromNatal: natalPlacesAway?.libra?.placesAway,
        awayFrom1st: currentPlacesAway?.taurus?.placesAway,
        awayFrom2nd: currentPlacesAway?.libra?.placesAway,
        current: currentPlanetPositionPlacesAwayFromTheNatalPosition,
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
                <EventCard/>

            </div>
        </>

    )
}


// checkPlanetStrength --------------- saturn capricorn capricorn
