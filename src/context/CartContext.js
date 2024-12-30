// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        setIsCartVisible(true);
        return [
          ...prevItems,
          {
            id: product.id,
            image: product.image,
            title: product.title,
            model: product.model,
            serie: product.serie,
            voltage: product.voltage,
            quantity: product.quantity,
            price: product.price,
          },
        ];
      }
    });
  };

  // Eliminar un producto del carrito
  const removeCartItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // Actualizar la cantidad o detalles de un producto
  const updateCartItem = (index, updatedItem) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? { ...item, ...updatedItem } : item))
    );
  };

  // Alternar la visibilidad del carrito
  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeCartItem, // Agregado
        updateCartItem, // Agregado
        isCartVisible,
        toggleCartVisibility,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del carrito
export const useCart = () => useContext(CartContext);


