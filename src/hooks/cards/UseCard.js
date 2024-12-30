import { useState } from 'react';
import { useCart } from '../../context/CartContext.js';

export const useCardState = (product) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuantityDialogOpen, setIsQuantityDialogOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const handleModalOpen = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    setIsQuantityDialogOpen(true);
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleConfirmQuantity = () => {
    setIsQuantityDialogOpen(false);
    const details = product.details_lamps?.[0] || {}; // Cambiado a details_lamps
    addToCart({
      id: product.id,
      image: product.images,
      title: `${product.brand} ${product.model}`,
      model: product.model,
      serie: details.num_serie || 'N/A',
      voltage: details.voltage || 'N/A',
      price: product.price,
      quantity,
    });
    console.log('Producto agregado al carrito:', {
      id: product.id,
      image: product.images,
      title: `${product.brand} ${product.model}`,
      model: product.model,
      serie: details.num_serie || 'N/A',
      voltage: details.voltage || 'N/A',
      price: product.price,
      quantity,
    });
  };

  return {
    isModalOpen,
    isQuantityDialogOpen,
    setIsQuantityDialogOpen,
    quantity,
    handleModalOpen,
    handleModalClose,
    handleAddToCart,
    handleQuantityChange,
    handleConfirmQuantity,
  };
};
