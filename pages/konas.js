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
    // const cssClass = `kona-card-${x?.data?.kona}`


    return (
        <>
            <CommanLayout>



                {konaInfo.map(item => (
                    <>
                        <div
                            key={item?.kona}
                            className="kona-card-container"
                            onClick={() => {
                                console.log('iiiiiiiiiiii');
                                router.push(`/kona-lords/?kona=${item?.kona}`)
                            }}
                        >


                            <div className={`kona-card-${item?.kona}`}>
                                <div

                                >

                                    {/* <h2>{x?.data?.kona}</h2> */}
                                </div>
                                {/* <h2>{x?.data?.kona}</h2> */}
                            </div >

                            {/* <KonaCard key={item.kona} data={item} /> */}
                        </div >
                    </>
                ))}
            </CommanLayout>
        </>
    )
}

export default LifeArenaScreen