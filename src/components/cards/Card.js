import React from 'react';
import '../../styles/card/Cards.css';
import Modal from '../modal/Modal.js';
import QuantityDialog from './QuantityDialog.jsx';
import CardContent from './CardContent.js';
import AddToCartButton from './AddToCartBtn.jsx';
import { useCardState } from '../../hooks/cards/UseCard.js';
import { faCar, faTruck, faMotorcycle, faBus, faTruckPickup, faCaravan } from '../icons/Icons.js';

const vehicleIcons = {
  auto: faCar,
  camion: faTruck,
  moto: faMotorcycle,
  camioneta: faTruckPickup,
  trailer: faCaravan,
  bus: faBus,
};

const Card = ({ product }) => {
  const {
    isModalOpen,
    isQuantityDialogOpen,
    setIsQuantityDialogOpen,
    quantity,
    handleModalOpen,
    handleModalClose,
    handleAddToCart,
    handleQuantityChange,
    handleConfirmQuantity,
  } = useCardState(product);

  const details = product.details_lamps?.[0] || {}; 


  const vehicleTypes = details.vehicle?.split(' ') || [];
  const iconsToShow = vehicleTypes.map((type) => vehicleIcons[type]);

  return (
    <div>
      <div className="card" onClick={handleModalOpen}>
        <h2>{product.brand} {product.model}</h2>
        <CardContent
          product={product}
          details={details}
          iconsToShow={iconsToShow}
          vehicleTypes={vehicleTypes}
        />
        <AddToCartButton onClick={handleAddToCart} />
      </div>
      <QuantityDialog
        isOpen={isQuantityDialogOpen}
        quantity={quantity}
        onClose={() => setIsQuantityDialogOpen(false)}
        onQuantityChange={handleQuantityChange}
        onConfirm={handleConfirmQuantity}
      />
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
        product={product} 
        handleAddToCart={handleAddToCart} 
      />
    </div>
  );
};

export default Card;
