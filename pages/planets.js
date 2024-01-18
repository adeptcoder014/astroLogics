import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import { KonaCard } from "../components/konaCard";
import CommanLayout from "../layouts/comman";
import { PlanetCard } from "../components/planetCard";


const LifeArenaScreen = () => {
    const planetInfo = [{
        name: 'sun',
        color: 'red'
    },
    {
        name: 'moon',
        color: 'brown'
    },
    {
        name: 'mercury',
        color: 'aqua'
    },
    {
        name: 'venus',
        color: 'blue'
    },{
        name: 'mars',
        color: 'blue'
    },{
        name: 'jupiter',
        color: 'blue'
    },{
        name: 'saturn',
        color: 'blue'
    },
    {
        name: 'node',
        color: 'blue'
    }
    ]

    const router = useRouter()

    //============================================================
    const [planet, setPlanet] = useState({})
    const [house, setHouse] = useState({})
    const [currentTransit, setCurrentTransit] = useState({})
    //============================================================

    useEffect(() => {
        astroServer.get('/user/get').then(res => {
            setPlanet(res?.data[0]?.planets[0]);
            setHouse(res?.data[0]?.houses[0]);
        })
    }, [])


    return (
        <>
            <CommanLayout>


                <div className="kona-card-container">


                    {planetInfo.map(item => (
                        <PlanetCard key={item.kona} data={item} />
                    ))}
                </div>
            </CommanLayout>
        </>
    )
}

export default LifeArenaScreen