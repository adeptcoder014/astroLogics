import axios from "axios";
import astroServer from "../constants/url";
import { getCurrentDateTime } from "../util/misc";

export const getAlmanac = async (formattedDate) => {


    // const currentDateTime = getCurrentDateTime()
    let datObj = {
        date: formattedDate,
        time: '12:00'
    }
    const response = await astroServer.post('/almanac/get', datObj);

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




