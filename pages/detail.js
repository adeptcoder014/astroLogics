import axios from "axios"
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import { checkPlanetStrength } from "../util/checkPlanetStrength"
import { useRouter } from "next/router";
import { EventCard } from '../components/eventCard'
import { SineWave } from '../components/sineWave.js'
import Image from "next/image";
import CommanLayout from "../layouts/comman";
//============================================================
const rashiGender = {
    aries: 'male',
    taurus: 'female',
    gemini: 'male',
    cancer: 'female',
    leo: 'male',
    virgo: 'female',
    libra: 'male',
    scorpio: 'female',
    sagittarius: 'male',
    capricorn: 'female',
    aquarius: 'male',
    pisces: 'female',
}

export default function Detail() {
    const router = useRouter();
    //============================================================
    const [planet, setPlanet] = useState([])
    const [house, setHouse] = useState([])
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



    //============================================================
    const data = router.query
    // console.log('router.query.data =', data);
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
    let planetRashi = house[natalPlanetPosition - 1]?.rashi
    let currentTransitSign = currentTransitForPlanet?.position?.name

    let currentPlacesAway = checkPlanetStrength(houseOwner, lagna, currentTransitSign)
    let natalPlacesAway = checkPlanetStrength(houseOwner, lagna, planetRashi)
    // console.log('currentPlacesAway ==========', currentTransitForPlanet);

    let currentPlanetPosition = currentPlacesAway?.house

    let currentPlanetPositionPlacesAwayFromTheNatalPosition = (currentPlanetPosition - natalPlanetPosition) + 1

    // let obj = {
    //     awayFrom1stFromNatal: natalPlacesAway?.taurus?.placesAway,
    //     awayFrom2ndFromNatal: natalPlacesAway?.libra?.placesAway,
    //     awayFrom1st: currentPlacesAway?.taurus?.placesAway,
    //     awayFrom2nd: currentPlacesAway?.libra?.placesAway,
    //     current: currentPlanetPositionPlacesAwayFromTheNatalPosition,
    // }

    // let obj = {
    //     awayFrom1stFromNatal: natalPlacesAway?.taurus?.placesAway,
    //     awayFrom2ndFromNatal: natalPlacesAway?.libra?.placesAway,
    //     awayFrom1st: currentPlacesAway?.taurus?.placesAway,
    //     awayFrom2nd: currentPlacesAway?.libra?.placesAway,
    //     current: currentPlanetPositionPlacesAwayFromTheNatalPosition,
    // }

    let obj = {
        awayFrom1stFromNatal: natalPlacesAway?.[rashi]?.placesAway,
        // awayFrom2ndFromNatal: natalPlacesAway?.libra?.placesAway,
        awayFrom1st: currentPlacesAway?.[rashi]?.placesAway,
        // awayFrom2nd: currentPlacesAway?.libra?.placesAway,
        current: currentPlanetPositionPlacesAwayFromTheNatalPosition,
    }


    console.log('obj ---------------', obj);
    // console.log('rashi ---------------', rashi);

    //============================================================

    // const planet_any = 'mars'
    // const lagna = 'aries'
    // const planetSign = 'gemini'

    // const planetAspect = 'aries'
    //============================================================



    return (
        // =============== VIEW ===========================
        <>

            <CommanLayout>
                <div style={{
                    width: '95vw',
                    height: '95vh',
                }}>
                    <div className="planet-detail-card">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <Image src={require("../public/planets/venus.png")}
                                width={50} height={50} />
                        </div>
                        <div>


                            <h3>The Liberator</h3>
                            <p style={{ color: "#8B8B8B", fontSize: 13 }}>The Dushtana ruler</p>
                        </div>
                        <div>
                            <h6>Current transit </h6>
                            <h3> {obj.current}</h3>
                        </div>
                    </div>
                    <p>Story of {houseOwner}`&apos;` {rashiGender[rashi]} side   <Image src={require(`../public/zodiac/taurus.png`)} width={45} height={45} />  </p>
                    < div className="planet-detail-card" style={{ flexDirection: "column" }} >
                        <div style={{ marginTop: 20 }}>


                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}>

                                <div style={{
                                    background: '#3D3E4F',
                                    borderRadius: 8,
                                    padding: '0px 15px'
                                }}>

                                    <h2 style={{ color: 'white' }}>{obj.awayFrom1stFromNatal}</h2>
                                </div>
                                <p>Female Deviation</p>
                            </div>
                        </div>
                        <div style={{ marginTop: 20, marginBottom: 20 }}>


                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}>

                                <div style={{
                                    background: '#3D3E4F',
                                    borderRadius: 8,
                                    padding: '0px 15px'
                                }}>

                                    <h2 style={{ color: 'white' }}>{obj.awayFrom1st}</h2>
                                </div>
                                <p>Tranist Deviation</p>
                            </div>
                        </div>

                    </div>
                    <div>

                        <p>Current transit for {houseOwner}</p>

                        <div style={{ backgroundColor: "#D9D9D9", padding: 10, borderRadius: 16 }}>
                            <Image src={require("../components/sineWave.js")} />
                            <SineWave inFirst={String(obj.current - 1)} />

                        </div>
                    </div>

                </div >
            </CommanLayout>
        </>

    )
}


// checkPlanetStrength --------------- saturn capricorn capricorn
