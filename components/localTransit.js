import React, { useState, useEffect } from 'react';
import { useQuery } from "react-query";
import { getAlmanac_py } from '../controller/transit';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getCurrentDateTime } from '../util/misc';
import ephemerisServer from '../constants/urlPython';

export const LocalTransit = () => {
    const [positions, setPositions] = useState([]);
    const [risingSign, setRisingSign] = useState('aries');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [location, setLocation] = useState('london');
    const calculatePosition = (angle, risingHouse) => {
        const diameter = 194; // Diameter of the circle
        const radius = diameter / 2; // Radius of the circle
        const houseAngleShift = (risingHouse - 1) * 30; // Each house is 30 degrees
        const adjustedAngle = (angle - houseAngleShift + 270) % 360; // Adjust angle to start from the left side (0 degrees) and include house shift
        const radian = (adjustedAngle * Math.PI) / 180; // Convert angle to radians
        const x = radius * Math.cos(radian); // Calculate x-coordinate
        const y = radius * Math.sin(radian); // Calculate y-coordinate
        return { x, y }; // Return object with x and y coordinates
    };
    


    // Function to determine the starting angle based on rising house
    const calculateStartAngle = (risingHouse) => {
        // Convert rising house (1-12) to degrees
        const startAngle = (risingHouse - 1) * 30; // Each house is 30 degrees
        return startAngle;
    };

    const formattedDate = selectedDate.toISOString().slice(0, 10);
    const { data, isLoading } = useQuery(['getTransitData_py', formattedDate], () => getAlmanac_py(formattedDate));


    const getLocationWiseHouses = async () => {
        const currentDateTime = getCurrentDateTime()

        const cityPositionObj = {
            'london': {
                latitude: 51.5074,
                longitude: -0.1278,
            },
            delhi: {
                latitude: 28.7041,
                longitude: 77.1025,
            },
            mumbai: {
                latitude: 19.0760,
                longitude: 72.8777,
            },
            lucknow: {
                latitude: 26.8467,
                longitude: 80.9462,
            }
        }



        let datObj = {
            lat: cityPositionObj[location]['latitude'],
            long: cityPositionObj[location]['longitude'],
            date: currentDateTime?.date,
            time: currentDateTime?.time
        }
        const response = await ephemerisServer.post('/houses', datObj);
        setRisingSign(response?.data?.data[0])
    }

    useEffect(() => {
        getLocationWiseHouses()
    }, [location]);





    useEffect(() => {
        if (!isLoading && data?.data?.data) {
            const fetchedPlanetaryCurrentTransit = data?.data?.data?.map(transitEvent => ({
                planet: transitEvent.name,
                position: transitEvent.position,
                absolutePosition: transitEvent.absolutePosition,
                house: transitEvent.house, // Assuming you get the house information from API
                url: `./textures/${transitEvent.name}-texture.${transitEvent.name === 'mercury' ? 'webp' : 'jpg'}`
            }));
            setPositions(fetchedPlanetaryCurrentTransit);
        }
    }, [data, isLoading]);

    const handlePlanetClick = (planet) => {
        setSelectedPlanet(prevState => (prevState === planet ? null : planet));
    };

    const planetSymbol = {
        sun: '☉',
        moon: '☾',
        mercury: '☿️',
        venus: '♀️',
        mars: '♂️',
        jupiter: '♃',
        saturn: '♄',
    };
    return (
        <>
            <div className='bg-gray-400'>

                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                />
            </div>





            <div className='mb-4'>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <select
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                    <option value="london">London</option>
                    <option value="lucknow">Lucknow</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    {/* Add more options as needed */}
                </select>
            </div>





            <div className="relative flex justify-center items-center bg-gradient-to-b from-blue-900 to-blue-500">
                <div
                    className=" relative rounded-full flex items-center justify-center"
                    style={{
                        backgroundImage: `url('./lagnaBaseChart/${risingSign['name']}Lagna.png')`, // Replace with your Earth-like texture
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: 300,
                        height: 300 ,
                    }}
                >
                    {positions?.map((pos, index) => {
                        // const { x, y } = calculatePosition(pos.absolutePosition, risingSign['houseNumber']);
                        const { x, y } = calculatePosition(pos.absolutePosition, 1 );
                        // console.log(pos.planet, '---->', x, y);
                        // const { x, y } = calculatePosition(pos.absolutePosition, startAngle);

                        return (
                            <div key={index}>
                                <div
                                    onClick={() => handlePlanetClick(pos.planet)}
                                    className="absolute rounded-full flex items-center justify-center"
                                    style={{
                                        transform: `translate(${x}px, ${y}px)`,
                                        backgroundImage: `url(${pos.url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        cursor: 'pointer',
                                        width: 20,
                                        height: 20,
                                    }}
                                />
                                {selectedPlanet === pos.planet && (
                                    <div
                                        className="absolute bg-white text-black p-2 rounded shadow-lg"
                                        style={{
                                            transform: `translate(${x}px, ${y - 50}px)`, // Position tooltip above the planet
                                            zIndex: 10,
                                        }}
                                    >
                                        <p>{planetSymbol[pos.planet]} {pos.position.degree}° {pos?.position?.sign} {Math.round(pos.position.minute)}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
