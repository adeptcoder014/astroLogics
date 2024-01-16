import axios from "axios"
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import { getTransitForPlanet_lagnaSpecific } from "../util/checkPlanetStrength"
import { useRouter } from "next/router";
import { EventCard } from '../components/eventCard'
// import { SineWave } from '../components/sineWave_1.js'
import { SineWave } from '../components/sineWave_1.js'
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
//============================================================


function getCurrentDateTime() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

    // Get the time in the format "HH:mm"
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

    return {
        date: formattedDate,
        time: formattedTime
    };
}

//============================================================
export default function Detail() {
    const router = useRouter();
    //============================================================
    const [planet, setPlanet] = useState([])
    const [house, setHouse] = useState([])
    const [currentTransit, setCurrentTransit] = useState([])
    //============================================================

    const currentDateTimeObject = getCurrentDateTime();




    useEffect(() => {
        astroServer.get('/user/get').then(res => {
            // console.log(res.data[0].planets[0]);
            setPlanet(res?.data[0]?.planets);
            setHouse(res?.data[0]?.houses);
        }),
            astroServer.post('/almanac/get', currentDateTimeObject).then(res => {
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

    let currentPlacesAway = getTransitForPlanet_lagnaSpecific(lagna, houseOwner, currentTransitSign)
    let natalPlacesAway = getTransitForPlanet_lagnaSpecific(lagna, houseOwner, planetRashi)

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


    console.log('current ---------------', obj.current);
    // console.log('natalPlacesAway ---------------', natalPlacesAway);

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

                            <SineWave
                                whichHouse={String(obj.current - 1)}
                                planet = {houseOwner}
                            />
                        </div>

                    </div>

                </div >
            </CommanLayout>
        </>

    )
}


// checkPlanetStrength --------------- saturn capricorn capricorn
