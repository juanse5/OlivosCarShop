import { useState, useEffect } from 'react';
import { fetchProducts } from '../../serviceAPI/ProductService.js';

export const useProducts = (filteredProducts = []) => {
  const [products, setProducts] = useState([]);
  const [productsToRender, setProductsToRender] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
    

      const sortedProducts = data.sort((a, b) => {
        const titleA = (a.brand + ' ' + a.model).toLowerCase();
        const titleB = (b.brand + ' ' + b.model).toLowerCase();
        return titleA.localeCompare(titleB);
      });

      setProducts(sortedProducts);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    setProductsToRender(filteredProducts.length ? filteredProducts : products);
  }, [filteredProducts, products]);

  return { productsToRender };
};
