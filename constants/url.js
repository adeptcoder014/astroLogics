import axios from "axios";

const astroServer = axios.create({
  // baseURL: "https://astroserver.onrender.com",
  baseURL: "http://localhost:8000",
});

export default astroServer;
