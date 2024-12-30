import React from 'react';
import { FontAwesomeIcon, faCircleCheck } from '../icons/Icons.js';


const FooterModal = () => {
    return (
        <footer id="footer-modal">
            <div id="footer-container-title">
                <h3>Olivos Car Shop Tienda Online</h3>
                <img 
                    src="images/logo.webp" 
                    alt="logoApp" 
                    className="logoApp"
                />
            </div>
            <div id="container-text-footer-modal">
                <p> <FontAwesomeIcon className="icon-btn-modal" icon={faCircleCheck} /> Pagos a través de Mercado Pago.</p>
                <p> <FontAwesomeIcon className="icon-btn-modal" icon={faCircleCheck} /> Podes pagar con Débito, Crédito y Dinero en Cuenta.</p>
                <p> <FontAwesomeIcon className="icon-btn-modal" icon={faCircleCheck} /> Compras en Efectivo 5% de Descuento Unicamente Retirando
                por Olivos.</p>
                <p> <FontAwesomeIcon className="icon-btn-modal" icon={faCircleCheck} /> El 5% de Descuento en Efectivo se Acumula con Cualquier Otro 
                Descuento que se le  Esté Aplicado al Producto. </p>
            </div>
        </footer>
    );
};

export default FooterModal;
