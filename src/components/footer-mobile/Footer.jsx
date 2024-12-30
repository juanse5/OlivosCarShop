import React, { useEffect } from 'react';
import '../../styles/responsive/mobile/FooterMobile.css';
import { FontAwesomeIcon, faCircleCheck, faInstagram } from '../icons/Icons.js';

const FooterMobile = () => {
    useEffect(() => {
        const updateVisibility = () => {
            const footer = document.querySelector('.footer-mobile-container');
            if (window.innerWidth <= 700) {
                footer.style.display = 'flex';
            } else {
                footer.style.display = 'none';
            }
        };

        updateVisibility(); // Llamar a la función al cargar el componente

        window.addEventListener('resize', updateVisibility); // Añadir listener para los cambios de tamaño de ventana

        return () => window.removeEventListener('resize', updateVisibility); // Limpiar el listener al desmontar el componente
    }, []);

    return (
        <footer className="footer-mobile-container">
            <div className='contanier-text-info'>
                <p><FontAwesomeIcon className='icon-btn-mayorista' icon={faCircleCheck} /> Consultar por WhatsApp por Venta Mayorista</p>
                <p><FontAwesomeIcon className='icon-btn-mayorista' icon={faCircleCheck} /> Envios a Todo el Pais</p>
                <p><FontAwesomeIcon className='icon-btn-mayorista' icon={faCircleCheck} /> Envios en Moto en AMBA a Convenir</p>
            </div>
            <div>
                <div id='redes-sociales'>
                    <div id='container-icon-instagram'><FontAwesomeIcon id='instagram-icon' icon={faInstagram} /></div>
                    <p>@OlviosCarShop</p>
                </div>
                <div className='derechos-autor'>
                    <p>Derechos Reservados: Todos los derechos reservados. Este producto y su contenido están protegidos por derechos de autor.</p>
                    <p><span>© Olivos Car Shop 2024.</span></p>
                </div>
            </div>
        </footer>
    );
};

export default FooterMobile;
