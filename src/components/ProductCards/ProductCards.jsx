import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductIndividualCard from '../ProductIndividualCard/ProductIndividualCard';
import Pagination from '../Pagination/Pagination'

function ProductCards({ allProducts }) {
    // UNCOMMENT WHEN REAL DATA COMES 
    const filteredProducts = useSelector(state => state.filteredProducts);
    const statePage = useSelector(state => state.pagination)
    const holeState = useSelector(state => state)

    //PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const paginate = function (pageNumber) {
        setCurrentPage(pageNumber);
    };

    const products = filteredProducts.length ? filteredProducts : allProducts;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    useEffect(() => {
        if (statePage) setCurrentPage(statePage);
    }, [holeState, filteredProducts]);

    return (
        <div className="grid justify-items-center">
        <div className="grid justify-items-center bg-white w-2/3 rounded shadow-sm border p-2">
        <div className="grid grid-cols-3 gap-4 w-2/3">
            {currentProducts ? currentProducts.map((p, i) => {
                return (
                    <React.Fragment key={i}>
                        {/* <h3>Id de producto actual: {p.id_product}</h3> */}
                        <ProductIndividualCard
                            id={p.id}
                            name={p.name}
                            price={p.price}
                            image={p.image}
                            categories={p.categories}
                            ranking={p.ranking}
                        />
                    </React.Fragment >
                )
            })
                : ''}
            <br></br>
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
            />
        </div>
        </div>
        </div>
    );
};

export default ProductCards;