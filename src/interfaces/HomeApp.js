// HomeApp.jsx
import React, { useState } from 'react';
import NavApp from '../components/nav/NavApp.js'; // Importar NavApp
import CardList from '../components/cards/CardList.js';
import CustomAlert from "../components/alerts/AlertHelp.jsx";
import '../styles/HomeApp.css'
import CartApp from '../components/cart/CartApp.js';
import CartIcon from '../components/cart/CartOverlay.jsx';
import FooterMobile from '../components/footer-mobile/Footer.jsx';


const HomeApp = () => {
  const [filters, setFilters] = useState({
    operation: '',
    lampType: '',
    technology: '',
    brand: '',
    model: '',
  });

  return (
    <div className="header-app">
      <NavApp setFilters={setFilters} /> {/* Usar NavApp */}
      <CardList filters={filters} />
      <CustomAlert />
      <CartIcon />
      <CartApp />
      <FooterMobile/>
    </div>
  );
};

export default HomeApp;
