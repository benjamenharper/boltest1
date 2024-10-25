import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import PropertyListings from './PropertyListings';
import CreateListing from './CreateListing';
import Login from './Login';
import Register from './Register';
import Private from './Private';
import PropertyDetail from './PropertyDetail';
import AgentDirectory from './AgentDirectory';
import AgentDetail from './AgentDetail';
import './styles.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email) => {
    console.log(`Logged in as: ${email}`);
    setUserEmail(email);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUserEmail('');
    setIsAuthenticated(false);
  };

  const handleRegister = (email, password) => {
    console.log(`Registered with Email: ${email}, Password: ${password}`);
  };

  return (
    <BrowserRouter>
      <div className="layout">
        <Navbar isAuthenticated={isAuthenticated} userEmail={userEmail} onLogout={handleLogout} />
        <div className="main-content">
          <LeftMenu />
          <div className="center-content">
            <Routes>
              <Route path="/" element={<PropertyListings />} />
              <Route path="/create-listing" element={<CreateListing />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register onRegister={handleRegister} />} />
              <Route path="/private" element={<Private isAuthenticated={isAuthenticated} />} />
              <Route path="/property/:id" element={<PropertyDetail />} />
              <Route path="/agents" element={<AgentDirectory />} />
              <Route path="/agent/:id" element={<AgentDetail />} />
            </Routes>
          </div>
          <RightMenu />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
