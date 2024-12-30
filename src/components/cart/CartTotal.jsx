import React from 'react';

const CartTotal = ({ formattedTotalPrice }) => (
  <div className="pay-cart-container">
    <h2>Total de la compra: (Sin Envio) <span id="span-price">{formattedTotalPrice}</span></h2>
  </div>
);

export default CartTotal;
