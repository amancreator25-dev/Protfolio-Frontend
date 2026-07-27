// src/api/axiosInstance.js

import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true,
});

API.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.log("Interceptor Status:", error.response?.status);

        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            console.log("Refreshing token...");

            originalRequest._retry = true;

            try {
                await API.post("/api/auth/refresh-token");
                console.log("Token refreshed!");

                return API(originalRequest);
            } catch (refreshError) {
                console.log("Refresh failed:", refreshError);

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);
export default API;