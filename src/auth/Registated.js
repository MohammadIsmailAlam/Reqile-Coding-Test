import React from 'react';
import { useLocation } from 'react-router-dom';

const Registered = () => {
  const location = useLocation();
  const { username } = location.state || '';

  return (
    <div>
      <h2>Registered</h2>
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default Registered;
