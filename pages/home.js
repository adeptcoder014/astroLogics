import Image from "next/image";
import { Header } from "../components/header";
import { SearchBar } from "../components/home/searchBar";
import { EventCard } from "../components/eventCard";
import { MainCategories } from "../components/home/mainCategories";
import CommanLayout from "../layouts/comman";
import { CurrentTransit } from "../components/currentTransit";
import TransitDisplay from "../components/TransitDisplay";
import { userContext } from '../context/userContext'; // Import the user context
import { getUserById } from "../controller/user";
import { useState } from "react";

//============================================================
export default function Home() {
    const { login, userToken } = userContext(); // Use the user context
    const [userData, setUserData] = useState()


    const userDataById = async () => {
        try {
            const userResponse = await getUserById();
            setUserData(userResponse.data);
        } catch (error) {
            console.error('Error fetching user data:', error);

        }
    };
    return (
        // =============== VIEW ===========================
        <>
            <CommanLayout>

                <TransitDisplay />
            </CommanLayout>
            {/* < MainCategories /> */}
        </>
        // <Test/>
        //     <>
        //         <h1 className="">Nischal Yogi</h1>
        //         <CommanLayout>
        //             {/* <SearchBar /> */}
        //             {/* <EventCard /> */}
        //             <h1 className="h1  h1Responsive">Current Transit  :           </h1>

        //             <div style={{ backgroundColor: "#3D3E4F", padding: 10, borderRadius: 16, marginTop: 25 }}>
        //                 <CurrentTransit />
        //             </div>
        // < MainCategories />
        //         </CommanLayout>

        //     </>
    )
}