import axios from "axios";

const astroServer = axios.create({
  // baseURL: "https://astroserver.onrender.com",
  baseURL: "http://localhost:5000",
});

export default astroServer;
