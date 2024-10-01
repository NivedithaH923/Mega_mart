import React, { useContext, useEffect } from 'react';
import './OrderPage.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext'; // Import context

const OrderPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { placeOrder } = useContext(CartContext); // Access placeOrder function

  // Check if state or orderDetails are missing
  useEffect(() => {
    if (!state || !state.orderDetails) {
      navigate('/');
    } else {
      // Call placeOrder when orderDetails exist
      placeOrder(state.orderDetails);
    }
  }, [state, navigate, placeOrder]);

  // Render loading message if there's no orderDetails
  if (!state || !state.orderDetails) {
    return <p>Loading order details, please wait...</p>; // Optional loading message
  }

  const { orderId, cartItems, date, totalAmount } = state.orderDetails;

  return (
    <div className="orders-page-container">
      <h1>Order Confirmation</h1>
      <h3>Order ID: {orderId}</h3>
      <p>Date: {date}</p>
      <div>
        <h4>Items Ordered:</h4>
        {cartItems.map((item) => (
          <div key={item.id} className="order-item">
            <p>{item.name} - {item.quantity} x ${item.price}</p>
          </div>
        ))}
        <h4>Total Amount: ${totalAmount}</h4>
      </div>
      <button className="back-button" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default OrderPage;
