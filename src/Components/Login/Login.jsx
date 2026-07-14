// src/Components/Login/Login.jsx

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../authSlice/authSlice";
import { loginApi } from "../../RequiredApi/AuthLogin";
import { getCurrentUserApi } from "../../RequiredApi/AuthGetCU";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            // Login and set cookies
            await loginApi(data);

            // Fetch current user
            const response = await getCurrentUserApi();

            // Depending on your apiResponse structure
            const userData = response.data || response;

            // Store in Redux
            dispatch(
                login({
                    userData
                })
            );

            // Redirect to home page
            navigate("/");
        } catch (error) {
            console.error(error);

            alert(
                error?.response?.data?.message ||
                "Login failed!"
            );
        }
    };

    return (
        <div className="auth-form-container">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="auth-form"
            >
                <h2>Login</h2>

                <input
                    type="text"
                    placeholder="Email or Username"
                    {...register("email", {
                        required: "Email is required"
                    })}
                />

                {errors.email && (
                    <p>{errors.email.message}</p>
                )}

                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password is required"
                    })}
                />

                {errors.password && (
                    <p>{errors.password.message}</p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting
                        ? "Logging in..."
                        : "Login"}
                </button>
            </form>
        </div>
    );
}

export default Login;