import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomeApp from './interfaces/HomeApp.js';
import HomeLoginApp from './interfaces/HomeLoginApp.js';
import HeaderTop from './components/headers/HeaderTop.jsx';
import HeaderAuth from './components/headers/HeaderAuth.jsx';

import './styles/responsive/mobile/GeneralMobile.css'
import './styles/responsive/mobile/HeaderMobile.css'
import './styles/responsive/mobile/NavMobile.css'
import './styles/responsive/mobile/CardMobile.css'
import './styles/responsive/mobile/CartMobile.css'
import './styles/responsive/mobile/CheckOutMobile.css'
import './styles/responsive/mobile/ModalMobile.css'
import  './styles/responsive/mobile/FooterMobile.css'


import './styles/responsive/Ipad.css'
import './styles/responsive/StyleGeneral.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); 
  }, []);

  return (
    <Router>
      {isAuthenticated ? (
        <>
          <HeaderAuth onLogout={() => setIsAuthenticated(false)} />
          <Routes>
            <Route path="/homeLogin" element={<HomeLoginApp />} />
            <Route path="/" element={<Navigate to="/homeLogin" replace />} />
            <Route path="*" element={<Navigate to="/homeLogin" replace />} />
          </Routes>
      
        </>
      ) : (
        <>
          <HeaderTop onLogin={() => setIsAuthenticated(true)} />
          <Routes>
            <Route path="/home" element={<HomeApp />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </>
      )}


    </Router>
  );
}

export default App;
