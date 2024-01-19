import { useRouter } from "next/router";

export const PlanetCard = (x) => {
    const router = useRouter()

    return (
        <>

            <div className="planet-card center">
                <div style={{

                }} onClick={() => router.push(`/kona-lords/?kona=${x?.data?.kona}`)}>

                    <h2>{x?.data?.name}</h2>
                    <p>Ruler Of : </p>
                    {x?.data?.rulerOf?.map(w => <p key={x}>{w}</p>)}

                </div>
            </div>
        </>
    )
}
