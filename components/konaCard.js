import { useRouter } from "next/router";

export const KonaCard = (x) => {
    const router = useRouter()

    return (
        <>

            <div className="kona-card center">
                <div onClick={()=>router.push('/artha-kona')}>

                <h2>{x.data.kona}</h2>
                </div>
            </div>
        </>
    )
}
