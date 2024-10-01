import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Categories.css';

const Categories = () => {
  const categories = [
    { name: 'Ladies Wear', image: '/images/ladieswear.jpg' },
    { name: 'Mens Wear', image: '/images/Menswear.jpg' },
    { name: 'Home Appliances', image: '/images/Homeappliances.jpg' },
    { name: 'Kids Wear', image: '/images/kidswear.jpg' },
    { name: 'Shoes', image: '/images/shoes.jpg' },
    { name: 'Accessories', image: '/images/accessories.jpg' },
    { name: 'Groceries', image: '/images/grocery.jpg' },
    { name: 'Vegetables', image: '/images/vegetable.jpg' },
    { name: 'Cosmetics', image: '/images/cosmetics.jpg' },
    { name: 'Mobiles', image: '/images/mobile.jpg' },
    { name: 'Kitchen Products', image: '/images/kitchen.jpg' },
    { name: 'Jewelleries', image: '/images/jewellery.jpg' },
  ];

  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <Link to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="category-box">
          <img src={category.image} alt={category.name} className="category-img" />
          <div className="category-name">{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
