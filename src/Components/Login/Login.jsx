// src/Components/Login/Login.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../authSlice/authSlice";
import { loginApi } from "../../RequiredApi/AuthLogin";
import { getCurrentUser } from "../../RequiredApi/AuthGetCU";

function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // 1️⃣ Backend login (sets cookie)
      await loginApi(data);

      // 2️⃣ Fetch logged-in user from cookie
      const user = await getCurrentUser();

      // 3️⃣ Store user in Redux
      dispatch(login({ userData: user }));

      // 4️⃣ Redirect
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
        <input
          placeholder="Email or Username"
          {...register("email", { required: true })}
        />
        <input
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
