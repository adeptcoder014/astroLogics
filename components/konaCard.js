import { useRouter } from "next/router";

export const KonaCard = (x) => {
    const router = useRouter()
    const cssClass = `kona-card-${x?.data?.kona}`
    return (
        <>

            <div className={cssClass}>
                <div onClick={() => router.push(`/kona-lords/?kona=${x?.data?.kona}`)}>

                    {/* <h2>{x?.data?.kona}</h2> */}
                </div>
                {/* <h2>{x?.data?.kona}</h2> */}
            </div >
        </>
    )
}
