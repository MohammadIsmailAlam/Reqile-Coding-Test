import React from 'react';

const ProductDetailView = () => {
  // Hard-coded product data
  const product = {
    id: 1,
    name: 'Product 1',
    price: 10,
    description: 'This is product 1.',
    imageUrl: 'https://example.com/product1.jpg',
  };

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <img src={product.imageUrl} alt={product.name} style={{ width: '200px', height: '200px' }} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailView;
