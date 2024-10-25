import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isAuthenticated, userEmail, onLogout }) {
  return (
    <nav>
      <div className="logo">
        <span>Opal</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Property Listings</Link>
        </li>
        <li>
          <Link to="/create-listing">Create Listing</Link>
        </li>
        <li>
          <Link to="/agents">Agent Directory</Link>
        </li>
        {isAuthenticated && (
          <li>
            <Link to="/private">Private</Link>
          </li>
        )}
      </ul>
      <div className="user-profile">
        {isAuthenticated ? (
          <>
            <span>Welcome, {userEmail}</span>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
