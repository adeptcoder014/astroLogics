// src/components/TransitPanel.js
import React from 'react';
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { getPlanetAlmanac } from "../controller/transit"

import CommanLayout from '../layouts/comman';
import { CurrentTransit } from '../components/currentTransit';

const TransitPanel = () => {
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

    const [selectedDiv, setSelectedDiv] = useState('');
    const handleToggle = (index) => {
        console.log(index);
        setActiveIndex(activeIndex === index ? null : index);
    };

    const { data } = useQuery('getPlanetTransitData', getPlanetAlmanac)

    const currentDate = new Date();
    let month = currentDate.getMonth() + 1;

    const transitData = data?.data?.filter(x => {
        // console.log('month ---', month);
        // console.log(`incoming month  ${x?.date?.split('-')[1].split('')[1]} `);
        if (x?.date?.split('-')[1].split('')[1] === String(month)) {
            console.log('found data --------', x);
            return (

                < p > {x?.date}</p>
            )
        }
    }
    )
    console.log('transitData======', transitData);



    function formatDate(date) {
        const day = date.getDate();
        const suffix = day === 1 || day === 21 || day === 31 ? 'st' : (day === 2 || day === 22 ? 'nd' : (day === 3 || day === 23 ? 'rd' : 'th'));
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear().toString().slice(-2);
        return `${day}${suffix} ${month}'${year}`;
    }
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
                                    className={`text-white bg-custom-gradient rounded-2xl flex-shrink-0 px-8 py-2 ${selectedDiv === `lord-${index}` ? 'shadow-md shadow-black' : 'shadow-md'}  mb-2 flex items-center`}
                                    onClick={() => setSelectedDiv(`lord-${index}`)}
                                >
                                    <img src={`./planets/${x?.planet}.svg`} alt="Natal" width={x.planet == 'saturn' ? 45 : 25} />

                                    <p className="font-extrabold text-lg ml-2">{x?.planet}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Moon current mundane transit</h3>
                    <div className="items-center bg-[#3D3E4F] rounded-xl">

                        <CurrentTransit />
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Upcoming Moon Transit</h3>
                    <div className="bg-custom-gradient bgImg p-4 rounded-lg flex shadow-md shadow-black mt-5 mb-5">
                        <div className="">

                            {/* <div className="ml-4"> */}
                            <p className='text-white font-extrabold text-xl'>Chandra</p>
                            <p className='text-white font-extrabold text-xl mb-2'>Sankranti</p>

                            <div className='flex items-center'>

                                <div className={`bg-green-500 rounded-full w-2 h-2 mr-2`} />
                                <p>{formatDate(new Date(transitData[0]['date']))}</p>
                                 <p>{((transitData[0]['time']))}</p>
                            </div>
                            {/* </div> */}
                        </div>
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
