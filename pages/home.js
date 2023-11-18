import Image from "next/image";
import { Header } from "../components/header";
import { SearchBar } from "../components/home/searchBar";
import { MainCategories } from "../components/home/mainCategories";

//============================================================
export default function Home() {


    return (
        // =============== VIEW ===========================

        <div className="mainContainer">
            <div className="container">
                {/* ------------------- SECTIONS__userInfo ------------------------ */}
                <Header />

                {/* ------------------- SECTIONS__searchBar ------------------------ */}
                <SearchBar />
                {/* ------------------- SECTIONS__mainCatgories ------------------------ */}
                < MainCategories />

                {/* ------------------- SECTIONS__Events ------------------------ */}

            </div>
        </div >
    )
}