// CartIconOverlay.jsx
import React from 'react';
import { useCart } from '../../context/CartContext.js';
import { FontAwesomeIcon, faShoppingCart } from '../icons/Icons.js';
import '../../styles/cart/Cart.css'

const CartIcon = () => {
  const { toggleCartVisibility, cartItems, isCartVisible } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div 
      className={`cart-icon-btn ${isCartVisible ? 'open' : ''}`} 
      onClick={toggleCartVisibility}>
        <FontAwesomeIcon 
          icon={faShoppingCart} 
          className='cart-icon'/>
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </div>
  );
};

export default CartIcon;

