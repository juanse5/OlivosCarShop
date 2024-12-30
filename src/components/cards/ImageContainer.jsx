
// ImageContainer.jsx
import React from 'react';

const ImageContainer = ({ imageUrl, altText }) => {
    return (
        <div className="container-image-card">
            <img src={imageUrl} alt={altText} className="card-image" loading="lazy" />
        </div>
    );
};

export default ImageContainer;