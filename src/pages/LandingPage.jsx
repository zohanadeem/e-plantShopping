import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
  <div className="background-image">
  <div className="landing-page">
    <div className="landing-content">
      <h1>Paradise Nursery</h1>

      <p>
        Welcome to Paradise Nursery, your home for beautiful indoor plants.
      </p>

      <Link to="/products" className="get-started-btn">
        Get Started
      </Link>
    </div>
  </div>
</div>
  );
}

export default LandingPage;
