// src/Components/Register/Register.jsx

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import { registerApi } from "../../RequiredApi/AuthRegister";

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await registerApi(data);

            navigate("/User/Login");
        } catch (err) {
            console.error(err);

            alert(
                err.response?.data?.message ||
                "Registration failed"
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-6">
            <div className="w-full max-w-md bg-[#1e293b] rounded-3xl shadow-2xl p-10 border border-slate-700">

                <h1 className="text-4xl font-bold text-white text-center mb-3">
                    Create Account
                </h1>

                <p className="text-slate-400 text-center mb-8">
                    Join the portfolio community
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                            {...register("fullname", {
                                required: "Full Name is required"
                            })}
                        />

                        {errors.fullname && (
                            <p className="text-red-400 text-sm mt-2">
                                {errors.fullname.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                            {...register("username", {
                                required: "Username is required"
                            })}
                        />

                        {errors.username && (
                            <p className="text-red-400 text-sm mt-2">
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                            {...register("email", {
                                required: "Email is required"
                            })}
                        />

                        {errors.email && (
                            <p className="text-red-400 text-sm mt-2">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
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
                            ? "Creating Account..."
                            : "Register"}
                    </button>
                </form>

                <p className="text-center text-slate-400 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/User/Login"
                        className="text-purple-400 hover:text-purple-300"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;