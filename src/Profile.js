import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ user, onLogout }) => {
  const handleLogout = () => {
    // Clear user from local storage
    onLogout();
  };

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      {/* Add your profile information here */}
      <button className='logout' onClick={handleLogout}>Logout</button>
      
    </div>
  );
};

export default Profile;
