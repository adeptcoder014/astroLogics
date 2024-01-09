import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import { KonaCard } from "../components/konaCard";
import CommanLayout from "../layouts/comman";
import { KonaLordCard } from "../components/konaLordCard";


const KonaLord = () => {
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
    let kona = router.query.kona

    const konaObj = {
        dharma: [0, 4, 8],
        artha: [1, 5, 9],
        kama: [2, 6, 10],
        moksha: [3, 7, 11],
    }
    // console.log('konaObj ---',konaObj[kona]);

    //============================================================
    const [planet, setPlanet] = useState({})
    const [house, setHouse] = useState([])
    const [currentTransit, setCurrentTransit] = useState({})
    //============================================================

    useEffect(() => {
        astroServer.get('/user/get').then(res => {
            setPlanet(res?.data[0]?.planets[0]);
            setHouse(res?.data[0]?.houses);
        })
    }, [])

    let konaLordData = [
        {
            KonaHouseDetails: house[konaObj[kona][0]],
        },
        { KonaHouseDetails: house[konaObj[kona][1]] },
        { KonaHouseDetails: house[konaObj[kona][2]] },

    ]

    // console.log('----- house xxx-----', konaLordData);
    // console.log('----- house 1-----', house[konaObj[kona][0]]);
    // console.log('----- house 2-----', house[konaObj[kona][1]]);
    // console.log('----- house 3-----', house[konaObj[kona][2]]);

    return (
        <>
            <CommanLayout>


                <div className="kona-card-container">


                    <KonaLordCard konaLordData={konaLordData} />
                </div>
            </CommanLayout>
        </>
    )
}

export default KonaLord