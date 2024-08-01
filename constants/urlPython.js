import axios from "axios";


const ephemerisServer = axios.create({
  // baseURL: "https://ephemeris.onrender.com",
  // baseURL: "http://192.168.29.194:8000",
  baseURL: "http://192.168.1.33:8000",
});



export default  ephemerisServer ;
