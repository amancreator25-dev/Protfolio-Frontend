// src/RequiredApi/AuthLogin.js
import API from "../api/axiosInstance";

// login: accepts { email, username?, password }
export async function loginApi(payload) {
  const res = await API.post("/api/auth/login", payload);
  return res.data; // expected { user: {...} } or similar
}
