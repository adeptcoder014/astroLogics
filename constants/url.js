import axios from "axios";

const astroServer = axios.create({
  // baseURL: "https://astroserver.onrender.com",
  baseURL: "http://192.168.117.142:8000",
});

export default astroServer;
