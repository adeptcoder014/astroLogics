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
        title: 'The Stabilizer',
        description: 'Guardian of Perseverance ',
    },
    gemini: {
        gender: 'male',
        title: 'The Communicator',
        description: 'Master of Versatility',
    },
    cancer: {
        gender: 'female',
        title: 'The Nurturer',
        description: ' Protector of Emotional Bonds',
    },
    leo: {
        gender: 'male',
        title: 'The Performer',
        description: 'Illuminator of Charisma',
    },
    virgo: {
        gender: 'female',
        title: 'The Analyst',
        description: ' Architect of Precision ',
    },
    libra: {
        gender: 'male',
        title: 'The Harmonizer',
        description: ' Conductor of Balance ',
    },
    scorpio: {
        gender: 'female',
        title: 'The Intense',
        description: 'Guardian of Transformative Power',
    },
    sagittarius: {
        gender: 'male',
        title: 'The Explorer',
        description: ' Seeker of Boundless Horizons',
    },
    capricorn: {
        gender: 'female',
        title: 'The Admin',
        description: 'CEO of Steadfast Ambition',
    },
    aquarius: {
        gender: 'male',
        title: 'The Visionary',
        description: 'Innovator of Progressive Ideals',
    },
    pisces: {
        gender: 'female',
        title: 'The Dreamer',
        description: ' Weaver of Intuitive Realms',
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
// export default function Detail() {

    
    const Detail = () => {
        const router = useRouter();
        const [planet, setPlanet] = useState([]);
        const [house, setHouse] = useState([]);
        const [currentTransit, setCurrentTransit] = useState([]);
        const [selectedDiv, setSelectedDiv] = useState(''); // State to track selected div
    
        const currentDateTimeObject = getCurrentDateTime();
    
        useEffect(() => {
            astroServer.get('/user/get').then((res) => {
                setPlanet(res?.data[0]?.planets);
                setHouse(res?.data[0]?.houses);
            });
    
            astroServer.post('/almanac/get', currentDateTimeObject).then((res) => {
                setCurrentTransit(res?.data?.data);
            });
        }, []);
    
        const data = router.query;
        const houseOwner = data['house-owner'];
        const rashi = data['rashi'];
        const lagna = house[0]?.rashi;
    
        let currentPlanet = planet.find((x) => x.name === houseOwner);
        let natalPlanetPosition = currentPlanet?.isIn;
    
        let currentTransitForPlanet = {};
        if (currentTransit) {
            currentTransitForPlanet = currentTransit?.find((x) => {
                if (x.name === houseOwner) {
                    return x;
                }
            });
        }
        let planetRashi = house[natalPlanetPosition - 1]?.rashi;
        let currentTransitSign = currentTransitForPlanet?.position?.name;
    
        let currentPlacesAway = getTransitForPlanet_lagnaSpecific(lagna, houseOwner, currentTransitSign);
        let natalPlacesAway = getTransitForPlanet_lagnaSpecific(lagna, houseOwner, planetRashi);
    
        let currentPlanetPosition = currentPlacesAway?.house;
    
        let currentPlanetPositionPlacesAwayFromTheNatalPosition = currentPlanetPosition - natalPlanetPosition + 1;
    
        return (
            <CommanLayout>
                <div className="flex flex-col h-screen p-2">
                    <div className="flex flex-col items-center justify-center mt-5">
                        <img src={`./planets/sun.svg`} alt="Natal" width={75} />
                        <h2 className='text-4xl text-white font-extrabold mt-2'>Sun</h2>
                        <h2 className='text-md text-white mt-2 text-center w-3/4 mb-5'>Meet your 8th lord, he is your occult ruler</h2>
                    </div>
                    <div className="bg-[#34354F] flex flex-row p-1 justify-around rounded-xl">
                        <div className='bg-[#2D2E44] w-auto rounded-xl flex items-around justify-around p-2 shadow-sm gap-2'>
                            <div
                                className={`text-white bg-custom-gradient rounded-2xl px-8 py-2 ${selectedDiv === '1st-lord' ? 'shadow-lg' : 'shadow-md'}`}
                                onClick={() => setSelectedDiv('1st-lord')}
                            >
                                <p className="font-extrabold text-lg">1st lord</p>
                            </div>
                            <div
                                className={`text-white bg-custom-gradient rounded-2xl px-8 py-2 ${selectedDiv === '11st-lord' ? 'shadow-lg' : 'shadow-md'}`}
                                onClick={() => setSelectedDiv('11st-lord')}
                            >
                                <p className="font-extrabold text-lg">11st lord</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CommanLayout>
        );
    };
    
    export default Detail;
    