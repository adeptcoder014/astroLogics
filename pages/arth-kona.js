import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import astroServer from "../constants/url"


const ArthKona = () => {

    const router = useRouter()

    //============================================================
    const [planet, setPlanet] = useState({})
    const [house, setHouse] = useState({})
    const [currentTransit, setCurrentTransit] = useState({})
    //============================================================

    useEffect(() => {
        astroServer.get('/user/get').then(res => {
            setPlanet(res?.data[0]?.planets[0]);
            setHouse(res?.data[0]?.houses);
        })
    }, [])
    // console.log('----- house 1st -----', house[0]);


    return (
        <>
            <p>1st house : {house[0]?.owner}</p>
            <p>5th house : {house[4]?.owner}</p>
            <p>9th house : {house[8]?.owner}</p>
            <button onClick={() => {
                router.push(`/detail/?house-owner=${house[0]?.owner}&rashi=${house[0]?.rashi}`)
            }}>Konas</button>
        </>
    )
}

export default ArthKona