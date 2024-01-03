import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import astroServer from "../constants/url"


const LifeArenaScreen = () => {

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
            <button onClick={() => {
                router.push(`/arth-kona`)
            }}>Konas</button>
        </>
    )
}

export default LifeArenaScreen