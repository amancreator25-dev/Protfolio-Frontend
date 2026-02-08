// src/RequiredApi/AuthGetCU.js
import API from "../api/axiosInstance";

export async function getCurrentUserApi() {
  const res = await API.get("/api/auth/current-user"); // adapt route if different
  return res.data;
}
