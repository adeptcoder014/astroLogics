import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import { KonaCard } from "../components/konaCard";
import CommanLayout from "../layouts/comman";
import { KonaLordCard } from "../components/konaLordCard";
import { useQuery, useQueryClient, QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";




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
    const [planet, setPlanet] = useState([])
    const [house, setHouse] = useState([])
    const [currentTransit, setCurrentTransit] = useState({})
    //============================================================
    const fetchData = async () => {
        // const response = await astroServer.get('/user/get');
        const response = await axios.get("https://astroserver.onrender.com/user/get");

        if (!response) {
            throw new Error('Network response was not ok');
        }
        return response;
    };

    const { status, data, error, isFetching } = useQuery('postData', fetchData);

    console.log('react query data ----', data?.data[0]);
    // console.log(' data ----', response);
    // useEffect(() => {
    //     astroServer.get('/user/get').then(res => {
    //         setPlanet(res?.data[0]?.planets[0]);
    //         setHouse(res?.data[0]?.houses);
    //     })
    // }, [])

    let konaLordData = []
    if (house) {
        konaLordData = [
            { KonaHouseDetails: data?.data[0]?.houses[konaObj[kona][0]], },
            { KonaHouseDetails: data?.data[0]?.houses[konaObj[kona][1]] },
            { KonaHouseDetails: data?.data[0]?.houses[konaObj[kona][2]] },

        ]
    }
    else {
        konaLordData = []
    }

    // console.log('----- house xxx-----', konaLordData);
    // console.log('----- house 1-----', house[konaObj[kona][0]]);
    // console.log('----- house 2-----', house[konaObj[kona][1]]);
    // console.log('----- konaLordData-----', konaLordData);

    return (
        <>


            <CommanLayout>


                <div className="kona-card-container">
                    {konaLordData.map(x => {
                        console.log(x?.KonaHouseDetails?._id);
                        return (<KonaLordCard
                            method={() => { router.push(`/detail/?house-owner=${x.KonaHouseDetails.owner}&rashi=${x.KonaHouseDetails.rashi}`) }}
                            rashi={x?.KonaHouseDetails?.rashi}
                            owner={x?.KonaHouseDetails?.owner}
                            key={x?.KonaHouseDetails?._id}
                        />)
                    }
                    )}


                </div>
            </CommanLayout>
        </>
    )
}

export default KonaLord