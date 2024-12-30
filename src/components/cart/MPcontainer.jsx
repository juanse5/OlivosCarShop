import React from 'react';
import PayButton from '../../mp/PayBtn.jsx';

const MercadoPagoContainer = ({ showMercadoPago, cartItems }) => (
  <div className='container-mercado-pago' style={{ display: showMercadoPago ? 'flex' : 'none' }}>
    <img src="images/mp.webp" alt="mpPago" className='mp-image' />
    <PayButton cartItems={cartItems} />
    <img src="images/mp.webp" alt="mpPago" className='mp-image' />
  </div>
);

export default MercadoPagoContainer;
