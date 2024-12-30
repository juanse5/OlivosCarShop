import React, { useRef } from 'react';
import CheckOutOptions from './CheckOutOption.jsx';
import CheckInfo from './CheckOutInfo.jsx';
import '../../styles/check-out/CheckOutApp.css';
import '../../styles/cart/FullWidthCart.css';

const CheckOutApp = ({ onConfirm }) => {
  const endRef = useRef(null); // Referencia al final del componente

  const handleScrollToEnd = () => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="check-out-app">
      <CheckOutOptions onConfirm={onConfirm} />
      <button onClick={handleScrollToEnd}>Aceptar</button>
      <CheckInfo />
      <div ref={endRef} />
    </div>
  );
};

export default CheckOutApp;
