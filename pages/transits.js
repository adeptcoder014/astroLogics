// src/components/TransitPanel.js
import React from 'react';
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { getPlanetAlmanac } from "../controller/transit"
import astroServer from "../constants/url";

import CommanLayout from '../layouts/comman';
import { CurrentTransit } from '../components/currentTransit';

const TransitPanel = () => {
    const planetVedicNames = {
        'moon': 'Chandra',
        'sun': 'Surya',
        'mercury': 'Budha',
        'venus': 'Shukra',
        'mars': 'Mangal',
        'jupiter': 'Brihaspati',
        'saturn': 'Shani',
    }


    const arr = [
        {
            planet: 'sun'
        },
        {
            planet: 'moon'
        },
        {
            planet: 'mercury'
        },
        {
            planet: 'venus'
        },
        {
            planet: 'mars'
        },
        {
            planet: 'jupiter'
        },
        {
            planet: 'saturn'
        }

    ]

    const [selectedPlanetTab, setSelectedPlanetTab] = useState('moon');
    const [planetTransitData, setPlanetTransitData] = useState([]);








    function formatDate(date) {
        const day = date.getDate();
        const suffix = day === 1 || day === 21 || day === 31 ? 'st' : (day === 2 || day === 22 ? 'nd' : (day === 3 || day === 23 ? 'rd' : 'th'));
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear().toString().slice(-2);
        return `${day}${suffix} ${month}'${year}`;
    }
    // const { data } = useQuery(['getPlanetTransitData_new'], getPlanetAlmanac(selectedPlanetTab))
    // console.log('planetTransitData===', planetTransitData);




    let transitData = planetTransitData?.find(x => {
        let today = new Date();
        let yesterday = new Date(today);
        let tomorrow = new Date(today);
        // console.log('selectedPlanetTab ---------', selectedPlanetTab);
        let apiDate = new Date(x?.date);
        if (selectedPlanetTab === 'moon') {
            yesterday.setDate(today.getDate() - 1)
            tomorrow.setDate(today.getDate() + 1)
            return apiDate < tomorrow && apiDate > yesterday
        } else {

            yesterday.setDate(today.getDate() - 15)
            tomorrow.setDate(today.getDate() + 15)
            return apiDate > today && apiDate < tomorrow 
        }
        // console.log('yesterday ----', yesterday, 'tomorrow --', tomorrow);

    })

    // useEffect(() => {

    //     console.log('data =========', data?.data);
    //     setPlanetTransitData(data?.data)
    // }, [planetTransitData]) 

    const togglePlanetTab = async (planet) => {
        setSelectedPlanetTab(planet)
        const response = await astroServer.get(`/almanac/get-planet-transit?planet=${planet}`);

        setPlanetTransitData(response?.data)

    }

    console.log('transitData===', transitData);
    console.log('planetTransitData=== --------------->', planetTransitData);
    return (
        <CommanLayout>

            <div className="p-2 max-w-md mx-auto bg-containerColor text-white rounded-lg shadow-lg">
                <div className="mb-4">
                    <h2 className="text-xl font-bold">Show Transit</h2>

                    <div className='bg-[#2D2E44] rounded-xl p-2 shadow-sm'>
                        <div className='flex overflow-x-scroll space-x-4 scrollbar-hide'>
                            {arr?.map((x, index) => (
                                <div
                                    key={index}
                                    className={`text-white bg-custom-gradient rounded-2xl flex-shrink-0 px-8 py-2 ${selectedPlanetTab === `${x?.planet}` ? 'shadow-md shadow-black' : 'shadow-md'}  mb-2 flex items-center`}
                                    onClick={() => togglePlanetTab(x?.planet)}
                                >
                                    <img src={`./planets/${x?.planet}.svg`} alt="Natal" width={x.planet == 'saturn' ? 45 : 25} />

                                    <p className="font-extrabold text-lg ml-2">{x?.planet}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold">{selectedPlanetTab} current mundane transit</h3>
                    <div className="items-center bg-[#3D3E4F] rounded-xl">

                        <CurrentTransit />
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Upcoming {selectedPlanetTab} Transit</h3>
                    <div className="bg-custom-gradient bgImg p-4 rounded-lg flex items-start justify-between shadow-md shadow-black mt-5 mb-5">
                        <div className="">

                            {/* <div className="ml-4"> */}
                            <p className='text-white font-extrabold text-xl'>{planetVedicNames[selectedPlanetTab]}</p>
                            <p className='text-white font-extrabold text-xl mb-2'>Sankranti</p>

                            <div className='flex items-center'>

                                <div className={`bg-green-500 rounded-full w-2 h-2 mr-2 flex flex-col`} />
                                {transitData ? (
                                    <div className='flex'>
                                        <p>{formatDate(new Date(transitData.date))} _</p>
                                        <p> @ {transitData.time}</p>
                                    </div>
                                ) : (
                                    <p>No upcoming transits found</p>
                                )}
                            </div>
                            {/* </div> */}
                        </div>
                        {transitData ? (
                            // <img src={`./zodiac/${transitData?.zodiacSign}.png`} alt="Natal" width={25} />
                            <img src={`./zodiac/${transitData?.zodiacSign}.png`} alt="Natal" width={25} />
                        ) : null}
                    </div>
                </div>

                <div className="flex justify-between mb-4">
                    <span>Constructive</span>
                    <label className="switch">
                        <input type="checkbox" className="hidden" />
                        <span className="slider round"></span>
                    </label>
                    <span>Obstructive</span>
                </div>

                <h3 className="text-lg font-semibold">Find People</h3>
                <div className="mb-4">
                    <input type="text" placeholder="Search person" className="w-full p-2 rounded-lg bg-gray-700 text-white mt-5 mb-5" />
                </div>

                <div className="space-y-4">

                    {['Akash', 'Shivansh', 'Mr. X'].map((person, index) => (
                        <div key={index} className="flex items-center bg-custom-gradient py-4 px-1 rounded-lg">
                            <div className="ml-4 flex flex-col">
                                <div className='flex items-center'>
                                    <div className="h-16 w-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                                        <img
                                            src='./icons/person.png'
                                            alt="Person"
                                        />
                                    </div>
                                    <div className='ml-3'>
                                        <p className="font-extrabold">{person}</p>
                                        <p>Moon - 5th house</p>
                                    </div>
                                </div>
                            </div>
                            <span className="ml-auto">Romance</span>
                        </div>
                    ))}
                </div>
            </div>
        </CommanLayout>
    );
};

export default TransitPanel;
