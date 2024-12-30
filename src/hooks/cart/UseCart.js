import { useEffect, useRef } from 'react';
import { useCart } from '../../context/CartContext.js';

const useCartLogic = () => {
  const {
    cartItems,
    isCartVisible,
    toggleCartVisibility,
    removeCartItem,
    updateCartItem,
  } = useCart();
  const cartRef = useRef(null);
  const checkoutRef = useRef(null);
  const cartClass = cartItems.length <= 3 ? 'few-items' : 'many-items';

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formattedTotalPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalPrice);

  const handleContinue = () => {
    setTimeout(() => {
      checkoutRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleClickOutside = (event) => {
    if (
      cartRef.current &&
      !cartRef.current.contains(event.target) &&
      !event.target.closest('.cart-overlay')
    ) {
      toggleCartVisibility();
    }
  };

  useEffect(() => {
    if (isCartVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartVisible]);

  return {
    cartItems,
    cartClass,
    cartRef,
    isCartVisible,
    formattedTotalPrice,
    handleContinue,
    checkoutRef,
    removeCartItem,
    updateCartItem,
  };
};

export default useCartLogic;
