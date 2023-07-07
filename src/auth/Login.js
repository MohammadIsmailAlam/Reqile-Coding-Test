import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Here you can perform your login logic, e.g., send the data to an API
    console.log("Username:", username);
    console.log("Password:", password);
    // Reset the form
    setUsername("");
    setPassword("");

    // Navigate to Registered component
    navigate("/registered", { state: { username } });
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 bg-white rounded-lg p-6 shadow">
        <h2 className="text-3xl mb-6">Login Page</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg py-2 transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="text-sm mt-4">
          Don't have an account?{" "}
          <button
            onClick={handleSignUpClick}
            className="text-blue-500 border-none bg-transparent font-bold cursor-pointer transition-colors duration-300 ease-in-out hover:text-blue-600 focus:outline-none"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;