import axios from "axios";

const astroServer = axios.create({
  baseURL: "https://astroserver.onrender.com",
  // baseURL: "http://192.168.29.194:8000",
  // baseURL: "http://192.168.1.33:7000",
});



export default  astroServer ;
