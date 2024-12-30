import React, { useRef } from 'react';
import useCheckoutLogic from '../../hooks/checkOut/UseCheckOption.js'; 
import CheckoutForm from './CheckOutForm.jsx'; 
import '../../styles/check-out/CheckOutOption.css';

const CheckoutOptions = ({ onConfirm }) => {
  const {
    deliveryOption,
    paymentOption,
    showAddressForm,
    handleDeliveryChange,

  } = useCheckoutLogic();

  const formRef = useRef(null); // Añadir ref para el formulario

  const handleConfirm = (formData) => {
    onConfirm({ deliveryOption, paymentOption, ...formData });
  };

  // Hacer scroll al formulario cuando se muestra
  React.useEffect(() => {
    if (showAddressForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showAddressForm]);

  return (
    <div className='container-pre-compra'>
        
        <div className='pre-compra-content'>
            <div className='container-opciones-envio'>
                <h3>Seleccione una opción de envío:</h3>
                <label>
                    <input
                      type="radio"
                      value="home"
                      checked={deliveryOption === 'home'}
                      onChange={handleDeliveryChange}
                    />
                    Envío Por Correo Argentino a Domicilio o Terminal (con cargo)
                </label>
                <label>
                    <input
                      type="radio"
                      value="terminal"
                      checked={deliveryOption === 'terminal'}
                      onChange={handleDeliveryChange}
                    />
                    Envío moto (con cargo)
                </label>
                <label>
                    <input
                      type="radio"
                      value="pickup"
                      checked={deliveryOption === 'pickup'}
                      onChange={handleDeliveryChange}
                    />
                    Retiro en Persona 
                </label>
            </div>
      
          {showAddressForm && (
            <div className='container-formulario-envio' ref={formRef}>
                <CheckoutForm onSubmit={handleConfirm} /> 
            </div>
          )}  
        </div>
      
    </div>
  );
};

export default CheckoutOptions;
