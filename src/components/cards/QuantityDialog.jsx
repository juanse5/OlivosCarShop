import React from 'react';
import '../../styles/card/QuantityDialog.css';

const QuantityDialog = ({ isOpen, quantity, onClose, onQuantityChange, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="quantity-dialog-overlay" onClick={onClose}>
        <div className="quantity-dialog-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onClose}>×</button>
            
            <div className="quantity-controls">
                <h3>Ingresar Cantidades</h3>
               <div className='controls'>
                    <button 
                      onClick={() => onQuantityChange(-1)}
                      className='btn-controls'>-</button>
                    <span>{quantity}</span>
                    <button 
                      onClick={() => onQuantityChange(1)}
                      className='btn-controls'>+</button>
               </div>
               <button className="confirm-button-controls" onClick={onConfirm}>Confirmar</button>
            </div>
        </div>
    </div>
  );
};

export default QuantityDialog;
