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
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeProductFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>Cart View</h2>
      <p>Count: {cartItems.length}</p>
      {renderCartItems()}
    </div>
  );
};

export default Cart;