import React, { useState, useEffect } from 'react';
import { useQuery } from "react-query";
import { getPlanetaryHours } from '../controller/planetaryHours'
import { Loader } from './loader';
import ephemerisServer from '../constants/urlPython';

export const PlanetaryHours = () => {
  const [selectedPlanetTab, setSelectedPlanetTab] = useState('moon');
  const [data, setData] = useState([]);
  const [planetTransitData, setPlanetTransitData] = useState([]);
  const [location, setLocation] = useState('London');
  const [isLoading, setIsLoading] = useState(false);
  const [planetaryHours, setPlanetaryHours] = useState([]);
  const [activeHour, setActiveHour] = useState(null);
  const date = new Date();
  const year = date.getFullYear();


  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1 and pad with leading zero if needed
  const day = String(date.getDate()).padStart(2, '0'); // getDate() gives the day of the month

  const dateNew = `${year}-${month}-${day}`;
  // console.log(dateNew, 'datedsdsdd ');
  // const { data, isLoading } = useQuery(['getPlanetaryHours'], () => getPlanetaryHours(dateNew, location))
  const highlightActiveHour = (start, end) => {
    // const start_time = new Date(`2000-01-01T${start}`);
    // const end_time = new Date(`2000-01-01T${end}`);
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    let hoursMinute = `${currentHours}:${currentMinutes}`

    // console.log('Current time:', hoursMinute);

    // console.log('start_time', start_time);

    return hoursMinute > start && hoursMinute < end;
  };

  // const { data } = useQuery(['getPlanetaryHours'], ()=>getPlanetaryHours('2024-07-04','london'))
  // console.log('data ===', data);

  // const interval = setInterval(() => {
  //   setCurrentDateTime(new Date());
  // }, 1000);
  // useEffect(() => {

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    fetchPlanetaryHours(location.toLocaleLowerCase());
  }, [location]);

  const fetchPlanetaryHours = async (location) => {
    try {
      setIsLoading(true)
      // Replace this with the actual API call to fetch planetary hours based on location
      const response = await ephemerisServer.get(`planetary-hours?date=${dateNew}&city=${location}`);
      // const data = await response.json();
      setPlanetaryHours(response?.data?.planetaryHours);
      // updateActiveHour(data);
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching planetary hours:', error);
    }
  };

  // const updateActiveHour = (data) => {
  //   const now = new Date();
  //   const currentHour = data.find(hour => {
  //     const start = new Date(hour.startTime);
  //     const end = new Date(hour.endTime);
  //     return now >= start && now <= end;
  //   });
  //   setActiveHour(currentHour);
  // };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const timeOptions = {
    year: 'numeric', // Full numeric year (e.g., "2024")
    weekday: 'short', // Full weekday name (e.g., "Monday")
    month: 'short', // Full month name (e.g., "July")
    day: 'numeric', // Numeric day of the month (e.g., "05")
    hour: '2-digit', // 2-digit format for hours (e.g., "09")
    minute: '2-digit', // 2-digit format for minutes (e.g., "30")
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the accordion if it's already open
    } else {
      setActiveIndex(index); // Open the accordion
    }
  };
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="mb-4">
      {/* <h2 className="text-xl font-bold">{currentDateTime.toLocaleString([], timeOptions)}</h2> */}

      <div className='mb-4'>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
        <select
          id="location"
          value={location}
          onChange={handleLocationChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="london">London</option>
          <option value="lucknow">Lucknow</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          {/* Add more options as needed */}
        </select>
      </div>
      {/* 
      <div className='bg-[#2D2E44] rounded-xl p-2 shadow-sm'>
        <div className='flex overflow-x-scroll space-x-4 scrollbar-hide'>
          {arr?.map((x, index) => (
            <div
              key={index}
              className={`text-white bg-custom-gradient rounded-2xl flex-shrink-0 px-8 py-2 ${selectedPlanetTab === `${x?.planet}` ? 'shadow-md shadow-black' : 'shadow-md'}  mb-2 flex items-center`}
              onClick={() => setSelectedPlanetTab(x?.planet)}
            >
              <img src={`./planets/${x?.planet}.svg`} alt="Natal" width={x.planet === 'saturn' ? 45 : 25} />
              <p className="font-extrabold text-lg ml-2">{x?.planet}</p>
            </div>
          ))}
        </div>
      </div> */}

      <div className='mt-4'>
        <h3 className="text-lg font-bold">Planetary Hours</h3>
        <div className="accordion-container" style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc' }}>
          {isLoading ? (
            <Loader />
          ) : (planetaryHours?.map((hour, index) => (
            <div
              key={index}
              className={`p-4 ${highlightActiveHour(hour.start, hour.end) ? 'bg-yellow-200' : 'bg-white'}`}
              onClick={() => toggleAccordion(index)}
              style={{ cursor: 'pointer' }}
            >
              <div className="accordion-header">
                <h4 className="font-bold">{hour.planet}</h4>
                <p>{hour.start} - {hour.end}</p>
              </div>

            </div>
          )))}
        </div>
      </div>
    </div>
  );
};
