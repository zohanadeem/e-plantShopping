import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
  const cartItems = useSelector(state => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">🌿 Paradise Nursery</Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Plants</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
      <Link to="/cart" className="cart-icon">
        🛒
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </Link>
    </nav>
  );
}

export default Navbar;
