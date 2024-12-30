import React, { useEffect, useState } from 'react';
import { getImages } from '../../serviceAPI/imagesApi.js';

import HeaderModal from './HeaderModal.jsx';
import ContentModal from './ContentModal.jsx';
import DescriptionModal from './DescriptionModal.jsx';
import FooterModal from './FooterModal.jsx';
import '../../styles/modal/Modal.css';

const Modal = ({ isOpen, onClose, product, handleAddToCart }) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const data = await getImages();
                const filteredImages = [
                    ...new Set(
                        data
                            .filter(image => image.product_id === product.id)
                            .flatMap(image => [image.img1, image.img2, image.img3, image.img4, image.img5, image.img6].filter(Boolean))
                    )
                ];
                setImages(filteredImages);
                setIsLoading(false);
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
                setIsLoading(false);
            }
        };

        if (product) fetchImages();
    }, [product]);

    if (!isOpen) return null;

    const details = product.details_lamps?.[0] || {};

    return (
        <div className="modal">
            <div className="modal-container">
                <HeaderModal product={product} onClose={onClose} />
                <ContentModal 
                    isLoading={isLoading} 
                    product={product} 
                    images={images} 
                    details={details} 
                />
                <DescriptionModal product={product} details={details} handleAddToCart={handleAddToCart} />
                <FooterModal />
            </div>
        </div>
    );
};

export default Modal;
