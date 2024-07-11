import React, { useState, useEffect } from 'react';
import { useQuery } from "react-query";
import { getAlmanac_py } from '../controller/transit';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const LocalTransit = () => {
    const [positions, setPositions] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    const calculatePosition = (angle) => {
        const radius = 150; // Radius of the larger circle
        const adjustedAngle = (angle - 90) % 360; // Adjust angle to start from the left side
        const radian = (adjustedAngle * Math.PI) / 180; // Convert angle to radians
        const x = radius * Math.cos(radian); // Calculate x-coordinate
        const y = radius * Math.sin(radian); // Calculate y-coordinate
        return { x, y }; // Return object with x and y coordinates
    };

    const formattedDate = selectedDate.toISOString().slice(0, 10);
    const { data, isLoading } = useQuery(['getTransitData_py', formattedDate], () => getAlmanac_py(formattedDate));

    useEffect(() => {
        if (!isLoading && data?.data?.data) {
            const fetchedPlanetaryCurrentTransit = data?.data?.data?.map(transitEvent => ({
                planet: transitEvent.name,
                position: transitEvent.position,
                absolutePosition: transitEvent.absolutePosition,
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
    }



    console.log('------> ', positions)
    return (
        <>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy-MM-dd"
            />

            <div className="p-10 relative flex justify-center items-center bg-gradient-to-b from-blue-900 to-blue-500">
                <div
                    className="relative w-64 h-64 rounded-full flex items-center justify-center"
                    style={{
                        backgroundImage: `url('./earth-texture.jpg')`, // Replace with your Earth-like texture
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    {positions?.map((pos, index) => {
                        const { x, y } = calculatePosition(pos.absolutePosition);

                        return (
                            <div key={index}>
                                <div
                                    onClick={() => handlePlanetClick(pos.planet)}
                                    className="absolute w-10 h-10 rounded-full flex items-center justify-center"
                                    style={{
                                        transform: `translate(${x}px, ${y}px)`,
                                        backgroundImage: `url(${pos.url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {/* <span className="text-white text-xs">{pos.planet}</span> */}
                                </div>
                                {selectedPlanet === pos.planet && (
                                    <div
                                        className="absolute bg-white text-black p-2 rounded shadow-lg"
                                        style={{
                                            transform: `translate(${x}px, ${y - 50}px)`, // Position tooltip above the planet
                                            zIndex: 10,
                                        }}
                                    >
                                        <p>{planetSymbol[pos.planet]} {pos.position.degree}° {pos?.position?.sign} {Math.round(pos.position.minute)}   </p>
                                        {/* <p>Planet: {pos.planet}</p>
                                        <p>Position: {pos.position.degree}</p>
                                        <p>Angle: {pos.absolutePosition}</p> */}
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
