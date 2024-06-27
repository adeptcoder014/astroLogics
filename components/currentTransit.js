import { useEffect, useState } from "react";
import { SineWave } from "./sineWave";
import { useQuery } from "react-query";
import { getAlmanac } from "../controller/transit";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const signHouse = {
    aries: '1',
    taurus: '2',
    gemini: '3',
    cancer: '4',
    leo: '5',
    virgo: '6',
    libra: '7',
    scorpio: '8',
    sagittarius: '9',
    capricorn: '10',
    aquarius: '11',
    pisces: '12',
};

const positionTemplate = [
    { planet: 'sun', whichHouse: '0' },
    { planet: 'moon', whichHouse: '0' },
    { planet: 'mercury', whichHouse: '0' },
    { planet: 'venus', whichHouse: '0' },
    { planet: 'mars', whichHouse: '10' },
    { planet: 'jupiter', whichHouse: '0' },
    { planet: 'saturn', whichHouse: '0' },
    { planet: 'mean node', whichHouse: '0' },
];

export const CurrentTransit = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [positions, setPositions] = useState(positionTemplate);

    const formattedDate = selectedDate.toISOString().slice(0, 10);
    const { data } = useQuery(['getTransitData', formattedDate], () => getAlmanac(formattedDate));

    useEffect(() => {
        if (data?.data?.data) {
            const updatedPositions = positionTemplate.map(pos => {
                const transit = data?.data?.data?.find(x => x.name === pos.planet);
                if (transit) {
                    return { ...pos, whichHouse: signHouse[transit.position.name] };
                }
                return pos;
            });
            setPositions(updatedPositions);
        }
    }, [data]);



    console.log('-------------positions--------', data?.data);
    return (
        <>
            <div className="items-center">
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                />
            </div>
            <SineWave
                sunPosition={positions[0]}
                moonPosition={positions[1]}
                mercuryPosition={positions[2]}
                venusPosition={positions[3]}
                marsPosition={positions[4]}
                jupiterPosition={positions[5]}
                saturnPosition={positions[6]}
                nodePosition={positions[7]}
            />
        </>
    );
};
