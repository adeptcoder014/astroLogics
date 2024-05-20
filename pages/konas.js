import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import astroServer from "../constants/url";
import CommanLayout from "../layouts/comman";
import { userContext } from '../context/userContext';
import { getUserById } from "../controller/user";

const LifeArenaScreen = () => {
    const konaInfo = [{
        kona: 'Fire',
        color: 'red',
        gradient: 'bg-fireGradient',
        description: 'Ones arrival to begins his dharma',
        link: 'kona-lords'
    },
    {
        kona: 'Earth',
        color: 'brown',
        gradient: 'bg-earthGradient',
        description: 'First steps in the OUTSIDE'

    },
    {
        kona: 'Air',
        color: 'aqua',
        gradient: 'bg-airGradient',
        description: 'Begining of our desires'

    },
    {
        kona: 'Water',
        color: 'blue',
        gradient: 'bg-waterGradient',
        description: 'Onward to the MOKSHA'

    }];

    const router = useRouter();

    return (
        <CommanLayout>
            <div className="bg-[#242538] p-4 rounded-lg mb-6  h-[80vh] flex flex-col items-center justify-center">
                <h2 className="text-xl font-extrabold mb-20">Choose One Element</h2>
                <div className="grid grid-cols-2  gap-10">
                    {konaInfo.map((x, index) => (
                        <div
                            onClick={() => {
                                router.push(`/kona-lords?kona=${x.kona.toLocaleLowerCase()}`)
                            }}
                            key={index}
                            className={`${x.gradient} cursor-pointer p-4 rounded-lg text-center shadow-lg relative flex flex-col items-center justify-center`}>

                            <div className="p-15 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 bg-[#D9D9D9] bg-opacity-50 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <img
                                    src={`./elements/${x.kona.toLocaleLowerCase()}.png`}
                                    alt="Natal"
                                    className="w-20 h-25 rounded-full absolute top-7 left-9 transform -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>

                            <p className=" font-extrabold text-2xl mt-10">{x.kona}</p>
                            <p className="text-xs">{x.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </CommanLayout>
    )

}


export default LifeArenaScreen;
