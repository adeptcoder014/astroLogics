import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import astroServer from "../constants/url";
import CommanLayout from "../layouts/comman";

const LifeArenaScreen = () => {
    const konaInfo = [{
        kona: 'Fire',
        color: 'red',
        gradient: 'bg-fireGradient'
    },
    {
        kona: 'Earth',
        color: 'brown',
        gradient: 'bg-earthGradient'
    },
    {
        kona: 'Air',
        color: 'aqua',
        gradient: 'bg-airGradient'
    },
    {
        kona: 'Water',
        color: 'blue',
        gradient: 'bg-waterGradient'
    }];

    const router = useRouter();

    const [planet, setPlanet] = useState({});
    const [house, setHouse] = useState({});
    const [currentTransit, setCurrentTransit] = useState({});

    useEffect(() => {
        astroServer.get('/user/get').then(res => {
            setPlanet(res?.data[0]?.planets[0]);
            setHouse(res?.data[0]?.houses[0]);
        });
    }, []);

    return (
        <CommanLayout>
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
                <h2 className="text-lg font-800 mb-10">Choose One Element</h2>
                <div className="grid grid-cols-2 gap-8">
                    {konaInfo.map((x) => (
                        <div
                            onClick={() => handleClick(x.link)}
                            key={x.kona}
                            className={`${x.gradient} h-60 p-4 rounded-lg text-center shadow-lg relative flex flex-col items-center justify-center`}>
                            <img
                                src={`./elements/${x.kona.toLocaleLowerCase()}.png`}
                                alt="Natal"
                                className="w-25 h-20 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            />
                            <p className="font-bold mt-16">{x.kona}</p>
                            <p className="text-xs">Navigate the natality</p>
                        </div>
                    ))}
                </div>
            </div>
        </CommanLayout>
    );
}

export default LifeArenaScreen;
