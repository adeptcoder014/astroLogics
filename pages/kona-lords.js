import React, { useState } from 'react';
import CommanLayout from '../layouts/comman';

const KonaLord = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        console.log(index);
        setActiveIndex(activeIndex === index ? null : index);
    };

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
                    <h2 className="text-xl font-semibold mb-4 text-center">Planets sitting in the VI house</h2>
                    <div className="flex flex-wrap justify-center space-x-4">
                        {["6th & 9th Lord", "6th & 9th Lord", "6th & 9th Lord"].map((text, index) => (
                            <div key={index} className="bg-custom-gradient p-4 text-center rounded-xl mt-3">
                                <div className="bg-[#242538] p-4 shadow-slate-500 flex items-center justify-center rounded-xl">
                                    <div>
                                        <img
                                            src={`./planets/sun.svg`}
                                            alt="Natal"
                                            width={45}
                                        />
                                    </div>
                                </div>
                                <p className="mt-2 font-bold text-sm">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-center">Planets through the zodiac</h2>
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

                <div className="mb-8 ">
                    <h2 className="text-xl font-semibold mb-4 text-center">Upcoming Saturn Event</h2>
                    <div className="bg-custom-gradient p-4 rounded-xl flex">
                        <div className="flex items-center">
                            <img
                                src={`./planets/sun.svg`}
                                alt="Natal"
                                width={45}
                                class='mr-5'
                            />
                        </div>
                        <div>

                            <div className='text-[#767682] text-sm font-extrabold'>Sagittarius Event</div>
                            <div>Sun enters in Leo</div>
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
