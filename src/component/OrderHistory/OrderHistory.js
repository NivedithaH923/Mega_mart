import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext'; // Import your CartContext

const OrderHistory = () => {
  const { orderHistory } = useContext(CartContext); // Assuming you have order history in your context

  return (
    <div>
      <h1>Order History</h1>
      {Array.isArray(orderHistory) && orderHistory.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orderHistory.map((order, index) => (
            <li key={index}>
              <h3>Order ID: {order.orderId}</h3>
              <p>Date: {order.date}</p>
              <p>Total Amount: ${order.totalAmount}</p>
              <h4>Items:</h4>
              <ul>
                {order.cartItems.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.quantity} x ${item.price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
