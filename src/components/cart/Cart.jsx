import React from 'react';
import CartHeader from './CartTitle.jsx';
import CartList from './CartList.jsx';
import CartTotal from './CartTotal.jsx';
import CheckoutButton from './CheckOutBtn.jsx';
import MercadoPagoContainer from './MPcontainer.jsx';
import CheckOutApp from '../check-out/CheckOutApp.js';

const Cart = ({
  cartItems,
  cartRef,
  isCartVisible,
  formattedTotalPrice,
  removeCartItem,
  handleProceedToCheckout,
  showCheckoutApp,
  setShowCheckoutApp, // Añadir esta prop
  showMercadoPago,
  checkoutAppRef,
  getCartDetails, // Añadir la función para obtener los detalles del carrito
  setIsCartVisible // Prop para manejar el cierre del carrito desde el overlay
}) => (
  <>
    {/* Overlay semitransparente */}
    <div
      className={`modal-overlay ${isCartVisible ? 'visible' : ''}`}
      onClick={() => setIsCartVisible(false)} // Cierra el carrito al hacer clic fuera
    ></div>

    {/* Contenedor del carrito */}
    <div
      className={`cart-overlay ${isCartVisible ? 'open' : 'closed'} ${showCheckoutApp ? 'full-width' : ''}`}
    >
      <div className="cart-container" ref={cartRef}>
        <CartHeader />
        <CartList cartItems={cartItems} removeCartItem={removeCartItem} />
        <CartTotal formattedTotalPrice={formattedTotalPrice} />
      </div>

      {/* Aplicación de Checkout */}
      {showCheckoutApp && (
        <div className="container-checkout-app" ref={checkoutAppRef}>
          <CheckOutApp
            onConfirm={() => setShowCheckoutApp(false)}
            cartItems={cartItems}
          />
        </div>
      )}

      <CheckoutButton
        handleProceedToCheckout={handleProceedToCheckout}
        showCheckoutApp={showCheckoutApp}
      />
      <MercadoPagoContainer
        showMercadoPago={showMercadoPago}
        cartItems={getCartDetails()}
      />
    </div>
  </>
);

export default Cart;
