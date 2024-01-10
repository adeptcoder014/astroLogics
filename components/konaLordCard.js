import { useRouter } from "next/router";

export const KonaLordCard = ({ konaLordData }) => {
    const router = useRouter()
    console.log('konaLordData ----', konaLordData[0].KonaHouseDetails);
    return (
        <>
            {konaLordData.map(x => (

                <div key={x?.KonaHouseDetails?.owner} className="kona-lord-card center" onClick={() => router.push(`/detail/?house-owner=${x.KonaHouseDetails.owner}&rashi=${x.KonaHouseDetails.rashi}`)}>
                    <div >
                        <h2>{x?.KonaHouseDetails?.rashi}</h2>
                        <p>Lord : {x?.KonaHouseDetails?.owner}</p>
                    </div>
                </div>
            ))}

        </>
    )
}
