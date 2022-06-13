import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory, filterByPrice, pagination } from '../../redux/actions';


function Filters() {
    const dispatch = useDispatch();

    const handleSelectCategory = (e) => {
        dispatch(pagination(1));
        dispatch(filterByCategory(e.target.value));
    };

    const handleSelectPrice = (e) => {
        dispatch(pagination(1));
        dispatch(filterByPrice(e.target.value));
    };

    const categories = useSelector(state => state.categories);

    return (
        <nav>
            <select
                class="select select-bordered select-sm w-60 max-w-xs select-primary mr-10 bg-neutral"
                name='filterByCategory'
                defaultValue={true}
                onChange={handleSelectCategory}
            >
                <option disabled value='true' selected>Filtrar por categoria </option>
                <option value='all'>All</option>
                {categories ? categories.map((ctgry, i) => {
                    return (
                        <option key={i} value={ctgry.name}>{ctgry.name}</option>
                    )
                }) : ''}
            </select>

            <select
                class="select select-bordered select-sm w-60 max-w-xs select-primary bg-neutral"
                name='filterByCategory'
                defaultValue={true}
                onChange={handleSelectPrice}
            >
                <option value='true' disabled='disabled'>Filtrar por precio </option>
                <option value='all' >All</option>
                <option value='highest'>Highest price</option>
                <option value='lowest'>Lowest price</option>
            </select>
        </nav>
    )
}

export default Filters;