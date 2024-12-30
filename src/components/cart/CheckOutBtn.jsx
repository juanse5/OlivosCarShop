import React from 'react';

const CheckoutButton = ({ handleProceedToCheckout, showCheckoutApp }) => (
  <div className='container-pay-btn'>
    {!showCheckoutApp && (
      <button id="btn-continuar-compra" onClick={handleProceedToCheckout}>
        Continuar con Datos de Envio
      </button>
    )}
  </div>
);

export default CheckoutButton;
