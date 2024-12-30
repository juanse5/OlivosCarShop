// CardContent.jsx
import React from 'react';
import ProductDetails from './ProductsDetails.jsx';
import IconDisplay from './IconDisplay.jsx';
import ImageContainer from './ImageContainer.jsx';

const CardContent = ({ product, details, iconsToShow, vehicleTypes }) => {
    return (
        <div className="card-content">
            <ImageContainer imageUrl={product.images} altText={product.model} />
            <ProductDetails product={product} details={details} />
            <IconDisplay vehicleTypes={vehicleTypes} iconsToShow={iconsToShow} />
        </div>
    );
};

export default CardContent;
