import React from 'react';
import './Sellers.css'; // Add necessary CSS styles similar to Categories
import { Link } from 'react-router-dom';

const Sellers = () => {
  const sellers = [
    { name: 'Trends', image: '/images/trends.jpg' },
    { name: 'Reliance', image: '/images/reliance.jpg' },
    { name: 'Prestige', image: '/images/prestige.jpg' },
    { name: 'Sonata', image: '/images/sonata.jpg' },
    { name: 'Sparx', image: '/images/sparx.jpg' },
    
    { name: 'Zudio', image: '/images/zudio.jpg' },
  ];

  return (
    <div className="sellers-container">
      {sellers.map((seller, index) => (
        <Link to={`/seller/${seller.name.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="seller-box">
          <img src={seller.image} alt={seller.name} className="seller-img" />
          <div className="seller-name">{seller.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Sellers;
