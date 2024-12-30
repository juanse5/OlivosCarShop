import React from 'react';


const HeaderModal = ({ product, onClose }) => {
    return (
        <div id="header-modal">
            <h2>{product.brand} {product.model}</h2>
            <span className="close-button-modal" onClick={onClose}>&times;</span>
        </div>
    );
};

export default HeaderModal;
