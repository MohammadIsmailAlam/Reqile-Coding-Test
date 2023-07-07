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
    <div id="signup" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '81vh' }}>
      <div className="signup" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', maxWidth: '500px', backgroundColor: '#fff', padding: '30px', borderRadius: '5px', boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)' }}>
        <h2 style={{ marginBottom: '2rem', color: '#333', fontSize: '1.8rem' }}>Sign Up Page</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '12px', fontSize: '1rem', color: '#333' }}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '12px', fontSize: '1rem', color: '#333' }}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '12px', fontSize: '1rem', color: '#333' }}
            />
          </div>
          <button type="submit" style={{ backgroundColor: '#00bcd4', color: '#fff', border: 'none', borderRadius: '10px', padding: '10px 20px', marginTop: '20px', fontSize: '1rem', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
            Sign Up
          </button>
        </form>
        <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}>Error message goes here</p>
        <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#333' }}>
          Already have an account? <button onClick={handleLoginClick} style={{ color: '#00bcd4', border: 'none', backgroundColor: 'transparent', fontWeight: 'bold', cursor: 'pointer', transition: 'color 0.3s ease' }}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;