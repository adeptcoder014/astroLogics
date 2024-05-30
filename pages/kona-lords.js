import React, { useEffect, useState } from 'react';
import CommanLayout from '../layouts/comman';
import { userContext } from '../context/userContext';
import { getUserById } from '../controller/user';
import { useRouter } from "next/router";

const KonaLord = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const router = useRouter();
    let currentKona = router?.query?.kona
    const [userDetail, setUserDetail] = useState([]);
    const [userHousesDetails, setUserHousesDetails] = useState([]);
    const [userPlanetsDetails, setUserPlanetsDetails] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState({name : 'planet'});

    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);

    // conole.log(user.name);

    // let { userToken } = userContext()
    let userToken = ''
    if (userToken || userToken === null || userToken === '') {
        const ISSERVER = typeof window === "undefined";

        if (!ISSERVER) {

            userToken = localStorage.getItem('accessToken');
        }
    }




    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true)
                const userData = await getUserById(userToken);
                console.log('userToken', userToken);
                console.log('-----', userData?.data);
                setUserHousesDetails(userData?.data?.houses);
                setUserPlanetsDetails(userData?.data?.planets);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);



    console.log('userPlanetsDetails -------', userPlanetsDetails);

    const getOrdinal = (num) => {
        const ordinalSuffixes = ["th", "st", "nd", "rd"];
        const remainder = num % 100;
        return num + (ordinalSuffixes[(remainder - 20) % 10] || ordinalSuffixes[remainder] || ordinalSuffixes[0]);
    };



    const konaMapping = {
        dharma: [1, 5, 9],
        artha: [2, 6, 10],
        kama: [3, 7, 11],
        moksha: [4, 8, 12]
    };

    function assignKona(house) {
        for (const kona in konaMapping) {
            if (konaMapping[kona].includes(house.bhava)) {
                house.kona = kona;
                break;
            }
        }
        return house;
    }

    const housesWithKona = userHousesDetails?.map(assignKona);
    const filterByKona = (kona) => housesWithKona?.filter(house => house.kona === kona);

    const dharmaHouses = filterByKona('dharma');
    const arthaHouses = filterByKona('artha');
    const kamaHouses = filterByKona('kama');
    const mokshaHouses = filterByKona('moksha');

    let userKonaDetails = {
        fire: dharmaHouses,
        earth: arthaHouses,
        air: kamaHouses,
        water: mokshaHouses,
    }

    // console.log('user current kona lords ----', userKonaDetails[currentKona]);
    // console.log('userPlanetsDetails ----', userPlanetsDetails);
    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    const handlePlanetEvent = async (owner) => {
        let data = {}
        data = userPlanetsDetails.find(x => {
            if (x.name == owner) {

                setSelectedPlanet(x);
            }
        })
        return (data)
    }

    return (
        <CommanLayout>
            <div className="bg-gray-900 text-white min-h-screen p-6 rounded-xl">
                <ul className="bg-custom-gradient flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mb-5 rounded-xl">
                    <li className="me-2">
                        <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Value</a>
                    </li>
                    <li className="me-2">
                        <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Value</a>
                    </li>
                    <li className="me-2">
                        <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Skill</a>
                    </li>
                    <li className="me-2">
                        <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Root</a>
                    </li>
                </ul>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-center">Rulers of The <strong>ARTHA</strong></h2>
                    <h2 className="text-xl font-semibold mb-4 text-center">( 2nd 6th 10th ) </h2>
                    <div className="flex flex-wrap sm:justify-center space-x-4">
                        {userKonaDetails[currentKona]?.map((item, index) => (
                            <div key={index} className="bg-custom-gradient px-2 py-2  text-center rounded-xl mt-3">
                                <div className="bg-[#242538] px-2 py-2 sm:px-1 sm:py-4 md:px-6 md:py-6 lg:px-4 lg:py-4 shadow-slate-500 flex items-center justify-between sm:justify-around md:justify-around lg:justify-around xl:justify-around rounded-xl">
                                    <div>
                                        <img
                                            src={`./planets/${item.owner}.svg`}
                                            alt="Natal"
                                            width={45}
                                        />
                                    </div>
                                </div>
                                <p className="mt-2 font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-lg">
                                    <p className="mt-2 font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-lg">
                                        {userPlanetsDetails.filter(x => x.name === item.owner).map(x => (
                                            <span key={x._id} className=' font-extrabold text-sm  mr-2'>
                                                {x.rulerOf.map((num, index) => getOrdinal(num)).join(' and ')}

                                            </span>
                                        ))}
                                    </p>


                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-center">Planets {selectedPlanet?.name} through the zodiac</h2>
                    <div className="bg-[#3D3E4F] p-4 rounded-xl">
                        {["Saturn", "Moon", "Saturn"].map((planet, index) => (
                            <div key={index}>
                                <div className="text-center mb-4 ">
                                    <div
                                        className="space-x-2 mb-2 mt-3 flex items-between justify-between cursor-pointer"
                                        onClick={() => handlePlanetSubEvent(index)}
                                    >
                                        <div className="flex items-center">
                                            <div className={`bg-${planet === "Saturn" ? "red" : "green"}-500 rounded-full w-2 h-2 mr-2`} />
                                            <p className="text-sm">{planet}</p>
                                        </div>
                                        <p className="text-sm font-bold">20th May, 2024</p>
                                    </div>
                                    <div className={`accordion-content ${activeIndex === index ? "block" : "hidden"} ease-out text-center bg-[#5E5F73] p-4 rounded-xl`}>
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

                <div className="mb-8 ">
                    <h2 className="text-xl font-semibold mb-4 text-center">Upcoming {selectedPlanet?.name} Event</h2>
                    <div className="bg-custom-gradient p-4 rounded-xl flex">
                        <div className="flex items-center">
                            <img
                                src={`./planets/${selectedPlanet?.name.toLocaleLowerCase()}.svg`}
                                alt="Natal"
                                width={45}
                                className='mr-5'
                            />
                        </div>
                        <div>

                            <div className='text-[#767682] text-sm font-extrabold'>Sagittarius Event</div>
                            <div>{selectedPlanet?.name} enters in Leo</div>
                            <div className="text-gray-500 text-sm flex items-center">
                                <div className='bg-green-500 rounded-full w-2 h-2 mr-2' />
                                Event does happened
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-lg font-bold mb-4">People going with same transit house effect</h2>
                    <div className=" overflow-scroll ">
                        <div className="flex justify-center space-x-4 p-8 ">
                            {["Prachi", "Prachi", "Prachi", "Prachi", "Prachi", "Prachi"].map((name, index) => (
                                <div key={index} className="bg-custom-gradient  p-8 rounded-xl  text-center">
                                    <div className="h-16 w-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                                        <img
                                            src='./icons/person.png'
                                            alt="Person"
                                        />
                                    </div>
                                    <div className='flex justify-around'>
                                        <div className='text-center'>{name}</div>
                                        <img
                                            src={`./zodiac/capricorn.png`}
                                            alt="Zodiac"
                                            width={25}
                                        />
                                    </div>
                                    <div>
                                        <p className='text-xs mt-2'>
                                            DOB: 14th Jul, 1994
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </CommanLayout>
    );
};

export default KonaLord;
