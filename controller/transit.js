import axios from "axios";
import astroServer from "../constants/url";
import { getCurrentDateTime } from "../util/misc";

export const getAlmanac = async () => {


    const currentDateTime = getCurrentDateTime()
    console.log(currentDateTime);

    const response = await astroServer.post('/almanac/get', currentDateTime);
    // const response = await axios.get("https://astroserver.onrender.com/user/get");

    if (!response) {
        throw new Error('Network response was not ok');
    }
    return response;
};



export const getPlanetAlmanac = async () => {


    const currentDateTime = getCurrentDateTime()
    console.log(currentDateTime);

    const response = await astroServer.post('/almanac/get-planet-transit');
    // const response = await axios.get("https://astroserver.onrender.com/user/get");

    if (!response) {
        throw new Error('Network response was not ok');
    }
    return response;
};




