import axios from "axios";
import astroServer from "../constants/url";
import { getCurrentDateTime } from "../util/misc";

export const getUser = async () => {
    const response = await astroServer.get('/user/get');

    if (!response) {
        throw new Error('Network response was not ok');
    }
    return response;
};

