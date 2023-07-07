import React from 'react';

const ProductDetailView = ({ product }) => {
  return (
    <div>
      <h2>Product Details</h2>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetailView;
