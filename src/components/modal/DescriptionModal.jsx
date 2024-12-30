import React, { useState } from 'react';
import AddToCartButton from '../cards/AddToCartBtn.jsx';

const DescriptionModal = ({ product, details, handleAddToCart }) => {
    const rawDescription = product.lamps_info?.[0]?.description || "";
    const [isExpanded, setIsExpanded] = useState(false);

    const formatDescription = (description) => {
        return description.split("<br>").map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    // Limitar la descripción a 350 caracteres si no está expandida
    const shortDescription =
        rawDescription.length > 550 ? rawDescription.slice(0, 550)  : rawDescription;

    const handleToggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    // Determinar cuál descripción mostrar
    const processedDescription = isExpanded
        ? formatDescription(rawDescription)
        : formatDescription(shortDescription);

    const renderParagraph = (label, value) =>
        value ? <p><strong>{label}:</strong> {value}</p> : null;

    return (
        <div className="container-description-modal">
            <div className="container-content-description">
                <h3>Descripción</h3>
                {rawDescription ? (
                    <p>
                        {processedDescription}{' '}
                        {/* Condición corregida */}
                        {rawDescription.length > 550 && (
                            <button
                                onClick={handleToggleDescription}
                                className="btn-toggle-description"
                            >
                                {isExpanded ? 'Ver Menos' : '...Ver Descripcion Completa'}
                            </button>
                        )}
                    </p>
                ) : (
                    <p>No hay descripción disponible.</p>
                )}
            </div>
            <div id="btn-add-to-cart-container">
                <div id="container-details-add-cart">
                    {renderParagraph("Marca", product.brand)}
                    {renderParagraph("Modelo", product.model)}
                    {renderParagraph("Design Serie", details.design_serie || 'N/A')}
                    {renderParagraph("Tecnología", product.technology)}
                    {renderParagraph("Precio", product.price || 'N/A')}
                    <p>Retirando por olivos y pagando en efectivo 5% de descuento.</p>
                </div>
                <AddToCartButton onClick={handleAddToCart} />
            </div>
        </div>
    );
};

export default DescriptionModal;
