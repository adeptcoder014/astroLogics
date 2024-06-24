// src/components/UserDetail.js
import React from 'react';
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { getPlanetAlmanac } from "../controller/transit"
import astroServer from "../constants/url";
import { useRouter } from 'next/router';

import CommanLayout from '../layouts/comman';
import { CurrentTransit } from '../components/currentTransit';
import { getUserById } from '../controller/user';

const UserDetail = () => {

    const router = useRouter()
    let userId = router.query.id
    const { data, isLoading } = useQuery(['getUserNatalDataById', userId], () => getUserById(userId));


    const planetVedicNames = {
        'moon': 'Chandra',
        'sun': 'Surya',
        'mercury': 'Budha',
        'venus': 'Shukra',
        'mars': 'Mangal',
        'jupiter': 'Brihaspati',
        'saturn': 'Shani',
    }
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

    // const arr = [
    //     {
    //         planet: 'sun'
    //     },
    //     {
    //         planet: 'moon'
    //     },
    //     {
    //         planet: 'mercury'
    //     },
    //     {
    //         planet: 'venus'
    //     },
    //     {
    //         planet: 'mars'
    //     },
    //     {
    //         planet: 'jupiter'
    //     },
    //     {
    //         planet: 'saturn'
    //     }

    // ]
    // let userData = data
    // const enrichedArr = arr.map(item => {
    //     const foundData = userData?.planets?.find(x => x.name.toLowerCase() === item.planet);
    //     return {
    //         ...item,
    //         ...foundData
    //     };
    // });

    // 
    const owner = data?.houses[0].owner

    const lagnaLordIsIn = data?.planets?.find(planet => planet.name === owner).isIn;

    // console.log('lagnaLordIsIn === --------------->', lagnaLordIsIn.isIn);

    const [selectedPlanetTab, setSelectedPlanetTab] = useState('moon');
    const [planetTransitData, setPlanetTransitData] = useState([]);
    const [selectedEventTypeTab, setSelectedEventTypeTab] = useState('');








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

    // console.log('transitData===', transitData);
    // console.log('planetTransitData=== --------------->', planetTransitData);
    return (
        <CommanLayout>

            <div className="p-2 max-w-md mx-auto bg-containerColor text-white rounded-lg shadow-lg">
                <div className="mb-4">
                    <h2 className="text-xl font-bold">Show Transit</h2>

                    <div className='bg-[#2D2E44] rounded-xl p-2 shadow-md shadow-black mb-5'>
                        <div className='flex overflow-x-scroll space-x-4 scrollbar-hide'>
                            {data?.planets?.map((x, index) => (
                                <div
                                    key={index}
                                    className={`text-white bg-custom-gradient rounded-2xl flex-shrink-0 px-8 py-2 ${selectedPlanetTab === `${x?.name}` ? 'shadow-md shadow-black' : 'shadow-md'}  mb-2 flex items-center`}
                                    onClick={() => togglePlanetTab(x?.name)}
                                >
                                    <img src={`./planets/${x?.name}.svg`} alt="Natal" width={x.planet == 'saturn' ? 45 : 25} />

                                    {/* <p className="font-extrabold text-lg ml-2">{x?.name}</p> */}
                                    {/* <p className="font-extrabold text-lg ml-2">{x?.rulerOf}</p><p>Lord</p> */}
                                    <p className="font-extrabold text-lg ml-2">
                                        {x?.rulerOf?.join(' and ')}
                                    </p>
                                    <p className='font-extrabold text-lg ml-1'>Lord</p>
                                </div>
                            ))}
                        </div>
                    </div>




                    <div className="flex items-center bg-custom-gradient py-1 px-1 rounded-lg shadow-md shadow-black">
                        <div className="ml-4 flex flex-col">
                            <div className='flex items-center'>
                                <div className="h-16 w-16 bg-gray-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                                    <img
                                        src={`./planets/${data?.houses[0]?.owner}.svg`}
                                        alt="Person"
                                    />
                                </div>
                                <div className='ml-3'>
                                    <p className="font-extrabold">{data?.name}</p>
                                    <p>Lagna Lord in : {lagnaLordIsIn}</p>
                                </div>
                            </div>
                        </div>
                        {/* <span className="ml-auto">Romance</span> */}
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
                    <h3 className="text-lg font-semibold">{selectedPlanetTab} current mundane transit</h3>
                    <div className="items-center bg-[#3D3E4F] rounded-xl">

                        <CurrentTransit />
                    </div>
                </div>


                {/* 
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">{selectedPlanetTab} current mundane transit</h3>
                    <div className="items-center bg-[#3D3E4F] rounded-xl">

                        <CurrentTransit />
                    </div>
                </div> */}


                {/* <div className="flex justify-between mb-4">
                    <span>Constructive</span>
                    <label className="switch">
                        <input type="checkbox" className="hidden" />
                        <span className="slider round"></span>
                    </label>
                    <span>Obstructive</span>
                </div> */}

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

export default UserDetail;
