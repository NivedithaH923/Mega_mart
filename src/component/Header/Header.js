import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../CartContext/CartContext'; // Import CartContext

const Header = () => {
  const { cartItems } = useContext(CartContext); // Access cartItems from context

  // Calculate total number of items in the cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="logo">MegaMart</Link> {/* Wrap logo in Link for home redirection */}
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search for products..." className="search-input" />
      </div>
      <div className="right-section">
        <div className="icon-with-label">
          <Link to="/cart" className="cart-link">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            {cartItemCount > 0 && ( // Only display if there's at least 1 item in the cart
              <span className="cart-count">{cartItemCount}</span>
            )}
            <span className="label">Cart</span>
          </Link>
        </div>
        <div className="icon-with-label">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span className="label">Profile</span>
          <div className="dropdown-menu">
            <Link to="/my-account">My Account</Link>
            <Link to="/order-history">My Orders</Link> {/* Change link to Order History */}
            <a href="#logout">Logout</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
