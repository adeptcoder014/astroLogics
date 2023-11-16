import { Text } from "@nextui-org/react";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../context/token";

export default function Home() {
    const context = useAuth();

    return (
        // =============== VIEW ===========================

        <div className="mainContainer">
            <div className="container">
                <h1 className="h1 centerText">Home</h1>

            </div>
        </div>
    )
}