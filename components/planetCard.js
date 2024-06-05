import { useRouter } from "next/router";
import Image from "next/image"
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";





export const  PlanetCard = ({ data }) => {
    const router = useRouter()
    // console.log('houseSIgn ===', data.houseSIgn);
    const getOrdinal = (num) => {
        const ordinalSuffixes = ["th", "st", "nd", "rd"];
        const remainder = num % 100;
        return num + (ordinalSuffixes[(remainder - 20) % 10] || ordinalSuffixes[remainder] || ordinalSuffixes[0]);
    };

    return (
        <div
         className="p-5"
         onClick={()=>(router.push(`/detail?house-owner=${data.name}`))}
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
                                {} in {getOrdinal(data.isIn)}
                            </div>
                            <img
                                src={`./zodiac/${data.houseSIgn}.png`}
                                alt="Zodiac"
                                width={29}
                            />
                        </div>
                        <div>
                            <div className="bg-gray-700 shadow-lg rounded-full   flex items-center justify-center">


                                <img
                                    src={`./elements/${data.element}.png`}
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
