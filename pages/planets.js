import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import { KonaCard } from "../components/konaCard";
import CommanLayout from "../layouts/comman";
import { PlanetCard } from "../components/planetCard";
import { useQuery } from "react-query";
import { getUser } from "../controller/user";
import CandlestickChart from "../components/priceChart";
import { PlanetaryHours } from "../components/planetaryHours";
import { PlanetaryEventAccordion } from "../components/planetaryEventAccordion";
import { LocalTransit } from "../components/localTransit";
import { LocalTransitChart } from "../components/localTransitSvg";
import AstroDrawComponent from "../components/AstroDrawComponent";





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
    var data_ = {
        "planets": {
            "Pluto": [63],
            "Neptune": [110],
            "Uranus": [318],
            "Saturn": [201],
            "Jupiter": [192],
            "Mars": [210],
            "Moon": [268],
            "Sun": [281],
            "Mercury": [312],
            "Venus": [330]
        },
        "cusps": [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274]
    };
    // var chart = new Chart('paper', 800, 800);


    // var radix = chart.radix(data_);
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

    return (
        <>
            <CommanLayout>

                {/* <div className="bg-slate-100">
                    <h2 className=" text-gray-900 font-extrabold p-2 text-center">Lucknow current transit</h2>
                    <LocalTransit />
                </div>
                <LocalTransitChart/>

                <PlanetaryHours />

                <CandlestickChart />







                <h2 className="text-xl font-semibold mb-4 text-center">Upcoming Saturn Event</h2>
                
                {planetInfo.map(item => (
                    // <div key={item} className="planet-card-container">


                    <PlanetCard key={item.kona} data={item} />
                    // </div>
                ))} */}
                <AstroDrawComponent/>
            </CommanLayout>
        </>
    )
}

export default LifeArenaScreen