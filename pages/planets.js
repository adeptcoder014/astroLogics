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
    }, {
        name: 'mars',
        color: 'blue'
    }, {
        name: 'jupiter',
        color: 'blue'
    }, {
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

    const { data } = useQuery('getUserNatalData', getUser)
    console.log(data?.data[0].planets);
    

    let assigningNatalPlanetsValue = data?.data[0]?.planets?.map((x) => {
        planetInfo.filter(w => {
            if (x.name == w.name) {
                w.rulerOf = x.rulerOf
            }

        })
    })

console.log('planetInfo ===',planetInfo);
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