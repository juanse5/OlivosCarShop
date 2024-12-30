import React from 'react';

const CartItem = ({ item, index, removeCartItem }) => (
  <li key={index} className={`li-cart`}>
    <div className="title-img-cart-item">
      <p id="title-mobile"><strong>{item.title}</strong></p>
      <img src={item.image} alt={item.title} className="cart-image" />
    </div>
    <div className="li-container-content">
      <div className="li-content-cart">
        <p id="title-pc"><strong>{item.title}</strong></p>
        <p>Modelo:<br />{item.model}</p>
        <p>Serie:<br />{item.serie}</p>
        <p>Voltaje:<br />{item.voltage} V</p>
      </div>
      <div className="li-content-cart">
        <p>Precio unitario: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <button onClick={() => removeCartItem(index)} className="remove-item-btn">
          🗑
        </button>
      </div>
    </div>
  </li>
);

export default CartItem;
