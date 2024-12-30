import React, { useState, useEffect } from 'react';
import Nav from '../filters/LampsProps.js';
import Links from './Links.jsx';
import PublicidadImg from './Publicidad.jsx';
import { FontAwesomeIcon, faListUl } from '../icons/Icons.js';

const NavApp = ({ setFilters }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Actualiza la visibilidad de la navegación según el tamaño de la pantalla
  useEffect(() => {
    const updateNavVisibility = () => {
      if (window.innerWidth >= 1024) { // Cambia 1024 por el ancho deseado para el escritorio
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };

    // Llama a la función al cargar el componente
    updateNavVisibility();

    // Añade un event listener para cambiar la visibilidad cuando el tamaño de la ventana cambia
    window.addEventListener('resize', updateNavVisibility);

    // Limpia el event listener cuando el componente se desmonta
    return () => window.removeEventListener('resize', updateNavVisibility);
  }, []);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="nav-app"> 
      <button id='btn-close-filters' onClick={toggleNavVisibility}>
        <FontAwesomeIcon icon={faListUl} /> Filtros
      </button>
      {isNavVisible && <Nav setFilters={setFilters} />}
      <Links />
      <PublicidadImg />
    </div>
  );
};

export default NavApp;
