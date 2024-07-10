import { useState } from "react";
import { Loader } from "./loader";
import { useQuery } from "react-query"
import { getUserById } from '../controller/user';
import ephemerisServer from "../constants/urlPython";
export const PlanetaryEventAccordion = ({
    setSelectedPlanetTab,
    selectedPlanetTab,
    setImportantEvents }) => {


    // const [planetEvents, setPlanetEvents] = useState(planetEvent);
    // console.log('-----------planetEvent --------->', planetEvent[0]);
    const [activeIndex, setActiveIndex] = useState(null);
    // const [selectedPlanetTab, setSelectedPlanetTab] = useState('moon');
    const [planetEvent, setPlanetEvent] = useState([]);


    let userToken = ''
    if (userToken || userToken === null || userToken === '') {
        const ISSERVER = typeof window === "undefined";

        if (!ISSERVER) {

            userToken = localStorage.getItem('accessToken');
        }
    }
    let userId = userToken
    const { data, isLoading } = useQuery(['getUserNatalDataById', userId], () => getUserById(userId));

    const handlePlanetSubEvent = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    function formatDate(date) {
        const dateObj = new Date(date);
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        let month = dateObj.getMonth();
        const suffix = day === 1 || day === 21 || day === 31 ? 'st' : (day === 2 || day === 22 ? 'nd' : (day === 3 || day === 23 ? 'rd' : 'th'));
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        month = monthNames[month];
        return `${day}${suffix} ${month}'${year}`;
    }

    const togglePlanetTab = async (planet) => {
        setPlanetEvent([])
        setSelectedPlanetTab(planet)
        
        const response = await ephemerisServer.get(`/get-planet-transit-py?planet=${planet}`);
        // console.log('response ----->', response?.data?.data);
        setImportantEvents(response?.data?.data)
        setPlanetEvent(response?.data?.data)

    }


    // Handle click event for "Transit this month" button
    const handleTransitThisMonth = () => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const filteredEvents = planetEvent.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.getMonth() === currentMonth;
        });
        setPlanetEvent(filteredEvents)
        // return filteredEvents;
    };
    let x = data?.houses.find(x => { if (x.rashi == 'aries') { return (x?.bhava) } })
    // console.log('-----------   user --------->', x);

    return (
        <div className="mb-8">


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
                            {/* <p className="font-extrabold text-lg ml-2">
                    {x?.rulerOf?.join(' and ')}
                </p> */}
                            <p className='font-extrabold text-lg ml-1'>{x.name}</p>
                        </div>
                    ))}
                </div>
            </div>




            {/* <h2 className="text-xl font-semibold mb-4 text-center">Planets {selectedPlanet?.name} through the zodiac</h2> */}
            <div onClick={handleTransitThisMonth} className="m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 w-1/2">
                Transit this month
            </div>
            <div className="bg-[#3D3E4F] p-4 rounded-xl max-h-80 overflow-y-auto">
                {planetEvent && planetEvent.length > 0 ? (
                    planetEvent.map((planet, index) => (
                        <div key={index} className="mb-4">
                            <div
                                className="space-x-2 mb-2 mt-3 flex items-between justify-between cursor-pointer"
                                onClick={() => handlePlanetSubEvent(index)}
                            >
                                <div className="flex items-center">
                                    <div className={`bg-${planet.name === "saturn" ? "red" : "green"}-500 rounded-full w-2 h-2 mr-2`} />
                                    <p className="text-sm mr-2">{planet?.name}</p> {planet?.position?.zodiac}
                                </div>
                                <p className="text-sm font-bold">{formatDate(planet?.date)}</p>
                            </div>
                            <div className={`accordion-content ${activeIndex === index ? "block" : "hidden"} ease-out text-center bg-[#5E5F73] p-4 rounded-xl `}>
                                {/* <h3 className="font-extrabold mb-2 text-white">{planet?.name} in  {planet?.position?.zodiac} </h3> */}
                                <p className="text-sm text-white">
                                    {planet?.name} will be transiting the {planet?.position?.zodiac}, which is your
                                </p>
                                {data?.houses.find(x => { if (x.rashi == planet?.position?.zodiacName) { return (x?.bhava) } })?.bhava}
                            </div>
                        </div>
                    ))
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
};
