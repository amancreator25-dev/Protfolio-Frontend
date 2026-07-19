// src/Components/Login/Login.jsx

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

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
        console.log("1. Form Submitted");

        const loginResponse = await loginApi(data);
        console.log("2. Login Success", loginResponse);

        const response = await getCurrentUserApi();
        console.log("3. Current User", response);

        const userData = response.data || response;

        dispatch(login({ userData }));
        console.log("4. Redux Updated");

        navigate("/");
        console.log("5. Navigation Done");

    } catch (error) {
        console.error("ERROR:", error);

        alert(
            error?.response?.data?.message ||
            error.message ||
            "Login failed!"
        );
    }
};

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-6">
            <div className="w-full max-w-md bg-[#1e293b] rounded-3xl shadow-2xl p-10 border border-slate-700">

                <h1 className="text-4xl font-bold text-white text-center mb-3">
                    Welcome Back
                </h1>

                <p className="text-slate-400 text-center mb-8">
                    Login to continue to your portfolio dashboard
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >
                    <div>
                        <input
                            type="text"
                            placeholder="Email or Username"
                            className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-all"
                            {...register("login", {
                                required: "Email or Username is required"
                            })}
                        />

                        {errors.login && (
                            <p className="text-red-400 text-sm mt-2">
                                {errors.login.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-all"
                            {...register("password", {
                                required: "Password is required"
                            })}
                        />

                        {errors.password && (
                            <p className="text-red-400 text-sm mt-2">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all duration-300 disabled:opacity-60"
                    >
                        {isSubmitting
                            ? "Logging in..."
                            : "Login"}
                    </button>
                </form>

                <p className="text-center text-slate-400 mt-6">
                    Don't have an account?{" "}
                    <NavLink
                        to="/User/Register"
                        className="text-purple-400 hover:text-purple-300"
                    >
                        Register
                    </NavLink>
                </p>
            </div>
        </div>
    );
}

export default Login;