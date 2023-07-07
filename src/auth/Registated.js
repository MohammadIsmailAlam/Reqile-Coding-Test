import React from 'react';
import { useLocation, useNavigate,  } from 'react-router-dom';

const Registered = () => {
  const location = useLocation();
  const { username } = location.state || '';

  const navigate = useNavigate();

  const handleProductListView = () => {
    navigate('/productViewList');
  };

  const handleProductDetailView = () => {
    navigate('/productDetailView');
  };

  return (
    <div>
      <h2>Registered</h2>
      <p>Welcome, {username}!</p>
      <button onClick={handleProductListView}>Product List View</button>
      <button onClick={handleProductDetailView}>Product Detail View</button>
    </div>
  );
};

export default Registered;
