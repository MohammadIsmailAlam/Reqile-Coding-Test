import React from 'react';

const Cart = ({ cartItems, setCartItems }) => {
  // Function to remove a product from the cart
  const removeProductFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  // Render the cart items
  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return <p>Your cart is empty.</p>;
    }

    return (
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <span className="mr-2">{item.name}</span>
              <span className="text-gray-600">${item.price}</span>
            </div>
            <button
              onClick={() => removeProductFromCart(item.id)}
              className="text-red-500 hover:text-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cart View</h2>
      <p className="mb-2">Count: {cartItems.length}</p>
      {renderCartItems()}
    </div>
  );
};

export default Cart;