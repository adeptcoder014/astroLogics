import Image from "next/image"
import { CategoryCard } from "../../components/home/CategoryCard";

export const MainCategories = () => {
    let cardData = [
        {
            "title": "Natal",
            "image":
                <Image
                    alt="alt tag"
                    src={require("../../public/icons/sampleCardImg.png")}
                    height={40}
                    width={40}
                />

        },
        {
            "title": "Planets",
            "image":
                <Image
                    alt="alt tag"
                    src={require("../../public/icons/sampleCardImg1.png")}
                    height={40}
                    width={40}
                />

        },
        {
            "title": "Transits",
            "image":
                <Image
                    alt="alt tdsdag"
                    src={require("../../public/icons/sampleCardImg2.png")}
                    height={40}
                    width={40}
                />


        },


        {
            "title": "Events",
            "image":
                <Image
                    alt="alt tag"
                    src={require("../../public/icons/sampleCardImg3.png")}
                    height={40}
                    width={40}
                />

        }
    ]

    return (
        <>
            <div style={{ padding: "3%", marginTop: "15%" }}>

                <h1 className="h1  h1Responsive">Categories </h1>
            </div>
            <div style={{
                // width: "150px",
                display: "flex",
                // flexDirection: "row",
                justifyContent: "space-around",
                // backgroundColor: "rebeccapurple",
                // gap: "2%"
            }}>

                {cardData.map((metaInfo) => (

                    <CategoryCard key={metaInfo.title} metaInfo={metaInfo} />
                ))}
            </div>
        </>
    )
}