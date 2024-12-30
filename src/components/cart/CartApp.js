import React, { useState, useRef } from 'react';
import useCartLogic from '../../hooks/cart/UseCart.js';
import Cart from './Cart.jsx';
import '../../styles/cart/Cart.css';
import '../../styles/cart/CartListProduct.css';
import '../../styles/cart/FullWidthCart.css';

const CartApp = () => {
  const {
    cartItems,
    cartClass,
    cartRef,
    isCartVisible,
    formattedTotalPrice,
    removeCartItem,
  } = useCartLogic();

  const [showCheckoutApp, setShowCheckoutApp] = useState(false); // Estado para mostrar/ocultar CheckOutApp
  const [showMercadoPago, setShowMercadoPago] = useState(false); // Estado para mostrar/ocultar Mercado Pago
  const checkoutAppRef = useRef(null); // Referencia al contenedor de CheckOutApp

  const handleProceedToCheckout = () => {
    setShowCheckoutApp(true);
    setShowMercadoPago(true);
    setTimeout(() => {
      if (checkoutAppRef.current) {
        checkoutAppRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Pequeña demora para asegurar que el componente esté montado
  };

  const getCartDetails = () => {
    return cartItems.map(item => ({
      title: item.title,
      model: item.model,
      serie: item.serie,
      unit_price: parseFloat(item.price), // Asegúrate de que el precio es un número
      quantity: item.quantity
    }));
  };

  return (
    <Cart
      cartItems={cartItems}
      cartClass={cartClass}
      cartRef={cartRef}
      isCartVisible={isCartVisible}
      formattedTotalPrice={formattedTotalPrice}
      removeCartItem={removeCartItem}
      handleProceedToCheckout={handleProceedToCheckout}
      showCheckoutApp={showCheckoutApp}
      setShowCheckoutApp={setShowCheckoutApp} // Pasar el setter como prop
      showMercadoPago={showMercadoPago}
      checkoutAppRef={checkoutAppRef}
      getCartDetails={getCartDetails} // Pasar la función para obtener los detalles del carrito
    />
  );
};

export default CartApp;
