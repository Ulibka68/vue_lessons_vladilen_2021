import axios from "axios";
import router from "@/router";

const requestAxios = axios.create({
    baseURL: process.env.VUE_APP_FB_URL,
});

// Add a response interceptor
requestAxios.interceptors.response.use(undefined, (error) => {
    if (error.response.status == 401) {
        // редирект на логин
        router.push("/auth?message=auth");
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default requestAxios;
