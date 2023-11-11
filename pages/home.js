import { Text } from "@nextui-org/react";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../context/token";

export default function Home() {
    const context = useAuth();


    useEffect(() => {
        console.log('-------------------->  ',context.userToken);
        // axios.get("http://localhost:5000/user/get").then((res) => console.log(res?.data[0]))
    }, [])

    return (

        <Text h1>Home Page</Text>
    )
}