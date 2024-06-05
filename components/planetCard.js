import { useRouter } from "next/router";
import Image from "next/image"
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";





export const  PlanetCard = ({ data }) => {
    const router = useRouter()
    // console.log('data ===', data);

    return (
        <div
         className="p-5"
         onClick={()=>(router.push('/detail'))}
         >
            <div className="bg-custom-gradient p-4 rounded-xl flex ">
                <div className="flex items-center ">
                    <img
                        src={`./planets/${data.name}.svg`}
                        alt="Natal"
                        width={45}
                        className='mr-5'
                    />
                </div>
                <div className="w-full">

                    <div className="flex items-between justify-between">
                        <div className="flex">

                            <div className='text-[white] text-lg font-extrabold mr-1'>
                                {} in 9th
                            </div>
                            <img
                                src={`./zodiac/capricorn.png`}
                                alt="Zodiac"
                                width={29}
                            />
                        </div>
                        <div>
                            <div className="bg-gray-700 shadow-lg rounded-full   flex items-center justify-center">


                                <img
                                    src={`./elements/fire.png`}
                                    alt="Natal"
                                    width={29}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-500 text-sm flex items-center">
                        He is in the enemy house
                    </div>
                </div>
            </div>
        </div>
    )
}
