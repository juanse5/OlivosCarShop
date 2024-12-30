import React from 'react';

const ProductDetails = ({ product, details }) => {
    // Asegurándonos de que `lamps_info` contiene al menos un objeto
    const productDescription = product.lamps_info?.[0]?.description;

    return (
        <div className="card-text">
            <p><strong>Tecnología:</strong> {product.technology}</p>
            <p><strong>Voltios:</strong> {details.voltage || 'N/A'} V</p>
            <p><strong>Precio:</strong> ${product.price}</p>

            <p id="info-p">[ ... ] Ver Más Info</p>
        </div>
    );
};

export default ProductDetails;


/**
 *   <div id='card-text-details-1'>
                <p><strong>Marca:</strong> {product.brand}</p>
                <p><strong>Modelo:</strong> {product.model}</p>
                <p><strong>Serie:</strong> {details.num_serie || 'N/A'}</p>
          </div>
 */