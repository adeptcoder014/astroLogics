import axios from "axios";
import astroServer from "../constants/url";
import { getCurrentDateTime } from "../util/misc";

export const getAlmanac = async () => {


    const currentDateTime = getCurrentDateTime()

    const response = await axios.post('https://astroserver.onrender.com/almanac/get', currentDateTime);
    // const response = await axios.get("https://astroserver.onrender.com/user/get");

    if (!response) {
        throw new Error('Network response was not ok');
    }
    return response;
};

// {
//     "name": "moon",
//     "position": {
//             "degree": 16,
//             "minute": 16.98658935701701,
//             "name": "pisces",
//             "sign": "♓"
//     }
// }