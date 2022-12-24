import axios from "axios";

export const API = axios.create({
    baseURL: "https://users-auth-api.onrender.com/api/",
    headers: {
        ContentType: "application/json",
    },
})
API.interceptors.request.use(async(req)=>{
    req.headers["Authorization"] = "Bearer " + localStorage.getItem("token")
})