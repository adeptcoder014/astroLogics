import Image from "next/image";
import { Header } from "../components/header";
import { SearchBar } from "../components/home/searchBar";
import { EventCard } from "../components/eventCard";
import { MainCategories } from "../components/home/mainCategories";
import CommanLayout from "../layouts/comman";
import { CurrentTransit } from "../components/currentTransit";

//============================================================
export default function Home() {


    return (
        // =============== VIEW ===========================

        <CommanLayout>
            <SearchBar />
            < MainCategories />
            {/* <EventCard /> */}
            <CurrentTransit/>
        </CommanLayout>
    )
}