// src/Components/Register/Register.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// API ONLY (no redux here)
import { registerApi } from "../../RequiredApi/AuthRegister";

function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await registerApi(data);   // backend creates user
      navigate("/User/Login");   // go to login page
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
        <input placeholder="Full name" {...register("name", { required: true })} />
        <input placeholder="Email" {...register("email", { required: true })} />
        <input
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
