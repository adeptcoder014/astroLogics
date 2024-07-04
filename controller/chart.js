import axios from "axios";
import astroServer from "../constants/url";
import { getCurrentDateTime } from "../util/misc";

export const getChartData = async (formattedDate) => {


    // const currentDateTime = getCurrentDateTime()
    let datObj = {
        date: formattedDate,
        time: '12:00'
    }
    const response = await astroServer.post('chart/get?planet=moon&sign=cancer');
console.log(response);
    if (!response) {
        throw new Error('Network response was not ok');
    }
    return response;
};


