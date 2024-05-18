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
// const rashiGender = {
//     aries: {
//         gender: 'male',
//         title: 'The Pioneer ',
//         description: 'Catalyst of New Beginnings in ',
//     },
//     taurus: {
//         gender: 'female',
//         title: 'The Stabilizer',
//         description: 'Guardian of Perseverance ',
//     },
//     gemini: {
//         gender: 'male',
//         title: 'The Communicator',
//         description: 'Master of Versatility',
//     },
//     cancer: {
//         gender: 'female',
//         title: 'The Nurturer',
//         description: ' Protector of Emotional Bonds',
//     },
//     leo: {
//         gender: 'male',
//         title: 'The Performer',
//         description: 'Illuminator of Charisma',
//     },
//     virgo: {
//         gender: 'female',
//         title: 'The Analyst',
//         description: ' Architect of Precision ',
//     },
//     libra: {
//         gender: 'male',
//         title: 'The Harmonizer',
//         description: ' Conductor of Balance ',
//     },
//     scorpio: {
//         gender: 'female',
//         title: 'The Intense',
//         description: 'Guardian of Transformative Power',
//     },
//     sagittarius: {
//         gender: 'male',
//         title: 'The Explorer',
//         description: ' Seeker of Boundless Horizons',
//     },
//     capricorn: {
//         gender: 'female',
//         title: 'The Admin',
//         description: 'CEO of Steadfast Ambition',
//     },
//     aquarius: {
//         gender: 'male',
//         title: 'The Visionary',
//         description: 'Innovator of Progressive Ideals',
//     },
//     pisces: {
//         gender: 'female',
//         title: 'The Dreamer',
//         description: ' Weaver of Intuitive Realms',
//     },
// }
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
    const [activeIndex, setActiveIndex] = useState(null);

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


    const handleToggle = (index) => {
        console.log(index);
        setActiveIndex(activeIndex === index ? null : index);
    };

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
            <div className="flex flex-col  p-2">
                <div className="flex flex-col items-center justify-center mt-5">
                    <img src={`./planets/mars.svg`} alt="Natal" width={75} />
                    <h2 className='text-4xl text-white font-extrabold mt-2'>Sun</h2>
                    <h2 className='text-md text-white mt-2 text-center w-3/4 mb-5'>Meet your 8th lord, he is your occult ruler</h2>
                </div>
                <div className="bg-[#34354F] flex flex-col p-1 justify-around rounded-xl">
                    <div className='bg-[#2D2E44] rounded-xl flex   items-center justify-center p-2 shadow-sm'>
                        <div
                            className={`text-white bg-custom-gradient rounded-2xl mr-5 px-8 py-2 ${selectedDiv === '1st-lord' ? 'shadow-md shadow-black' : 'shadow-md'}`}
                            onClick={() => setSelectedDiv('1st-lord')}
                        >
                            <p className="font-extrabold text-lg">1st lord</p>
                        </div>
                        <div
                            className={`text-white bg-custom-gradient rounded-2xl px-8 py-2 ${selectedDiv === '11st-lord' ? 'shadow-md shadow-black' : 'shadow-md'}`}
                            onClick={() => setSelectedDiv('11st-lord')}
                        >
                            <p className="font-extrabold text-lg">11st lord</p>
                        </div>

                    </div>




                    <div className="m-2 shadow-sm shadow-black rounded-xl">
                        {/* <h2 className="text-xl font-semibold mt-10 mb-2 text-center">Upcoming Saturn Event</h2> */}
                        <div className="bg-custom-gradient p-4 rounded-xl flex flex-col">
                            <div className="flex flex-1 justify-between mb-5">



                                <div className="flex items-center justify-between">
                                    <img
                                        src={`./zodiac/aries.png`}
                                        alt="Natal"
                                        width={33}
                                    // className='mr-5'
                                    />
                                    <p className='text-[#8A95BB] text-sm font-extrabold'>Male Aspect</p>
                                </div>

                                {/* <div className="flex items-end justify-end"> */}


                                <div className="flex items-center">
                                    <img
                                        src={`./icons/transit.svg`}
                                        alt="Natal"
                                        width={28}
                                        className='mr-1'
                                    />
                                    <div className='text-[#8A95BB] text-sm font-extrabold'>3rd house</div>

                                </div>
                            </div>

                            <p className="text-xs text-white text-center">
                                Independence, innovation, analytical prowess, visionary thinking. Unique values, innovative financial strategies, strategic communication.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-4 mt-4 text-center">Planets current transit</h2>

                    <div className="items-center bg-[#3D3E4F] rounded-xl">

                        <CurrentTransit />
                    </div>

                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 mt-4 text-center">Planets through the zodiac</h2>
                    <div className="bg-[#3D3E4F] p-4 rounded-xl">
                        {["Saturn", "Moon", "Saturn"].map((planet, index) => (
                            <div key={index}>
                                <div className="text-center mb-4 ">
                                    <div
                                        className="space-x-2 mb-2 mt-3 flex items-between justify-between cursor-pointer"
                                        onClick={() => handleToggle(index)}
                                    >
                                        <div className="flex items-center">
                                            <div className={`bg-${planet === "Saturn" ? "red" : "green"}-500 rounded-full w-2 h-2 mr-2`} />
                                            <p className="text-sm">{planet}</p>
                                        </div>
                                        <p className="text-sm font-bold">20th May, 2024</p>
                                    </div>
                                    <div className={`accordion-content ${activeIndex === index ? "block" : "hidden"} ease-out text-center bg-[#A1A1B0] p-4 rounded-xl`}>
                                        <h3 className="font-extrabold mb-2 text-white">{planet} in Shatabhisha:</h3>
                                        <p className="text-sm text-white">
                                            Independence, innovation, analytical prowess, visionary thinking. Unique values, innovative financial strategies, strategic communication.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </CommanLayout>
    );
};

export default Detail;
