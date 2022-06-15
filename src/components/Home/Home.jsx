import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import axios from "axios";
import ProductCards from '../ProductCards/ProductCards';
import Filters from '../Filters/Filters';
import Search from '../Search/Search';
import { getorder } from '../../redux/actions';
import styles from './Home.module.css';

function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await axios.get(`http://localhost:3001/product/all`);
      setProducts(response.data);
    }
    dispatch(getorder(1));
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