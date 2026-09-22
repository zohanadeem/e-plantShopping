import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../redux/CartSlice';

function CartItem() {
  const dispatch = useDispatch();

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total number of items dynamically
  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Calculate total cart amount dynamically
  const totalCartAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Increase quantity
  const handleIncreaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);

    if (item) {
      dispatch(
        updateQuantity({
          id: id,
          quantity: item.quantity + 1,
        })
      );
    }
  };

  // Decrease quantity
  const handleDecreaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);

    if (item && item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  // Remove item
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">
      <div className="cart-container">

        <h1 className="cart-title">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="cart-empty">

            <h2>Your cart is empty</h2>

            <p>
              Start shopping and add some beautiful plants!
            </p>

            <Link
              to="/products"
              className="continue-shopping-btn"
            >
              Continue Shopping
            </Link>

          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="cart-items">

              {cartItems.map((item) => {

                // Calculate total cost for this individual plant
                const itemTotal = item.price * item.quantity;

                return (
                  <div
                    key={item.id}
                    className="cart-item"
                  >

                    {/* Plant Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />

                    <div className="cart-item-details">

                      {/* Plant Name */}
                      <h3 className="cart-item-name">
                        {item.name}
                      </h3>

                      {/* Unit Price */}
                      <p className="cart-item-price">
                        Unit Price: ${item.price.toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="quantity-control">

                        <button
                          className="quantity-btn"
                          onClick={() =>
                            handleDecreaseQuantity(item.id)
                          }
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>

                        <span className="quantity-display">
                          {item.quantity}
                        </span>

                        <button
                          className="quantity-btn"
                          onClick={() =>
                            handleIncreaseQuantity(item.id)
                          }
                        >
                          +
                        </button>

                      </div>

                      {/* Individual Plant Total */}
                      <p className="item-total">
                        Item Total: ${itemTotal.toFixed(2)}
                      </p>

                      {/* Delete Button */}
                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleRemoveItem(item.id)
                        }
                      >
                        Delete
                      </button>

                    </div>
                  </div>
                );
              })}

            </div>

            {/* Cart Summary */}
            <div className="cart-summary">

              <h2>Cart Summary</h2>

              <div className="cart-summary-row">

                <span className="cart-summary-label">
                  Total Items:
                </span>

                <span className="cart-summary-amount">
                  {totalItems}
                </span>

              </div>

              <div className="cart-summary-row">

                <span className="cart-summary-label">
                  Total Cart Amount:
                </span>

                <span className="cart-summary-amount">
                  ${totalCartAmount.toFixed(2)}
                </span>

              </div>

            </div>

            {/* Cart Buttons */}
            <div className="button-container">

              {/* Continue Shopping */}
              <Link
                to="/products"
                className="continue-shopping-btn"
              >
                Continue Shopping
              </Link>

              {/* Checkout */}
              <button
                className="checkout-btn"
                onClick={() =>
                  alert('Checkout Coming Soon!')
                }
              >
                Checkout (Coming Soon)
              </button>

            </div>

          </>
        )}

      </div>
    </div>
  );
}

export default CartItem;