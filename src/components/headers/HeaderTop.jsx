import React  from 'react';

import '../../styles/Headers.css'; // Asegúrate de que el path a tu archivo CSS sea correcto

export default function HeaderTop() {

  return (
    <>
      <div className="header-top-container">
        <div className="tool-bar">
          <div className='img-container-logo'>
            <img 
              src="images/logo.webp" 
              alt="logoApp" 
              className='logoApp'
              />
          </div>
          <h1>Olivos Car Shop </h1><span>Tienda Online</span>
        </div>
      </div>

    </>
  );
}


