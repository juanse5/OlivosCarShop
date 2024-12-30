import React from 'react';
import '../../styles/check-out/CheckInfo.css'; // Importar los estilos
import { FontAwesomeIcon, faCircleCheck  } from '../icons/Icons.js';


const CheckInfo = () => {
 
  return (
    <div className='container-info-check-out'>
        <h4>Como Funcionan los Envios?</h4>
        <p>Los Despachos en Moto y Correo Argentino se Realizan de Lunes A Viernes de 9:00hs A 18:00hs</p>
        <p>Las Compras Hechas Entre el Viernes y el Domingo Seran Despachados el dia Lunes.</p>
        <div className='envios-moto-container'>
            <h5><strong> MOTO: </strong></h5>
            <p>
            <FontAwesomeIcon className='icon-info-envios' icon={faCircleCheck} />
            Los Envios en Moto se Realizan Entre las 24 Horas Habiles Despues de Realizada Dicha Compra,
            Como Muy Tarde Puede Enviarse al Otro Dia de Realizar la Compra.
            </p> 
            <p> 
            <FontAwesomeIcon className='icon-info-envios' icon={faCircleCheck} />
            Zonas de Envio (Zona Norte , Capital Federal, Zona Oeste y Zona Sur)
            </p>
            <p>  
            <FontAwesomeIcon className='icon-info-envios' icon={faCircleCheck} />
            Consulta Por WhatsApp el Costo del Envio Antes de Realizar tu Compra.
            </p> 
        </div>
        <div className='envios-oca-container'>
            <h5><strong> Correo Argentino: </strong></h5> 
            <p> 
            <FontAwesomeIcon className='icon-info-envios' icon={faCircleCheck} />
            Se Realiza el Despacho el Mismo Dia O A lo Sumo al Dia Siguiente Despues de Realizada Dicha Compra.
            </p>
            <p>
            <FontAwesomeIcon className='icon-info-envios' icon={faCircleCheck} />
            El Envio Puede Tardar de 3 a 5 Dias en Llegar al Destino Dependiendo el Tipo de Envio Que Elijas.
            </p> 
            <p>
            <FontAwesomeIcon className='icon-info-envios' icon={faCircleCheck} />
            Para Cotizar el Precio del Envio Por Correo Argentino Ingresa tu Codigo Postal. 
            </p>
        </div>
    </div>
  );
};

export default CheckInfo;