import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Array to hold items in the cart
  const [orderHistory, setOrderHistory] = useState([]); // Array to hold the order history

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      
      if (existingItem) {
        // If item already exists in the cart, increment the quantity
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // If item is new, add it to the cart with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (id, quantityChange) => {
    setCartItems((prevItems) => 
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + quantityChange, 1) } : item
      )
    );
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]); // Resets cart to an empty array
  };

  // Function to place an order
  const placeOrder = () => {
    if (cartItems.length === 0) {
      console.log('No items in cart to place an order.'); // Guard clause for empty cart
      return;
    }

    // Create a new order object
    const newOrder = {
      orderId: Date.now(), // Unique ID for the order using current timestamp
      date: new Date().toLocaleDateString(), // Capture the order date
      totalAmount: cartItems.reduce((total, item) => total + item.price * item.quantity, 0), // Calculate total cost of items
      items: [...cartItems], // Include all cart items in the order
    };

    // Log the new order for debugging purposes
    console.log('Order placed:', newOrder);

    // Add the new order to the order history
    setOrderHistory((prevHistory) => [...prevHistory, newOrder]);

    // Clear the cart after the order is placed
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        placeOrder,
        orderHistory, // Expose the order history in the context
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
