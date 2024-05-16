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

            <div className="center" style={{ padding: "1.8%" }}>
                <Image
                    alt="alt tag"
                    src={require("../public/icons/userSign.png")}
                    height={45}
                    width={40}
                />
            </div>
        </div>
    )
}