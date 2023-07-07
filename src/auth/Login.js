import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Here you can perform your login logic, e.g., send the data to an API
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setPassword('');

    // Navigate to Registered component
    navigate('/registered', { state: { username } });
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div id="login" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '81vh' }}>
      <div className="login" style={{ width: '400px', backgroundColor: '#fff', borderRadius: '5px', padding: '30px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>Login Page</h2>
        <form onSubmit={handleFormSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#fff', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', fontSize: '16px' }}
              placeholder="Username"
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#fff', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', fontSize: '16px' }}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-btn" style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '10px', backgroundColor: '#f8f9fa', color: '#000000', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
            Login
          </button>
        </form>
        <p className="footer" style={{ fontSize: '14px', margin: '1em' }}>
          Don't have an account? <button onClick={handleSignUpClick} style={{ color: '#00bcd4', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', transition: 'all 0.3s ease' }}>Sign Up</button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
