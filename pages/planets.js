import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import { KonaCard } from "../components/konaCard";
import CommanLayout from "../layouts/comman";
import { PlanetCard } from "../components/planetCard";
import { useQuery } from "react-query";
import { getUser } from "../controller/user";
import CandlestickChart from "../components/priceChart";





const LifeArenaScreen = () => {
    const planetInfo = [{
        name: 'sun',
        name: 'sun',
        rulerOf: [],

        color: 'red'
    },
    {
        name: 'moon',
        color: 'brown',
        rulerOf: [],

    },
    {
        name: 'mars',
        color: 'aqua',
        rulerOf: [],

    },
    {
        name: 'venus',
        rulerOf: [],

        color: 'blue'
    }, {
        name: 'mercury',
        rulerOf: [],

        color: 'blue'
    },
    {
        name: 'jupiter', rulerOf: [],

        color: 'blue'
    }, {
        name: 'saturn', rulerOf: [],

        color: 'blue'
    },
        // {
        //     name: 'node', rulerOf: [],

        //     color: 'blue'
        // }
    ]

    const router = useRouter()

    //============================================================
    const [planet, setPlanet] = useState({})
    const [house, setHouse] = useState({})
    const [currentTransit, setCurrentTransit] = useState({})
    //============================================================

    const { data } = useQuery('getUserNatalData', getUser)








    // console.log(' house-----------', data?.data[0]?.houses[0]);
    // console.log(' planet -----------', data?.data[0]?.planets[0]);
    let assigningNatalPlanetsValue = data?.data[0]?.planets?.map((planet) => {
        planetInfo.filter(info => {
            // console.log('xdata?.data[0]?.houses[parseInt(planet.isIn)+1]?.rashi ============', data?.data[0]?.houses[(parseInt(planet.isIn))+1]);
            if (planet.name == info.name) {
                info.link = '/home'
                info.isIn = planet.isIn
                info.element = data?.data[0]?.houses[parseInt(planet.isIn) - 1]?.element
                info.houseSIgn = data?.data[0]?.houses[parseInt(planet.isIn) - 1]?.rashi

                planet.rulerOf.map(house =>
                    info?.rulerOf?.push({
                        house: house,
                        sign: data?.data[0]?.houses[house - 1]?.rashi, // extracting houses 
                    }))
            }

        })
    })

    // console.log('planetInfo ===', planetInfo);
    // console.log('planetInfo ===', data?.data[0]?.houses[3]);
    return (
        <>
            <CommanLayout>
                <CandlestickChart />

                <h2 className="text-xl font-semibold mb-4 text-center">Upcoming Saturn Event</h2>

                {planetInfo.map(item => (
                    // <div key={item} className="planet-card-container">


                    <PlanetCard key={item.kona} data={item} />
                    // </div>
                ))}
            </CommanLayout>
        </>
    )
}

export default LifeArenaScreen