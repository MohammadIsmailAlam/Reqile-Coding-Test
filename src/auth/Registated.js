import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Registered = () => {
  const location = useLocation();
  const { username } = location.state || '';

  const navigate = useNavigate();

  const handleProductListView = () => {
    navigate('/productViewList');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Registered</h2>
      <p className="mb-2">Welcome, {username}!</p>
      <button
        onClick={handleProductListView}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Product List View
      </button>
    </div>
  );
};

export default Registered;
