import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import { KonaCard } from "../components/konaCard";
import CommanLayout from "../layouts/comman";
import { PlanetCard } from "../components/planetCard";
import { useQuery } from "react-query";
import { getUser } from "../controller/user";



// {
//     "_id": "654e47ffa520f8a94670819c",
//     "name": "moon",
//     "longitude": "27 ♑ 45.74979272388987",
//     "rulerOf": [
//         7
//     ],
//     "isIn": "1",
//     "landLord": "saturn",
//     "__v": 0
// }



const LifeArenaScreen = () => {
    const planetInfo = [{
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


    let assigningNatalPlanetsValue = data?.data[0]?.planets?.map((x) => {
        planetInfo.filter(w => {
            if (x.name == w.name) {
                w.link = '/home'

                x.rulerOf.map(z =>
                    w?.rulerOf?.push({
                        house: z,
                        sign: data?.data[0]?.houses[z - 1]?.rashi,
                    }))
            }

        })
    })

    console.log('planetInfo ===', planetInfo);
    // console.log('planetInfo ===', data?.data[0]?.houses[3]);
    return (
        <>
            <CommanLayout>

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