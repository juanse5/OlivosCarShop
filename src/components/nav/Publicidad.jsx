import React from 'react';
import '../../styles/nav/Publicidad.css'
import { FontAwesomeIcon,faInstagram} from '../icons/Icons.js';

const PublicidadImg = () => {
  return (
    <div className='imagenes-publicitarias'>
        <div className='container-img-publicidad'>
            <img src="images/osram.webp" alt="osramPublicidad" />
        </div>
        <div className='container-img-publicidad'>
            <img src="images/neolux.webp" alt="neoluxPublicidad" />
        </div>
        <div className='container-img-publicidad'>
            <img src="images/moura.webp" alt="mouraPublicidad" />
        </div>
        <div className='container-img-publicidad'>
            <img src="images/ngk.webp" alt="mouraPublicidad" />
        </div>
        <footer>
            <div id='redes-sociales'>
                <div id='container-icon-instagram'><FontAwesomeIcon id='instagram-icon' icon={faInstagram} /></div>
                    <p>@OlviosCarShop</p>
                </div>
                <div className='derechos-autor'>
                    <p>Derechos Reservados: Todos los derechos reservados. 
                    Este producto y su contenido están protegidos por derechos de autor.
                    </p>
                    <p> <span> © Olivos Car Shop 2024.</span> </p>
                </div>
        </footer>
    </div>
  );
};

export default PublicidadImg;
