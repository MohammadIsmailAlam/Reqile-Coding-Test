import React from 'react';

const ProductDetailView = ({ product }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>
      <p className="mb-2">
        <span className="font-semibold">ID:</span> {product.id}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Name:</span> {product.name}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Price:</span> {product.price}
      </p>
    </div>
  );
};

export default ProductDetailView;
