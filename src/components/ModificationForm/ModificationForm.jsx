import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, modifyProduct, getCategories, loadingImage } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import _ from "lodash";

function ModificationForm() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector(state => state.productDet)
    const allCategories = useSelector(state => state.categories);
    const [input, setInput] = React.useState({});
    const loading = useSelector(state => state.imageLoading);
    let imageName = Object.keys(product).length ? (product.image.includes('product') ?
        `../../img_products/${product.image}.jpg` :
        `https://res.cloudinary.com/da42wdmjv/image/upload/v1654727380/${product.image}`) : '';
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        // setLoading(true)
        dispatch(getProductById(id))  //This sets in the store the product i want to see the details
        // setLoading(false)
        if (!allCategories.length) {
            dispatch(getCategories())
        };
        if (product?.name) {
            setInput({
                name: product.name,
                description: product.description,
                image: product.image,
                ranking: product.ranking,
                createBy: product.createBy,
                price: product.price,
                categories: [],
                stock: product.stock,
            })
        }
        return () => dispatch(loadingImage(false));
    }, [product?.name])

    const [errors, setErrors] = React.useState({
        name: '',
        description: '',
        image: '',
        ranking: null,
        price: null,
        categories: [],
        stock: null,
    });

    const handleInputChange = function (e) {
        let data;
        if (e.target.name === 'image') {
            data = e.target.files[0];
        }
        if (e.target.name === 'ranking') {
            data = Number(e.target.value);
        }
        if (e.target.name === 'stock') {
            if (/^[0-9]{0,2}$/.test(e.target.value)) {
                setErrors({
                    ...errors,
                    stock: null
                })
                data = Number(e.target.value);
            }
        }
        if (e.target.name === 'price') {
            if (e.target.value.length >= 4) {
                if ((/^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/.test(e.target.value))) {
                    data = parseFloat(e.target.value);
                }
            }
        }
        setInput({
            ...input,
            [e.target.name]: ((data === 0) || data) ? data : e.target.value
        });
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
        };
    };

    const handleSubmit = function (e) {
        e.preventDefault();
        let validation = validate(input);
        if (Object.keys(validation).length) {
            setErrors(validation);
            return;
        }
        if (Object.keys(validation).length === 0) {
            let aux = {
                ...input
            };
            if (!input.categories.length) aux.categories = product.categories
            aux.reviews = product.reviews
            aux.id = product.id
            if (!(_.isEqual(aux, product))) {
                if (!input.categories.length) {
                    setInput({
                        ...input,
                        categories: []
                    })
                }
                try {
                    dispatch(loadingImage(true));
                    dispatch(modifyProduct(input, product.id));
                    e.target.reset();
                } catch (err) {
                    console.log(err.message);
                }
            } else {
                alert('No changes made on the course')
            }
        }
    };

    return (
        <>
            {loading ?
                <>
                    <div class="alert shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>Uploading the image, please wait until you're redirected</span>
                        </div>
                    </div>
                </>
                :
                <div className="grid grid-cols-2 justify-items-center">
                    <div className="card w-[25rem] bg-base-100 shadow-xl justify-center items-center">
                        <span className="font-bold pt-3 text-lg">Current product data:</span>
                        <figure className="px-10 pt-3 w-[20rem]">
                            <img src={imageName} alt={product.name} />
                        </figure>
                        <div className="card-body items-center text-center">
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
                                    <div className="flex flex-row items-center justify-center indicator">
                                        <input name="name" onChange={handleInputChange} placeholder="Product's name" className="input input-bordered input-accent w-full max-w-xs" />
                                    </div>
                                    {errors.name && input.name ? <span className="indicator-item indicator-middle indicator-center badge badge-warning">{errors.name}</span> : ''}<br />

                                    <label>Description:</label>
                                    <div className="flex flex-row items-center justify-center indicator mb-2">
                                        <textarea
                                            className="textarea textarea-accent"
                                            placeholder="What`s the course about"
                                            name="description"
                                            onChange={handleInputChange}
                                            rows='3'
                                            cols='40' ></textarea>
                                    </div>
                                    {errors.description && input.description ? <span className="indicator-item indicator-middle indicator-center badge badge-warning">{errors.description}</span> : ''}<br />

                                    <label>Image</label>
                                    <label className="btn btn-secondary w-full max-w-xs cursor-pointer">
                                        Select an image from your device
                                        <input type='file' accept=".png, .jpg, .jpeg" name="image" onChange={handleInputChange} className="bg-transparent w-full max-w-xs cursor-pointer hidden" />
                                    </label>
                                    {errors.image && input.image ? <span className="indicator-item indicator-middle indicator-center badge badge-warning">{errors.image}</span> : ''}<br />

                                    <label>ranking:</label>
                                    <div className="flex flex-row items-center justify-center indicator">
                                        <input name="ranking" onChange={() => handleInputChange} placeholder="Ranking" className="input input-bordered input-accent w-full max-w-xs" />
                                    </div>
                                    {errors.ranking && input.ranking ? <span className="indicator-item indicator-middle indicator-center badge badge-warning">{errors.ranking}</span> : ''}<br />

                                    <label>Created by:</label>
                                    <div className="flex flex-row items-center justify-center indicator">
                                        <input name="createBy" onChange={handleInputChange} placeholder="Created by" className="input input-bordered input-accent w-full max-w-xs" />
                                    </div>
                                    {errors.createBy && input.createBy ? <span className="indicator-item indicator-middle indicator-center badge badge-warning">{errors.createBy}</span> : ''}<br />


                                    <label>Price:</label>
                                    <div className="flex flex-row items-center justify-center indicator">
                                        <input name="price" onChange={handleInputChange} placeholder="0.00 USD" className="input input-bordered input-accent w-full max-w-xs" />
                                    </div>
                                    {errors.price && input.price ? <span className="indicator-item indicator-middle indicator-center badge badge-warning">{errors.price}</span> : ''}<br />


                                    <label>Vacancies:</label>
                                    <div className="flex flex-row items-center justify-center indicator">
                                        <input name="stock" onChange={handleInputChange} placeholder="Stock available" className="input input-bordered input-accent w-full max-w-xs" />
                                    </div>
                                    {(errors.stock && input.stock) ? <span className="indicator-item indicator-middle indicator-center badge badge-warning">{errors.stock}</span> : ''}<br />

                                    <label>Categories:</label>
                                </div>

                                <div className="flex flex-row flex-wrap justify-between w-[21rem]">
                                    {allCategories ? allCategories.map(ctgry => {
                                        return (
                                            <div key={ctgry.id}>
                                                <label className="cursor-pointer label">
                                                    <span className="label-text mr-1">{ctgry.name}</span>
                                                    <input type='checkbox'
                                                        id={ctgry.name}
                                                        name='categories'
                                                        onChange={handleCheckboxChange}
                                                        value={JSON.stringify(
                                                            ctgry.id)}
                                                        className="checkbox checkbox-secondary" />
                                                </label>
                                            </div>
                                        )
                                    }) : 'No funca'}
                                </div>

                                <button type='submit' className="btn btn-primary">
                                    Modify product
                                </button>
                            </form >
                        </div >
                    </div >
                </div >}
        </>
    )
}

