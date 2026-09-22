import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>Discover the Perfect Plants for Your Home</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
