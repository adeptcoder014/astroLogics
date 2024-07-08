import { useState } from "react";
import { Loader } from "./loader";

export const PlanetaryEventAccordion = ({ planetEvent }) => {
    const [selectedPlanet, setSelectedPlanet] = useState('moon');
    const [activeIndex, setActiveIndex] = useState(null);

    const handlePlanetSubEvent = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    function formatDate(date) {

        // Create a Date object from the input
        const dateObj = new Date(date);

        // Get the day of the month
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();

        // Get the month index (0-11) and map it to month name
        let month = dateObj.getMonth();
        const suffix = day === 1 || day === 21 || day === 31 ? 'st' : (day === 2 || day === 22 ? 'nd' : (day === 3 || day === 23 ? 'rd' : 'th'));
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        month = monthNames[month];
        return `${day}${suffix} ${month}'${year}`;
    }
// console.log(planetEvent[0]);
    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Planets {selectedPlanet?.name} through the zodiac</h2>
            <div className="bg-[#3D3E4F] p-4 rounded-xl">
                {planetEvent && planetEvent.length > 0  ? planetEvent?.map((planet, index) => (
                    <div key={index}>
                        <div className="text-center mb-4 ">
                            <div
                                className="space-x-2 mb-2 mt-3 flex items-between justify-between cursor-pointer"
                                onClick={() => handlePlanetSubEvent(index)}
                            >
                                <div className="flex items-center">
                                    <div className={`bg-${planet.name === "Saturn" ? "red" : "green"}-500 rounded-full w-2 h-2 mr-2`} />
                                    <p className="text-sm">{planet?.name}</p>
                                </div>
                                <p className="text-sm font-bold">{formatDate(planet?.date)}</p>
                            </div>
                            <div className={`accordion-content ${activeIndex === index ? "block" : "hidden"} ease-out text-center bg-[#5E5F73] p-4 rounded-xl`}>
                                <h3 className="font-extrabold mb-2 text-white">{planet?.name} in {planet?.position?.degree} {planet?.position?.zodiac} {planet?.position?.minute}</h3>
                                <p className="text-sm text-white">
                                    Independence, innovation, analytical prowess, visionary thinking. Unique values, innovative financial strategies, strategic communication.
                                </p>
                            </div>
                        </div>
                    </div>
                )) : (
                    <Loader />
                )}
            </div>
        </div>

    )
}