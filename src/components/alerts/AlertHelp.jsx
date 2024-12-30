import React, { useState, useEffect } from "react";
import "../../styles/Alerts.css"; // Asegúrate de crear un archivo CSS para los estilos.

const CustomAlert = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar la alerta al cargar la página
    setIsVisible(true);
  }, []);

  const closeAlert = () => {
    setIsVisible(false); // Ocultar la alerta
  };


  const goToGPT = () => {
    window.open("https://chat.openai.com", "_blank"); // Abre el enlace en una nueva pestaña
  };

  return (
    isVisible && (
      <div className="custom-alert">
        <div className="custom-alert-content">
          <h2>¡Bienvenido a Olivos Car Shop!</h2>
          <h4>Informacion importante! Antes de realizar una compra:</h4>
          <ul className="list-1">
            <li>Asegúrate de que el producto es compatible con tu vehículo.</li>
            <li>Consulta primero con el manual de tu vehiculo. <strong>La opcion mas confiable siempre!</strong></li>
            <li>Verifica que tu vehiculo no haya sido modificado y que contenga el repuesto original.</li>
            <li>Si tienes dudas, envianos un mensaje de consulta y te asesoraremos a la brevedad .</li>
            <li>También puedes utilizar{" "}
              <a
                href="https://chat.openai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="chatgpt-link"
              >
                ChatGPT
              </a>{" "}
              o cualquier otra inteligencia artificial para verificar.
            </li>
          </ul>
          <h3>¿Cómo buscar?</h3>
          <h4>Ingresa a tu IA favorita los datos de tu vehiculo:</h4>
          <ul className="list-2">
            <li>Marca</li>
            <li>Modelo</li>
            <li>Año</li>
            <li>Número de chasis</li>
            <li>Nombre del repuesto</li>
          </ul>

          <div className="button-group">
            <button onClick={goToGPT} className="gpt-btn">Consultar en CHAT GPT</button>
            <button onClick={closeAlert} className="close-btn">Cerrar</button>
          </div>
        </div>
      </div>
    )
  );
};

export default CustomAlert;
