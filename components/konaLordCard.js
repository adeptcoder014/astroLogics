import { useRouter } from "next/router";

export const KonaLordCard = ({ rashi, owner, method, house }) => {
    return (
        <>

            <div className="kona-lord-card center" onClick={method}>
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
