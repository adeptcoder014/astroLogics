import { useRouter } from "next/router";
import Image from "next/image"
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";





export const PlanetCard = (x) => {
    const router = useRouter()
    // console.log('data ===', x.data);

    return (
        <>

            <div style={{
                display: 'flex',
                justifyContent: 'space-around'

            }}>
                <div style={{
                    display: 'flex',
                    alignItems: "center",
                    alignContent: 'space-between',
                    justifyContent: 'space-between',

                }}>

                    <h2 style={{ marginRight: 10 }}>{x?.data?.name}</h2>
                    <Image
                        alt="planets in svg"
                        src={require(`../public/planets/${x?.data?.name}.svg`)}
                        height={35}
                        width={35}
                    />
                </div>
                <div style={{
                    display: "flex",
                    width: '50%',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    // padding: 15
                    // backgroundColor: 'red'
                }}>


                    {x?.data?.rulerOf?.map((w, index) => {
                        // console.log('index', index);
                        return (
                            <>
                                <Link href={`/detail?house-owner=${x?.data?.name}&rashi=${w.sign}`}>
                                    <div
                                        // onClick={() => router.push(`/detail?house-owner=${x?.data?.name}&rashi=${w.sign}`)}
                                        // onClick={() => redirect(`/home`)}
                                        className="planet-card-house-lordship-mini-card">
                                        <h3 className="h3">{w.house}</h3>
                                        <Image
                                            alt="planets in svg"
                                            // src={require(`../public/zodiac/${planetHouseLordhsipZodiac[x?.data?.name][index == 0 ? 'firstSign' : 'secondSign']}.png`)}
                                            src={require(`../public/zodiac/${w.sign}.png`)}
                                            height={30}
                                            width={30}
                                        />
                                    </div >
                                </Link>
                            </>
                        )
                    }
                        // {/* {x?.data?.rulerOf?.map(w => <p key={x}>{w}</p>)} */}

                    )}
                </div>


            </div >
        </>
    )
}
