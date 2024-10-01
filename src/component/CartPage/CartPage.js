import React, { useContext } from 'react';
import './CartPage.css';
import { CartContext } from '../CartContext/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleOrderNow = () => {
    // Define orderDetails based on current cart contents
    const orderDetails = {
      orderId: Math.floor(Math.random() * 10000),  // Random order ID
      cartItems: cartItems,
      date: new Date().toLocaleDateString(),
      totalAmount: calculateTotalPrice(),
    };

    // Log orderDetails to check if data is passed correctly
    console.log(orderDetails);

    // Proceed with order placement and redirect to order page
    clearCart();
    navigate('/order', { state: { orderDetails } });
  };

  return (
    <div className="cart-page-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    {item.quantity}
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Price: ${calculateTotalPrice()}</h3>
          <button className="order-button" onClick={handleOrderNow}>Order Now</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
