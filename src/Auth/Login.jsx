import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      console.log("about to send id ", email, password);
      const response = await axios.post(
        `https://cv-e0zq.onrender.com/api/login`,
        {
          email,
          password,
        }
      );

      if (response.status === 201) {
        alert("Login Successfull");
        navigate("/");
      } else {
        alert("Wrong Credentials! Try Again!");

        console.error("Failed to login:", response.statusText);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <div>
      <div className=" flex justify-center items-center mx-auto h-screen ">
        <div className=" flex justify-center bg-[#ffffff2f] backdrop-filter p-4 rounded-2xl drop-shadow-xl shadow-lg backdrop-blur-lg  text-white items-center flex-col  ">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-100 text-start">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="block w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:border-[#9155FD]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-100 text-start"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="block w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:border-[#9155FD]"
            />
          </div>

          <div className="mb-4">
            <button
              className="w-full px-4 py-2 text-white bg-[#9155FD] rounded-md hover:bg-[#7E3AF2] focus:outline-none focus:bg-[#7E3AF2]"
              type="button"
              onClick={handleRegister}
            >
              Login
            </button>
          </div>

          <div className="flex justify-center items-center mt-4">
            <p className="mr-2 text-gray-100">Don't have an account?</p>
            <button
              className="text-[#9155FD] hover:underline focus:outline-none"
              type="button"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
