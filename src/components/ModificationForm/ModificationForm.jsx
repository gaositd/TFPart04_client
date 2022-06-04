import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, createProduct, getCategories } from '../../redux/actions';
import { useParams } from 'react-router-dom';

function ModificationForm() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [loading, setLoading] = useState(false)

    const allCategories = useSelector(state => state.categories);

    const [input, setInput] = React.useState({
        name: '',
        description: '',
        image: '',
        ranking: 0,
        createBy: '',
        price: 0,
        categories: [],
        stock: 0,
    });

    const [errors, setErrors] = React.useState({
        name: '',
        description: '',
        image: '',
        ranking: null,
        price: null,
        categories: [],
        stock: null,
    });

    useEffect(() => {
        setLoading(true)
        dispatch(getProductById(id))  //This sets in the store the product i want to see the details
        setLoading(false)
        if (!allCategories.length) {
            dispatch(getCategories())
        };
    }, [])

    const product = useSelector(state => state.productDet)

    const imageName = '../../img_products/' + product.image + '.jpg';

    const handleInputChange = function (e) {
        let data;
        if (e.target.name === 'ranking') {
            data = Number(e.target.value)
        }
        if (e.target.name === 'stock') {
            if (/^[0-9]{0,2}$/.test(e.target.value)) {
                data = Number(e.target.value)
            }
        }
        if (e.target.name === 'price') {
            if (e.target.value.length >= 4) {
                if ((/^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/.test(e.target.value))) {
                    data = parseFloat(e.target.value);
                } else {
                    setErrors(validate({
                        ...input,
                        [e.target.name]: e.target.value
                    }))
                }
            }
        }
        setInput({
            ...input,
            [e.target.name]: (data === 0 || data) ? data : e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: (data === 0 || data) ? data : e.target.value
        }));
    };

    const handleCheckboxChange = function (e) {
        if (input.categories.includes(e.target.value)) {
            setInput({
                ...input,
                categories: input.categories.filter(c => c !== e.target.value)
            });
        } else {
            setInput({
                ...input,
                categories: [...input.categories, e.target.value]
            });
            setErrors(validate({
                ...input,
                categories: [...input.categories, e.target.value]
            }));
        };
    };

    const handleSubmit = function (e) {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            try {
                dispatch(createProduct(input));
                e.target.reset();
                window.location.href = '/home';
            } catch (err) {
                console.log(err.message);
            }
        } else {
            alert('All the mandatory fields are not filled');
        };
    };
    console.log(errors, input)

    return (
        <div class="flex flex-col justify-center items-center">
            <div class="card w-[25rem] bg-base-100 shadow-xl flex flex-col justify-center items-center">
                <span className="font-bold pt-3 text-lg">Current product data:</span>
                <figure class="px-10 pt-3 w-[20rem]">
                    <img src={imageName} alt={product.name} class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <div><span className="font-bold">Course name: </span>{product.name}</div>
                    <div><span className="font-bold">Description: </span>{product.description}</div>
                    <div><span className="font-bold">Ranking: </span>{product.price}</div>
                    <div><span className="font-bold">Created by: </span>{product.createBy}</div>
                    <div><span className="font-bold">Stock: </span>{product.stock}</div>
                    <div><span className="font-bold">Categories: </span>{product.categories}</div>
                    <div><span className="font-bold">Price: </span>{product.price} USD</div>
                    <p className="text-xs"><span className="font-bold">Product ID: </span> {product.id}</p>
                </div>
            </div>

            <div className="pt-5">
                <h1 className="font-bold text-lg pb-5">Modify your course</h1>

                <div className="flex flex-col justify-center items-center">
                    <form onSubmit={handleSubmit} >
                        <div className="flex flex-col justify-center items-center" >

                            <label>Course name:</label>
                            <div class="flex flex-row items-center justify-center indicator">
                                <span class="indicator-item badge bg-warning">Required</span>
                                <input name="name" onChange={handleInputChange} placeholder="Product's name" class="input input-bordered input-accent w-full max-w-xs" />
                            </div>
                            {errors.name ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.name}</span> : ''}<br />

                            <label>Description:</label>
                            <div class="flex flex-row items-center justify-center indicator mb-2">
                                <span class="indicator-item badge bg-warning">Required</span>
                                <textarea
                                    class="textarea textarea-accent"
                                    placeholder="What`s the course about"
                                    name="description"
                                    onChange={handleInputChange}
                                    rows='3'
                                    cols='40' ></textarea>
                            </div>
                            {errors.description ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.description}</span> : ''}<br />

                            <label>Image:</label>
                            <div class="flex flex-row items-center justify-center indicator">
                                <span class="indicator-item badge bg-warning">Required</span>
                                <input name="image" onChange={handleInputChange} placeholder="URL Image" class="input input-bordered input-accent w-full max-w-xs" />
                            </div>
                            {errors.image ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.image}</span> : ''}<br />

                            <label>ranking:</label>
                            <div class="flex flex-row items-center justify-center indicator">
                                <span class="indicator-item badge bg-warning">Required</span>
                                <input name="ranking" onChange={handleInputChange} placeholder="Ranking" class="input input-bordered input-accent w-full max-w-xs" />
                            </div>
                            {errors.ranking ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.ranking}</span> : ''}<br />

                            <label>Created by:</label>
                            <div class="flex flex-row items-center justify-center indicator">
                                <span class="indicator-item badge bg-warning">Required</span>
                                <input name="createBy" onChange={handleInputChange} placeholder="Created by" class="input input-bordered input-accent w-full max-w-xs" />
                            </div>
                            {errors.createBy ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.createBy}</span> : ''}<br />


                            <label>Price:</label>
                            <div class="flex flex-row items-center justify-center indicator">
                                <span class="indicator-item badge bg-warning">Required</span>
                                <input name="price" onChange={handleInputChange} placeholder="0.00 USD" class="input input-bordered input-accent w-full max-w-xs" />
                            </div>
                            {errors.price ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.price}</span> : ''}<br />


                            <label>Vacancies:</label>
                            <div class="flex flex-row items-center justify-center indicator">
                                <span class="indicator-item badge bg-warning">Required</span>
                                <input name="stock" onChange={handleInputChange} placeholder="Stock available" class="input input-bordered input-accent w-full max-w-xs" />
                            </div>
                            {errors.stock ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.stock}</span> : ''}<br />

                            <label>Categories:</label><span class="indicator-item badge bg-warning">Required</span>
                        </div>

                        <div className="flex flex-row flex-wrap justify-between w-[21rem] ">
                            {allCategories ? allCategories.map(ctgry => {
                                return (
                                    <div key={ctgry.id}>
                                        <label class="cursor-pointer label">
                                            <span class="label-text mr-1">{ctgry.name}</span>
                                            <input type='checkbox'
                                                id={ctgry.name}
                                                name='categories'
                                                onChange={handleCheckboxChange}
                                                value={JSON.stringify(
                                                    ctgry.id)} class="checkbox checkbox-secondary" />
                                        </label>
                                    </div>
                                )
                            }) : 'No funca'}
                        </div>
                        {errors.categories ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.categories}</span> : ''}<br />

                        <button type='submit' class="btn btn-primary">
                            Modify product
                        </button>
                    </form>
                </div>
            </div >
        </div >
    )
}

