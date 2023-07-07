import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Here you can perform your signup logic, e.g., send the data to an API
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="signup w-80 max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="mb-8 text-2xl font-bold text-center">Sign Up Page</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 font-semibold">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-semibold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 mt-4 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-red-500 text-sm">Error message goes here</p>
        <div className="mt-6 text-sm text-gray-700">
          Already have an account?{' '}
          <button
            onClick={handleLoginClick}
            className="font-semibold text-blue-500 border-none bg-transparent cursor-pointer transition-colors duration-300 hover:text-blue-600"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;