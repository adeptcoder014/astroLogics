import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import Papa from 'papaparse'; // Using PapaParse for CSV parsing

function CandlestickChart({planetaryEvent}) {
    const [ohlcData, setOhlcData] = useState([]);
    const [numDays, setNumDays] = useState(30); // State for number of days, defaulting to 30
    const [customDays, setCustomDays] = useState(30); // State for custom number of days
    const [selectedAsset, setSelectedAsset] = useState('gbpusd'); // Default selected asset




    const planetSymbol = {
        sun: '☉',
        moon: '☾',
        mercury: '☿️',
        venus: '♀️',
        mars: '♂️',
        jupiter: '♃',
        saturn: '♄',
    }
    const importantEvents = [
        {
            'event': 'sun @ 150°',
            'eventDate': new Date('2024-06-24'),
        },
        {
            'event': 'mercury @ 45°',
            'eventDate': new Date('2024-07-01'),
        },
        {
            'event': 'sun ☌ moon',
            'eventDate': new Date('2024-07-04'),
        },
    ];
    function replacePlanetSymbols(eventString) {
        // console.log('eventString', eventString);
        // Iterate through each planet and replace its name with symbol
        Object.keys(planetSymbol).forEach(planet => {
            eventString = eventString.replace(new RegExp(planet), planetSymbol[planet]);
        });
        return eventString;
    }

    // Modify each event's 'event' field to use symbols
    importantEvents.forEach(event => {
        event['event'] = replacePlanetSymbols(event['event']);
    });

    useEffect(() => {
        async function fetchCSVData() {
            try {
                const response = await fetch(`./assets/${selectedAsset.toLowerCase()}.csv`); // Adjust path as per your project structure
                const reader = response.body.getReader();
                const result = await reader.read();
                const decoder = new TextDecoder('utf-8');
                const csv = decoder.decode(result.value);

                // Parse CSV using PapaParse
                const parsedData = Papa.parse(csv, { header: true }).data;

                // Assuming CSV structure: Date,Open,High,Low,Close
                const formattedData = parsedData.map((entry) => {
                    return ([
                        new Date(entry.Date),
                        parseFloat(entry.Open),
                        parseFloat(entry.High),
                        parseFloat(entry.Low),
                        parseFloat(entry.Close),
                    ])
                });

                // Slice the data based on numDays
                setOhlcData(formattedData.slice(0, numDays));
            } catch (error) {
                console.error('Error fetching or parsing CSV file:', error);
            }
        }

        fetchCSVData();
    }, [numDays, selectedAsset]); // Depend on numDays and selectedAsset to refetch data when they change

    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-white font-bold'>
                        Number of Days:
                    </p>
                    <select
                        className='m-2 w-1/2 text-gray-800'
                        value={numDays}
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value)) {
                                setNumDays(value);
                            }
                        }}
                    >
                        <option value={7}>7 days</option>
                        <option value={14}>14 days</option>
                        <option value={30}>30 days</option>
                        <option value={90}>3 months</option>
                        <option value={365}>1 year</option>
                        <option value={customDays}>Custom</option>
                    </select>
                    {/* {numDays === customDays && (
                    <input
                        className='m-2 w-1/2'
                        type="number"
                        value={customDays}
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value)) {
                                setCustomDays(value);
                            }
                        }}
                        min={1}
                        max={1000} // Adjust max as per your application requirements
                    />
                )} */}
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-white font-bold'>
                        Select Asset:
                    </p>
                    <select
                        className=' text-gray-800'
                        value={selectedAsset}
                        onChange={(e) => setSelectedAsset(e.target.value)}
                    >
                        <option value="gbpusd">GBP/USD</option>
                        <option value="eurusd">EUR/USD</option>
                        <option value="xauusd">XAU/USD</option>
                        {/* Add more options for other assets as needed */}
                    </select>
                </div>
            </div>

            <div className='flex items-center justify-center shadow-lg m-2 rounded-xl bg-[white]'>
                <Chart
                    width={'100%'}
                    height={'400px'}
                    chartType="CandlestickChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Date', 'Low', 'Open', 'Close', 'High'], // Header row
                        ...ohlcData.map((entry) => [entry[0], entry[3], entry[1], entry[4], entry[2]]),
                    ]}
                    options={{
                        legend: 'none',
                        title: `${selectedAsset} Daily Candlestick Chart`,
                        hAxis: {
                            title: 'Date',
                            color: 'gray'  // Title color
                            // titleTextStyle: {
                            // },
                        },
                        vAxis: {
                            title: 'Price',
                            titleTextStyle: {
                                color: 'red'
                            },
                        },
                        candlestick: {
                            fallingColor: { strokeWidth: 0, fill: '#a52714' }, // Red for falling
                            risingColor: { strokeWidth: 0, fill: '#0f9d58' },  // Green for rising
                        },
                        colors: ['gray'],

                        annotations: {
                            textStyle: {
                                fontSize: 12,
                                color: '#000',
                                auraColor: 'none',
                            },
                            stem: {
                                color: '#000',
                                length: 0,
                            },
                            boxStyle: {
                                stroke: '#000',
                                strokeWidth: 0,
                                rx: 10,
                                ry: 10,
                                gradient: {
                                    color1: '#f1f8e9',
                                    color2: '#f1f8e9',
                                    x1: '0%',
                                    y1: '0%',
                                    x2: '100%',
                                    y2: '100%',
                                    useObjectBoundingBoxUnits: false,
                                },
                            },
                        },
                        tooltip: {
                            trigger: 'selection',
                        },
                        backgroundColor: {
                            fill: '#383e6a',
                            stroke: 'red',
                            fillOpacity: 0.2,
                        },
                        chartArea: {
                            backgroundColor: {
                                fill: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 1,
                                    y2: 1,
                                    color1: '#000000',
                                    color2: '#800080',
                                },
                            },
                            borderRadius: 200,

                        },
                        // Remove gridlines
                        hAxis: {
                            gridlines: {
                                color: 'transparent',
                            },
                        },
                        vAxis: {
                            gridlines: {
                                color: 'transparent',
                            },
                        },

                    }}
                    chartEvents={[
                        {
                            eventName: 'ready',
                            callback: ({ chartWrapper }) => {
                                const chart = chartWrapper.getChart();
                                const layout = chart.getChartLayoutInterface();
                                const chartArea = layout.getChartAreaBoundingBox();

                                // Get the x-axis positions and adjust label positions to prevent overlap
                                let yOffset = chartArea.top + 20;
                                importantEvents.forEach((event, index) => {
                                    const xPos = layout.getXLocation(event.eventDate);

                                    // Draw the vertical line
                                    const svg = chart.getContainer().querySelector('svg');
                                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                                    line.setAttribute('x1', xPos);
                                    line.setAttribute('x2', xPos);
                                    line.setAttribute('y1', chartArea.top);
                                    line.setAttribute('y2', chartArea.top + chartArea.height);
                                    line.setAttribute('stroke', 'orange');
                                    line.setAttribute('stroke-width', .3);
                                    svg.appendChild(line);

                                    // Adjust yOffset to prevent label overlap
                                    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                                    text.setAttribute('x', xPos + 10); // Adjust position as needed
                                    text.setAttribute('y', yOffset); // Use adjusted yOffset
                                    text.setAttribute('fill', 'gray');
                                    text.setAttribute('font-size', '12px');
                                    // text.setAttribute('margin', '8px');
                                    text.textContent = event.event;
                                    svg.appendChild(text);

                                    // Increment yOffset for the next label
                                    yOffset += 20;
                                });
                            },
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default CandlestickChart;
