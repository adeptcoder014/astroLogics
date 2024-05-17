import Image from "next/image"
import { useRouter } from "next/router"
export const Header = () => {
    const  router = useRouter()
    return (
        <div className="userInfoSection">

            <div style={{
                // backgroundColor: "red",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",

                alignItems: "center",
                // width: "40%"
            }}
                onClick={() => router.push('/home')}
            >

                <p className="p" style={{
                    fontSize: "10px",
                    float: "right"
                }}>Good morning 🌞</p>
                <div style={{
                    marginTop: "20px"
                }}>

                </div>
                <p className="p" style={{
                    fontSize: "14px",
                    fontWeight: "bolder"

                }} >Nischal Gupta 👋</p>
            </div>

            <div className="h-10 w-10 bg-white rounded-full  flex items-center justify-center">
                <Image
                    alt="alt tag"
                    src={require("../public/zodiac/capricornSign.png")}
                    // height={45}
                    width={35}
                />
            </div>
        </div>
    )
}