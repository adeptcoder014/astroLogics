import Image from "next/image";
import { PopUp } from "../popUp";
import { useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";

export const CategoryCard = ({ metaInfo }) => {
    const [yes, setYes] = useState(false)
    const router = useRouter()
    // const [count, setCount] = useState(0);
    console.log('==========', yes);


    return (

        <>
            {yes ? <PopUp yes={yes} setYes={setYes} /> : null}

            <div onClick={()=> router.push(metaInfo.link)} className="categoryCard">
                <Link href="/planets">
                    <div
                        className="center"
                        style={{
                            display: "flex"
                        }}
                        onClick={() => {
                            // alert('aur bhai')
                            setYes(true)
                        }}
                    >

                        {metaInfo.image}
                    </div>
                </Link>
                <p className="centerText">{metaInfo.title}</p>
                {/* <div className="categoryCard"> */}
                {/* </div> */}
            </div>


        </>
    )
}