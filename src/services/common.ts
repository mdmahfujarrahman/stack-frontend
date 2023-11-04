import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";


const API: AxiosInstance = axios.create({
    baseURL: "https://reqres.in/api",
});

API.interceptors.request.use((req: InternalAxiosRequestConfig) => {
    if (localStorage.getItem("token")) {
        req.headers["Authorization"] = `Bearer ${localStorage.getItem(
            "token"
        )}`;
    }
    return req;
});

export default API;
