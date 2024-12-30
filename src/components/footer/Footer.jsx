        import React from 'react';
        import '../../styles/nav/Links.css'
        import { FontAwesomeIcon,faCircleCheck ,faInstagram} from '../icons/Icons.js';
        
        
        const Footer= () => {
        
        return(
        <div className="contact-links">
            <div className='contanier-text-info-nav'>
                <p> 
                    <FontAwesomeIcon className='icon-btn-mayorista' icon={faCircleCheck} /> Consultar por WhatsApp por Venta Mayorista</p>
                <p> 
                    <FontAwesomeIcon className='icon-btn-mayorista' icon={faCircleCheck} /> Envios a Todo el Pais</p>
                <p>  
                    <FontAwesomeIcon className='icon-btn-mayorista' icon={faCircleCheck} /> Envios en Moto en AMBA a Convenir</p>
            </div>
            <footer>
                <div id='redes-sociales'>
                    <div id='container-icon-instagram'>
                        <FontAwesomeIcon id='instagram-icon' icon={faInstagram} />
                    </div>
                    <p>@OlviosCarShop</p>
                </div>
                    <div className='derechos-autor'>
                        <p>  Derechos Reservados: Todos los derechos reservados. 
                            Este producto y su contenido están protegidos por derechos de autor.
                        </p>
                        <p> <span> © Olivos Car Shop 2024.</span> </p>
                    </div>
            </footer>
        </div>
        )
        }
        
        
        export default Footer;