import React, { useState } from 'react';
import Card from './Card.js';
import { useProducts } from '../../hooks/cards/UseCardList.js';
import '../../styles/card/Cards.css';
import '../../styles/card/CardList.css';


const CardList = ({ filters }) => {
  const { productsToRender } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  const filteredProducts = productsToRender.filter(product => {
    const details = product.details_lamps?.[0] || {}; // Cambiado a details_lamps

    return (
      (!filters.operation || details.vehicle?.includes(filters.operation)) &&
      (!filters.lampType || details.type === filters.lampType) &&
      (!filters.technology || product.technology === filters.technology) &&
      (!filters.brand || product.brand === filters.brand) &&
      (!filters.model || product.model === filters.model)
    );
  });

  const indexOfLastProduct = currentPage * cardsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - cardsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / cardsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className='card-list-container'>
      <div className="card-list">
        {currentProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <nav className="pagination-nav">
        <ul className="pagination">
          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
              <a onClick={() => paginate(index + 1)} className="page-link" href="#!">
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CardList;
