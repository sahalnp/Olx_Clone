import React, { useCallback, useState } from "react";
import { handleLogin } from "../utils/auth.js";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/Context.jsx";

export const Login = () => {
    const { setUser } = useUser(); 
    const navigate = useNavigate();
    const Check = async (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        const password = e.target.password.value;

        const result = await handleLogin({ email, password });
        alert(result.message);

        if (result.success) {
            setUser({
                auth: "true",
                name: localStorage.getItem("name"),
                email,
                password,
            });
            navigate("/");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={Check}
                className="bg-white p-6 rounded shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-semibold text-center mb-4">
                    Login
                </h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full mb-3 px-4 py-2 border rounded"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full mb-4 px-4 py-2 border rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
                <div className="mt-4 text-center">
                    <p>
                        Don't have an account?{" "}
                        <span
                            onClick={() => navigate("/signup")}
                            className="text-blue-500 cursor-pointer"
                        >
                            Signup
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};