export const validate = function (input) {
    let errors = {};
    if (input.name) {
        if (!input.name || input.name.length < 2 || typeof input.name !== 'string') {
            errors.name = 'The course name must be at least 2 characters long.';
        } else if (/["`'#%&,:;<>=@{}~$()*+/!?[\]^|]+/.test(input.name)) {
            errors.name = 'The course name can not contain special characters.';
        };
    }
    if (input.description) {
        if (input.description.length < 10) {
            errors.description = 'The description must be at least 10 characters long.';
        };
    }
    if (input.ranking) {
        if (!input.ranking || input.ranking > 5 || input.ranking <= 0 || input.ranking % 1 !== 0 || typeof input.ranking !== 'number') {
            errors.ranking = 'The ranking must be a integer between 1 and 5.';
        };
    }
    if (input.createBy) {
        if (!input.createBy || input.createBy.length < 3 || typeof input.createBy !== 'string') {
            errors.createBy = 'The creator of the course is mandatory information.';
        } else if (/["`'#%&,:;<>=@{}~$()*+/?[\]^|]+/.test(input.createBy)) {
            errors.createBy = 'The creators name can not contain special characters.';
        };
    }
    if (input.image?.name) {
        let extention = input.image?.name.slice(input.image.name.length - 5, input.image.name.length)
        let reg = /(\.jpg|\.jpeg|\.png)$/i
        if (!reg.test(extention)) {
            errors.image = 'The image must be a jpg, jpeg or a png file.';
        }
    }
    if (input.price) {
        if (!input.price || typeof input.price !== 'number' || input.price <= 0) {
            errors.price = 'The price of the course must be completed with the $0.00 USD format and not equal to 0.';
        };
    }
    if (input.stock) {
        if (!input.stock || typeof input.stock !== 'number' || input.stock === 0) {
            errors.stock = 'The course should have at least one vacancy and must be an interger (max 99 vancancies).';
        };
    }
    if (Object.keys(errors).length) {
        return errors;
    } else {
        return {};
    }
};

export default ModificationForm