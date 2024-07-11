import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import useAuth from "../store/useAuth";

import "react-toastify/dist/ReactToastify.css";

function Login({ isMenuOpen, setIsMenuOpen }: MenuProps) {
  const { login, signup, data } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      await login({ username, password }).then(() => {
        setIsMenuOpen(!isMenuOpen);
      });
      toast("🦄 Login Successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/dashboard");
    } else {
      toast("🦄 Login UnSuccessful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      await signup({ username, password }).then(() => {
        setIsMenuOpen(!isMenuOpen);
      });
      toast("🦄 Sign UP Successful...Login!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      if (data) {
        navigate("/dashboard");
      }
    } else {
      toast("🦄 Signup UnSuccessful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginMode) {
      handleLogin(e);
    } else {
      handleSignup(e);
    }
  };

  return (
    <div className="absolute inset-0 flex justify-center items-center top-[15rem] md:top-[20rem]">
      <div className="bg-white p-6 rounded shadow-md w-11/12 max-w-lg">
        <h1 className="bg-slate-100 w-full flex justify-center items-center font-semibold p-2 rounded">
          Welcome to Login's Page
        </h1>
        <form onSubmit={handleSubmit} method="post" className="mt-4">
          <input
            type="text"
            placeholder="Username"
            className="block w-full p-3 my-2 border border-gray-300 rounded-md"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-3 my-2 border border-gray-300 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="flex flex-row">
            <button
              onClick={() => setIsLoginMode(true)}
              type="submit"
              className="block w-full p-3 mx-1 my-2 border border-gray-300 rounded-md bg-green-100 text-black"
            >
              Login
            </button>
            <button
              onClick={() => setIsLoginMode(false)}
              type="submit"
              className="block w-full p-3 mx-1 my-2 border border-gray-300 rounded-md bg-orange-100 text-black"
            >
              click to SignUp
            </button>
          </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}

export default Login;
