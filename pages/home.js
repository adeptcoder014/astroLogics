import Image from "next/image";
import { Header } from "../components/header";
import { SearchBar } from "../components/home/searchBar";
import { EventCard } from "../components/eventCard";
import { MainCategories } from "../components/home/mainCategories";
import CommanLayout from "../layouts/comman";
import { CurrentTransit } from "../components/currentTransit";
import TransitDisplay from "../components/TransitDisplay";

//============================================================
export default function Home() {


    return (
        // =============== VIEW ===========================
        <TransitDisplay />
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
        //             < MainCategories />
        //         </CommanLayout>

        //     </>
    )
}