export const validate = function (input) {
    let errors = {};
    if (!input.name || input.name.length < 2 || typeof input.name !== 'string') {
        errors.name = 'The course name must be at least 2 characters long.';
    } else if (/["`'#%&,:;<>=@{}~$()*+/?[\]^|]+/.test(input.name)) {
        errors.name = 'The course name can not contain special characters.';
    };
    if (input.description.length < 10) {
        errors.description = 'The description must be at least 10 characters long.';
    };
    if (!input.ranking || input.ranking > 5 || input.ranking < 0 || input.ranking % 1 !== 0 || typeof input.ranking !== 'number') {
        errors.ranking = 'The ranking must be a integer between 0 and 5.';
    };
    if (input.categories.length < 1) {
        errors.categories = 'The curse must have at least one category.';
    };
    // if (input.image) {
    //     errors.image = 'XXXXXXXXX';
    // };
    if (!input.createBy || input.createBy.length < 3) {
        errors.createBy = 'The creator of the course is mandatory information.';

    } else if (/["`'#%&,:;<>=@{}~$()*+/?[\]^|]+/.test(input.createBy)) {
        errors.createBy = 'The course name can not contain special characters.';
    };
    if (!input.price || typeof input.price !== 'number' || input.price < 0) {
        errors.price = 'The price of the course must be completed with the $0.00 USD format.';
    };
    if (!input.stock || typeof input.stock !== 'number') {
        errors.stock = 'The course should have at least one vacancy.';
    };
    return errors;
};

export default ModificationForm