import axios from "axios";
import astroServer from "../constants/url";
import { getCurrentDateTime } from "../util/misc";

export const getAlmanac = async () => {


    const currentDateTime = getCurrentDateTime()

    const response = await astroServer.post('/almanac/get', currentDateTime);
    // const response = await axios.get("https://astroserver.onrender.com/user/get");

    if (!response) {
        throw new Error('Network response was not ok');
    }
    return response;
};



export const getPlanetAlmanac = async (planet) => {


    // const currentDateTime = getCurrentDateTime()
    // console.log('-- planet ------',planet);
    
    const response = await astroServer.get(`/almanac/get-planet-transit?planet=${planet}`);
    // console.log('-- planet response ------',response?.data);
    // const response = await axios.get("https://astroserver.onrender.com/user/get");
    // console.log('response=======', response);
    if (!response) {
        throw new Error('Network response was not ok');
    }
    return response?.data;
};




