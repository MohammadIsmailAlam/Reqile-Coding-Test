import React, { useState } from "react";
import ProductDetailView from "./ProductDetailView";
import Cart from "../cartView/Cart";

const ProductListView = () => {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
  ];

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleViewDetails = (productId) => {
    setSelectedProductId(productId);
  };

  const addToCart = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    setCartItems([...cartItems, selectedProduct]);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
      <header>
        <nav style={{ background: "lightgray", padding: "10px" }}>
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              justifyContent: "space-between",
            }}
          >
            <li onClick={toggleCartVisibility}>Cart ({cartItems.length})</li>
          </ul>
        </nav>
      </header>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleViewDetails(product.id)}>
                  View Details
                </button>
                <button onClick={() => addToCart(product.id)}>
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProductId && (
        <ProductDetailView
          product={products.find((product) => product.id === selectedProductId)}
        />
      )}
      {isCartVisible && (
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </div>
  );
};

export default ProductListView;
