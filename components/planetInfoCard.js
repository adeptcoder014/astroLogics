
import Image from "next/image"

export const PlanetInfoCard = () => {

    return (
        <div className="planetInfoCard">
            <div className="planetImgDiv">

                <Image
                    alt="alt tag"
                    src={require("../public/planets/venus.png")}
                    height={40}
                    width={40}
                />
            </div>
            <div>
                <h1 className="planetLabel centerText">Venus</h1>

            </div>
        </div>
    )
}