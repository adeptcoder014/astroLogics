import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import CommanLayout from "../layouts/comman";


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
            <CommanLayout>
                <div className="center">


                    <p>1st house : {house[0]?.owner}</p>
                    <p>5th house : {house[4]?.owner}</p>
                    <p>9th house : {house[8]?.owner}</p>
                </div>
                {/* <button onClick={() => {
                    router.push(`/detail/?house-owner=${house[4]?.owner}&rashi=${house[4]?.rashi}`)
                }}>Konas</button> */}
            </CommanLayout>
        </>
    )
}

export default ArthKona