import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import { KonaCard } from "../components/konaCard";
import CommanLayout from "../layouts/comman";


const LifeArenaScreen = () => {
    const konaInfo = [{
        kona: 'Fire',
        color: 'red'
    },
    {
        kona: 'Earth',
        color: 'brown'
    },
    {
        kona: 'Air',
        color: 'aqua'
    },
    {
        kona: 'Water',
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


                    {konaInfo.map(item => (
                        <KonaCard key={item.kona} data={item} />
                    ))}
                </div>
            </CommanLayout>
        </>
    )
}

export default LifeArenaScreen