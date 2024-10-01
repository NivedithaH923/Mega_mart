import React, { useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import Categories from './component/Categories/Categories';
import Sellers from './component/Sellers/Sellers'; // Sellers component
import Footer from './component/Footer/Footer';
import MyAccount from './component/MyAccount/MyAccount';
import CartPage from './component/CartPage/CartPage';
import OrderPage from './component/OrderPage/OrderPage';
import OrderHistory from './component/OrderHistory/OrderHistory';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './component/ProductPage/ProductPage';
import { CartProvider } from './component/CartContext/CartContext'; // Ensure correct CartContextProvider import

function App() {
  const [activeTab, setActiveTab] = useState('categories'); // Track which tab is active

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  {/* Row with light background for the tabs */}
                  <div className="tab-row">
                    <div className="tab-header center-text">
                      <h1
                        className={activeTab === 'categories' ? 'active' : ''}
                        onClick={() => setActiveTab('categories')}
                      >
                        Categories
                      </h1>
                      <h1
                        className={activeTab === 'sellers' ? 'active' : ''}
                        onClick={() => setActiveTab('sellers')}
                      >
                        Sellers
                      </h1>
                    </div>
                  </div>

                  {/* Conditionally render based on the active tab */}
                  {activeTab === 'categories' && <Categories />}
                  {activeTab === 'sellers' && <Sellers />}

                  <img src="images/megasale.jpg" alt="MegaSale" className="mega-sale" />
                  <Footer />
                </>
              }
            />
            <Route path="/category/:categoryName" element={<ProductPage />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/cart" element={<CartPage />} /> {/* Route for CartPage */}
            <Route path="/order" element={<OrderPage />} /> {/* Route for OrderPage */}
            <Route path="/order-history" element={<OrderHistory />} /> {/* Route for OrderHistory */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
