import React from 'react';
import '../../styles/nav/Links.css'
import { FontAwesomeIcon,faCircleCheck } from '../icons/Icons.js';


const Links = () => {

return(
<div className="contact-links">

        <div className="whatsapp-icon">
            <a
              href="https://wa.me/1234567890" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="contact-logo"
              />
              <span>Contáctarse por WhatsApp</span>
            </a>
        </div>

        <div className="chatgpt-icon">
            <a
              href="https://chat.openai.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/gpt.webp"
                alt="ChatGPT"
                className="gpt-logo"
              />

              <span>Consultar con CHAT GPT</span>
            </a>
        </div>

        <div className='contanier-text-info-nav'>
          <p> 
            <FontAwesomeIcon className='icon-btn-mayorista' icon={faCircleCheck} /> Consultar por WhatsApp por Venta Mayorista</p>
          <p> 
            <FontAwesomeIcon className='icon-btn-mayorista' icon={faCircleCheck} /> Envios a Todo el Pais</p>
          <p>  
            <FontAwesomeIcon className='icon-btn-mayorista' icon={faCircleCheck} /> Envios en Moto en AMBA a Convenir</p>
        </div>
      
      </div>
)
}


export default Links;