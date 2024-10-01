import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Stylish Dress',
      price: 49.99,
      image: '/images/product1.jpg',
    },
    {
      id: 2,
      name: 'Casual T-Shirt',
      price: 19.99,
      image: '/images/product2.jpg',
    },
    {
      id: 3,
      name: 'Denim Jacket',
      price: 79.99,
      image: '/images/product3.jpg',
    },
    // Add more products here
  ];

  // State for filtering the products by price range
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle filtering products based on price range
  const applyFilter = () => {
    const filtered = products.filter((product) => {
      return (
        (minPrice === '' || product.price >= parseFloat(minPrice)) &&
        (maxPrice === '' || product.price <= parseFloat(maxPrice))
      );
    });
    setFilteredProducts(filtered);
  };

  // Function to handle Buy Now button
  const handleBuyNow = (product) => {
    addToCart(product); // Add the product to the cart
    navigate('/cart'); // Redirect to the cart page
  };

  return (
    <div className="product-page-container">
      <h2 style={{ textAlign: 'center' }}>Category Name</h2>

      {/* Filter section */}
      <div className="filter-container">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button className="filter-button" onClick={applyFilter}>
          Apply Filter
        </button>
      </div>

      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <button className="add-to-cart" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
                <button className="buy-now" onClick={() => handleBuyNow(product)}>
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this price range.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
