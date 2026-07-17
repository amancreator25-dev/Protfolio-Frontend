// src/api/axiosInstance.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000", // change to your backend base URL
  withCredentials: true, // IMPORTANT: send/receive cookies
});

// Optional: intercept 401 to auto logout (you can dispatch logout from here if needed)
API.interceptors.response.use(
  (res) => res,
  (err) => {
    // you can check err.response.status === 401 and handle global logout/navigation
    return Promise.reject(err);
  }
);

export default API;
