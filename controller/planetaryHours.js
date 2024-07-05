import axios from "axios";
import ephemerisServer from "../constants/urlPython";
import { getCurrentDateTime } from "../util/misc";

export const getPlanetaryHours = async (date, city) => {
    let lowerCaseCity = city.toLowerCase();
    console.log('================== response aaya =====================');
    const response = await ephemerisServer.get(`planetary-hours?date=${date}&city=${lowerCaseCity}`);
    if (!response) {
        throw new Error('Network response was not ok');
    }
    return response;
};


