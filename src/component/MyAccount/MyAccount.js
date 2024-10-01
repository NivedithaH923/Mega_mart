import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './MyAccount.css';

const MyAccount = () => {
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setProfileImage(imageUrl);
    }
  };

  const handleSave = () => {
    // Logic for saving the account details can be added here

    // Navigate back to the main page after saving
    navigate('/'); // Redirect to the main app page
  };

  return (
    <div className="my-account-container">
      <h2>My Account</h2>

      <div className="profile-picture-section">
        <div className="profile-picture">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="profile-image" />
          ) : (
            <div className="placeholder">Upload Image</div>
          )}
          <input
            type="file"
            className="file-input"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
      </div>

      <div className="form-group">
        <label>Contact Number:</label>
        <input type="text" placeholder="Enter your contact number" />
      </div>

      <div className="form-group">
        <label>Address:</label>
        <input type="address" placeholder="Enter your Address" />
      </div>

      <button className="save-button" onClick={handleSave}>Save</button>
    </div>
  );
};

export default MyAccount;
