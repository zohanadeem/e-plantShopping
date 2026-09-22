import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../redux/CartSlice';

function CartSlice() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const handleIncreaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty. Start shopping!</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>

                    <div className="quantity-control">
                      <button
                        className="quantity-btn"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        −
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <p className="item-total">
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      className="delete-btn"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-summary-row">
                <span className="cart-summary-label">Subtotal:</span>
                <span className="cart-summary-amount">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="cart-summary-row">
                <span className="cart-summary-label">Total Items:</span>
                <span className="cart-summary-amount">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
              <div className="cart-summary-row">
                <span className="cart-summary-label">Total Price:</span>
                <span className="total-price">${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="button-container">
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button className="checkout-btn">
                Checkout (Coming Soon)
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartSlice;
