import React from 'react';
import Carousel from './Carousel.jsx';

const ContentModal = ({ isLoading, product, images, details }) => {
    const renderParagraph = (label, value) => (
        value ? <p><strong>{label}:</strong> {value}</p> : null
    );

    return (
        <div className="modal-content">
            {isLoading ? (
                <div className="loading">Cargando...</div>
            ) : (
                <>
                    <div className="modal-image-container">
                        <Carousel images={images} />
                    </div>
                    <div className="modal-text">
                        {renderParagraph("Marca", product.brand)}
                        {renderParagraph("Modelo", product.model)}
                        {renderParagraph("Serie", details.num_serie || 'N/A')}
                        {renderParagraph("Design Serie", details.design_serie || 'N/A')}
                        {renderParagraph("Tecnología", product.technology)}
                        {renderParagraph("Consumo", details.watts && `${details.watts} W`)}
                        {renderParagraph("Voltios", details.voltage && `${details.voltage} V`)}
                        {renderParagraph("Lúmenes", details.lummens && `${details.lummens} LM`)}
                        {renderParagraph("Temperatura de Color", details.temperature_color || 'N/A')}
                        {renderParagraph("Color de Luz", details.color_light || 'N/A')}
                        {renderParagraph("Origen", details.origen || 'N/A')}
                        {renderParagraph("Cantidad de Lámparas", details.cantidad_lamps || 'N/A')}
                        {renderParagraph("Garantía", details.garantia || 'N/A')}
                    </div>
                </>
            )}
        </div>
    );
};

export default ContentModal;
