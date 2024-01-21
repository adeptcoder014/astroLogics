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
import { CurrentTransit } from "../components/currentTransit.js";
//============================================================
const rashiGender = {
    aries: {
        gender: 'male',
        title: 'The Pioneer ',
        description: 'Catalyst of New Beginnings in ',
    },
    taurus: {
        gender: 'female',
        title: 'The Impulsive',
        description: 'Initiating new things in ',
    },
    gemini: {
        gender: 'male',
        title: 'The Impulsive',
        description: 'Initiating new things in ',
    },
    cancer: {
        gender: 'female',
        title: 'The Impulsive',
        description: 'Initiating new things in ',
    },
    leo: {
        gender: 'male',
        title: 'The Impulsive',
        description: 'Initiating new things in ',
    },
    virgo: {
        gender: 'female',
        title: 'The Impulsive',
        description: 'Initiating new things in ',
    },
    libra: {
        gender: 'male',
        title: 'The Impulsive',
        description: 'Initiating new things in ',
    },
    scorpio: {
        gender: 'female',
        title: 'The Impulsive',
        description: 'Initiating new things in ',
    },
    sagittarius: {
        gender: 'male',
        title: 'The Impulsive',
        description: 'Initiating new things in ',
    },
    capricorn: {
        gender: 'female',
        title: 'The Admin',
        description: 'Ceo-pana in the ',
    },
    aquarius: {
        gender: 'male',
        title: 'The Impulsive',
        description: 'Initiating new things in ',
    },
    pisces: {
        gender: 'female',
        title: 'The Impulsive',
        description: 'Initiating new things in ',
    },
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


    console.log('current ---------------', obj.awayFrom1st);
    console.log('current xxx ---------------', lagna, houseOwner, currentTransitSign);
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
                    // height: '95vh',
                }}>
                    <div className="planet-detail-card">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <Image src={require(`../public/planets/${houseOwner ? houseOwner : 'sun'}.svg`)}
                                width={50} height={50} />
                        </div>
                        <div>


                            <h3>{rashiGender[rashi]?.title}</h3>
                            <p style={{ color: "#8B8B8B", fontSize: 13 }}>{rashiGender[rashi]?.description}  {currentPlanet?.isIn}</p>
                        </div>
                        {/* <div>
                            <h6 style={{ color: "#8B8B8B", fontSize: 13 }}>Current transit </h6>
                            <h3> {obj.current}</h3>
                        </div> */}
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyItems: "center",
                        padding: 10,
                        marginTop: 25
                    }}>
                        <p style={{ marginRight: 10 }}>Story of {houseOwner}&apos;s {rashiGender[rashi].gender} side   </p>
                        <Image
                            src={require(`../public/zodiac/${rashi}.png`)}
                            height={35}
                            width={35}
                        />

                    </div>
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
                                whichHouse={String(obj.awayFrom1st)}
                                planet={houseOwner}
                                lagnaSign={rashi}
                            />
                        </div>
                        {/* <div style={{ backgroundColor: "#D9D9D9", padding: 10, borderRadius: 16, marginTop: 18 }}>
                            <CurrentTransit />
                        </div> */}
                    </div>

                </div >
            </CommanLayout>
        </>

    )
}


// checkPlanetStrength --------------- saturn capricorn capricorn
