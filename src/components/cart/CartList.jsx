import React from 'react';
import CartItem from './CartItem.jsx';

const CartList = ({ cartItems, removeCartItem }) => (
  <ul className="ul-cart">
    {cartItems.map((item, index) => (
      <CartItem key={index} item={item} index={index} removeCartItem={removeCartItem} />
    ))}
  </ul>
);

export default CartList;
