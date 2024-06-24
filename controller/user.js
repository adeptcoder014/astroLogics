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


export const getUserById = async (userId) => {
    const response = await astroServer.post('/user/byId', { userId });
    // console.log('resp --------->',response.data);
    if (!response) {
        throw new Error('Network response was not ok');
    }
    return response?.data;
};


export const updateUser = async (userId, userData) => {
    const response = await astroServer.put(`/user/update/${userId}`, userData);
    if (!response) {
        throw new Error('Network response was not ok');
    }
    return response;
};

export const deleteUser = async (userId) => {
    const response = await astroServer.delete(`/user/delete/${userId}`);
    if (!response) {
        throw new Error('Network response was not ok');
    }
    return response;
};



export const getUserNatalPlanets = async (userId) => {
    const response = await astroServer.delete(`/user/delete/${userId}`);
    if (!response) {
        throw new Error('Network response was not ok');
    }
    return response;
};


export default {
    getUser,
    updateUser,
    deleteUser
};
