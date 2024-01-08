import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import { KonaCard } from "../components/konaCard";
import CommanLayout from "../layouts/comman";


const LifeArenaScreen = () => {
    const konaInfo = [{
        kona: 'dharma',
        color: 'red'
    },
    {
        kona: 'artha',
        color: 'brown'
    },
    {
        kona: 'kama',
        color: 'aqua'
    },
    {
        kona: 'mokasha',
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

    // console.log('----- house 1st -----', house);

    return (
        <>
            <CommanLayout>


                <div className="kona-card-container">
                   
                    
                    {konaInfo.map(item => (
                        <KonaCard key={item.id} data={item} />
                    ))}
                </div>
            </CommanLayout>
        </>
    )
}

export default LifeArenaScreen