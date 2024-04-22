import { useRouter } from "next/router";
import { useEffect } from "react";

export const KonaLordCard = ({ rashi, owner, method, house }) => {

const router = useRouter()
console.log(router?.query?.kona);

    return (
        <>

            <div className={`kona-lord-card-${router?.query?.kona} center`} onClick={method}>
                <div>

                    <h1>{house}</h1>
                </div>
                <div >

                    <p>Lord : {owner}</p>
                    <h2>{rashi}</h2>
                </div>
            </div>

        </>
    )
}
