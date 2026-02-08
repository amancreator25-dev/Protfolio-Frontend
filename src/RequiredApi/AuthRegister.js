// src/RequiredApi/AuthRegister.js
import API from "../api/axiosInstance";

export async function registerApi(payload) {
  const res = await API.post("/api/auth/register", payload);
  return res.data;
}
