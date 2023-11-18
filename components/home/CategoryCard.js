import Image from "next/image";
import { PopUp } from "../popUp";
import { useState } from "react";
export const CategoryCard = ({ metaInfo }) => {
    const [yes, setYes] = useState(false)

    // const [count, setCount] = useState(0);
    console.log('==========', yes);


    return (
        
        <>
            {yes ? <PopUp yes={yes} setYes={setYes} /> : null}
            <div className="categoryCard">
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

                <p className="centerText">{metaInfo.title}</p>
                {/* <div className="categoryCard"> */}
                {/* </div> */}
            </div>

        </>
    )
}