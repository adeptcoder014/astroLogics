import React, { useState } from 'react';
import CommanLayout from '../layouts/comman';
import astroServer from '../constants/url';
import { useRouter } from 'next/router';

const AstrologyPage = () => {

    const router = useRouter()
    const [selectedPlanet, setSelectedPlanet] = useState('Select Planet');
    const [transitingHouse, setTransitingHouse] = useState('Select House');
    const [apiData, setApiData] = useState([]);
    const [apiError, setApiError] = useState('');
    const [selectedEventTypeTab, setSelectedEventTypeTab] = useState('');
    // const [selectedEvent, setSelectedEventTypeTab] = useState([]);

    const planets = [
        { name: 'Sun', icon: <img src="./planets/sun.svg" alt="Sun" width={25} /> },
        { name: 'Moon', icon: <img src="./planets/moon.svg" alt="Moon" width={25} /> },
        { name: 'Mars', icon: <img src="./planets/mars.svg" alt="Mars" width={25} /> },
        { name: 'Mercury', icon: <img src="./planets/mercury.svg" alt="Mercury" width={25} /> },
        { name: 'Jupiter', icon: <img src="./planets/jupiter.svg" alt="Jupiter" width={25} /> },
        { name: 'Venus', icon: <img src="./planets/venus.svg" alt="Venus" width={25} /> },
        { name: 'Saturn', icon: <img src="./planets/saturn.svg" alt="Saturn" width={25} /> },
    ];

    const houses = [
        { house: '1st', value: '1' },
        { house: '2nd', value: '2' },
        { house: '3rd', value: '3' },
        { house: '4th', value: '4' },
        { house: '5th', value: '5' },
        { house: '6th', value: '6' },
        { house: '7th', value: '7' },
        { house: '8th', value: '8' },
        { house: '9th', value: '9' },
        { house: '10th', value: '10' },
        { house: '11th', value: '11' },
        { house: '12th', value: '12' },
    ];

    const fetchAlmanacData = async () => {
        if (selectedPlanet !== 'Select Planet' && transitingHouse !== 'Select House') {
            try {
                setApiData([])
                setSelectedEventTypeTab('')
                const response = await astroServer.post('/user/house-specific-data', {
                    planet: selectedPlanet,
                    house: transitingHouse
                });

                setApiData(response?.data);
            } catch (error) {
                setApiError(error?.response?.data)
                // console.error('Error fetching almanac data:', error);
            }
        }
    };
    const eventTypes = [
        {
            type: "Fire",
            naturalHouseRulership: [1, 5, 9],
        },
        {
            type: "Earth",
            naturalHouseRulership: [2, 6, 10],
        },
        {
            type: "Air",
            naturalHouseRulership: [3, 7, 11],
        },
        {
            type: "Water",
            naturalHouseRulership: [4, 8, 12],
        },
    ]
    // console.log(selectedPlanet, transitingHouse);

    const apiData1 = apiData?.filter(x => {
        // console.log('---- foundPlanet ----------', x?.planetDetails.rulerOf)
        // if(x?.planetDetails.rulerOf)

        // const allElementsPresent = x?.planetDetails.rulerOf.every(element => selectedEventTypeTab?.naturalHouseRulership?.includes(element));

        if (x?.planetDetails.rulerOf.find(element => selectedEventTypeTab?.naturalHouseRulership?.includes(element))
        ) {
            return x
        }

        // const foundPlanet = x?.planetDetails?.map(y => y?.name === selectedPlanet?.toLocaleLowerCase());
        // return foundPlanet;
    });

    console.log('---- apiData1 -----', apiData1);
    return (
        <CommanLayout>
            <div className="p-4 max-w-sm mx-auto bg-gray-800 text-white rounded-lg shadow-md">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Choose Transit</h2>
                    <div className="bg-custom-gradient p-4 rounded-xl flex flex-col">
                        <div className="flex flex-col space-y-4">
                            <div className="relative">
                                <select
                                    className="bg-gray-700 text-white p-2 rounded w-full appearance-none"
                                    value={selectedPlanet}
                                    onChange={(e) => setSelectedPlanet(e.target.value)}
                                >
                                    <option disabled>Select Planet</option>
                                    {planets.map((planet) => (
                                        <option key={planet.name} value={planet.name}>
                                            {planet.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                    {planets.find(planet => planet.name === selectedPlanet)?.icon}
                                </div>
                            </div>
                            <select
                                className="bg-gray-700 text-white p-2 rounded"
                                value={transitingHouse}
                                onChange={(e) => setTransitingHouse(e.target.value)}
                            >
                                <option disabled>Select House</option>
                                {houses?.map((house) => (
                                    <option key={house?.house} value={house?.value}>
                                        {house?.house}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div
                            className="mt-4 bg-white text-black w-3/4 m-auto py-2 px-4 rounded-xl text-center cursor-pointer"
                            onClick={fetchAlmanacData}
                        >
                            Discover People
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Choose Event Type</h2>
                    <div className="flex flex-wrap space-x-2">




                        {eventTypes?.map(x => (

                            <div
                                key={x.type}
                                className={`text-white bg-${x.type.toLocaleLowerCase()}Gradient rounded-2xl flex-shrink-0 px-5 py-2 ${selectedEventTypeTab?.type === `${x?.type}` ? 'shadow-md shadow-black' : 'shadow-md'} mb-2 flex items-center`}
                                onClick={() => (setSelectedEventTypeTab(x))}
                            >
                                {x.type}
                            </div>
                        ))}

                    </div>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="search person"
                        className="bg-gray-700 text-white p-2 w-full rounded"
                    />
                </div>
                <div className="space-y-4">
                    {/* {apiData &&  apiData?.map(x => (<div className="bg-custom-gradient p-4 rounded-xl flex">
                        <div key={x} className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                            <img src={`./planets/${x?.houseDetails[0].owner}.svg`} alt="Natal" width={25} />
                        </div>
                        <div className="ml-4">
                            <p>{x.name}</p>
                            <p className="text-sm">1st lord ⚕ 9th house</p>
                        </div>
                    </div>
                    ))} */}
                    {apiData && selectedEventTypeTab == '' ? (
                        apiData?.map(x => (<div key={x._id} className="bg-custom-gradient p-4 rounded-xl flex">
                            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                                <img src={`./planets/${x?.houseDetails[0].owner}.svg`} alt="Natal" width={25} />
                            </div>
                            <div className="ml-4">
                                <p>{x.name}</p>
                                <p className="text-sm">1st lord ⚕ 9th house</p>
                            </div>
                        </div>
                        ))
                    ) : (

                        apiData1?.map(x => (
                            <div
                                key={x._id}
                                className="bg-custom-gradient p-4 rounded-xl flex"
                                onClick={()=>router.push(`/user-details?id=${x._id}`)}
                            >
                                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                                    <img src={`./planets/${x?.planetDetails?.name}.svg`} alt="Natal" width={25} />
                                </div>
                                <div className="ml-4">
                                    <p>{x.name}</p>
                                    <p className="text-sm">1st lord ⚕ 9th house</p>
                                </div>
                            </div>
                        ))


                    )}
                    {apiError && apiData.length === 0 && <span>{apiError.message}</span>}

                </div>

            </div>
        </CommanLayout>
    );
};

export default AstrologyPage;
