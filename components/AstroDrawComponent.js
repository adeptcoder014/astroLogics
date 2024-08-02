import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import ephemerisServer from '../constants/urlPython';
import astroServer from "../constants/url";
import { FlagIcon } from 'react-flag-kit';

const AstroChart = () => {
  const [chartData, setChartData] = useState(null);
  const [locationDropdown, setLocation] = useState({
    value: 'delhi',
    label: 'Delhi',
    flag: 'IN'
  });

  const [startDate, setStartDate] = useState(new Date());

  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setIsOpen(false);
  };



  const currentTime = `${startDate.getHours()}:${startDate.getMinutes()}`
  const today = startDate.toISOString().split('T')[0]

  // console.log(today, currentTime);

  const locations = [
    { value: 'london', label: 'London', flag: 'GB' },
    { value: 'delhi', label: 'Delhi', flag: 'IN' },
    { value: 'mumbai', label: 'Mumbai', flag: 'IN' },
    { value: 'new-york', label: 'New York', flag: 'US' },
    { value: 'tokyo', label: 'Tokyo', flag: 'JP' },
    { value: 'hong-kong', label: 'Hong Kong', flag: 'HK' },
    { value: 'frankfurt', label: 'Frankfurt', flag: 'DE' },
    { value: 'sydney', label: 'Sydney', flag: 'AU' },
    // Add more locations as needed
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePlanets = await astroServer.post('/almanac/get',
          {
            date: today,
            time: currentTime
          }
        )
        const resultPlanets = responsePlanets?.data?.data
        const responseHouses = await ephemerisServer.post('/houses',
          {
            location: locationDropdown.value,
            date: today,
            time: currentTime
          })
        const resultHouses = responseHouses?.data?.data
        console.log(resultHouses);
        if (resultPlanets && resultHouses) {
          const planets = {};
          resultPlanets?.forEach(planet => {
            planets[planet.name.charAt(0).toUpperCase() + planet.name.slice(1)] = [planet.absolutePosition];
          });

          ;
          const houseDegreeRelation = {
            1: 0,
            2: 30,
            3: 60,
            4: 90,
            5: 120,
            6: 150,
            7: 180,
            8: 210,
            9: 240,
            10: 270,
            11: 300,
            12: 330
          }
          let cusps = [];

          // console.log('cusps', cusps);
          resultHouses?.forEach(house => {
            // console.log('house', house);
            cusps.push(houseDegreeRelation[house.houseNumber]);
          });
          setChartData({
            planets,
            cusps
          });
        }
        /*...*/
        /*...*/
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [locationDropdown.value, currentTime,today]);

  useEffect(() => {
    if (chartData) {
      const Chart = astrochart?.default;
      const chart = new Chart(
        'paper',
        590,
        590,
        {

          'ADD_CLICK_AREA': true,
          'COLOR_ARIES': '#ff2400',
          'COLOR_TAURUS': '#ff7f00',
          'COLOR_GEMINI': '#ffff00',
          'COLOR_CANCER': '#00ff00',
          'COLOR_LEO': '#0000ff',
          'COLOR_VIRGO': '#4b0082',
          'COLOR_LIBRA': '#8b00ff',
          'COLOR_SCORPIO': '#800000',
          'COLOR_SAGITTARIUS': '#ff69b4',
          'COLOR_CAPRICORN': '#8b4513',
          'COLOR_AQUARIUS': '#808080',
          'COLOR_PISCES': 'white',
          'SYMBOL_SCALE': 1.2,
          'COLOR_BACKGROUND': 'white',
          'CUSPS_STROKE': 1,
          'Aspects': {
            'conjunction': { 'degree': 0, 'orbit': 10, 'color': '#8b00ff' },
            'square': { 'degree': 90, 'orbit': 8, 'color': '#8b00ff' },
            'trine': { 'degree': 120, 'orbit': 8, 'color': '#8b00ff' },
            'opposition': { 'degree': 180, 'orbit': 10, 'color': '#8b00ff' }
          },
          // 'DIGNITIES_RULERSHIP': true,
          // 'ID_ASPECTS': 'aspects',
        }
      );

      const radix = chart.radix(chartData);


      radix.aspects()
      // const transit = radix.transit(dataTransit);
    }
    /*...*/
    /*...*/
  }, [chartData]);



  // console.log(currentDate.toISOString().split('T')[0], currentTime, '-------------<');


  return (
    <>
      {/* <div className='bg-gray-400'>
        <DatePicker
          showTimeSelect
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          timeClassName={handleColor}
        />
      </div> */}

      <div className='mb-4 flex items-center justify-around'>
        <div className=''>
          <label htmlFor="location" className="block text-sm font-medium text-gray-100">Temporal</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm"
            showTimeInput
            className='rounded-md p-2'
          />
        </div>


        <div className=''>


          <label htmlFor="location" className="text-sm font-medium text-gray-100">Spatial</label>

          <div className="relative w-full ">
            <div
              type="button"
              onClick={handleDropdownToggle}
              className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="flex items-center">
                <FlagIcon code={locationDropdown.flag} size={16} className="mr-2" />
                {locationDropdown.label}
              </span>
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l4 4a1 1 0 11-1.414 1.414L10 5.414 6.707 8.707a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="py-1">
                  {locations.map((loc) => (
                    <div
                      key={loc.value}
                      onClick={() => handleLocationSelect(loc)}
                      className="flex items-center cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FlagIcon code={loc.flag} size={16} className="mr-2" />
                      {loc.label}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>


      </div>
      <div id="paper" style={{ zoom: '58%' }} className="rounded-md p-4">
        <div id='svg'></div>
      </div>
    </>
  );
};

export default AstroChart;