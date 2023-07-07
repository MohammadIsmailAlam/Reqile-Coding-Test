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
        <nav className="bg-lightgray p-4">
          <ul className="flex justify-between">
            <li onClick={toggleCartVisibility}>Cart ({cartItems.length})</li>
          </ul>
        </nav>
      </header>
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-4 py-2">{product.id}</td>
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">{product.price}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleViewDetails(product.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  View Details
                </button>
                <button
                  onClick={() => addToCart(product.id)}
                  className="bg-green-500 hover:bg-green-700 text-red font-bold py-2 px-4 rounded"
                >
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
