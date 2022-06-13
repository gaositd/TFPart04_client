import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductCards from '../ProductCards/ProductCards';
import Filters from '../Filters/Filters';
import Search from '../Search/Search';
import styles from './Home.module.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await axios.get(`http://localhost:3001/product/all`);
      setProducts(response.data);
    }
    loadProducts();
  }, [products.length]);

  return (
    <>
      <div>
        <Search allProducts={products} />
        <Filters />
        <ProductCards allProducts={products} />
      </div>
    </>
  );
};

export default Home;