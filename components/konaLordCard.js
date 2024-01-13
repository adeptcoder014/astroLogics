import { useRouter } from "next/router";

export const KonaLordCard = ({ rashi,owner,method }) => {
    const router = useRouter()
    return (
        <>
            
                    <div  className="kona-lord-card center" onClick={method}>
                        <div >
                            <h2>{rashi}</h2>
                            <p>Lord : {owner}</p>
                        </div>
                    </div>
              
        </>
    )
}
