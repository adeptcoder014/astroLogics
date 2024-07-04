import axios from "axios";

const astroServer = axios.create({
  // baseURL: "https://astroserver.onrender.com",
  // baseURL: "http://192.168.29.194:8000",
  baseURL: "http://192.168.0.115:8000",
});

export default astroServer;
