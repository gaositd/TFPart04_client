import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, createProduct, getProducts, loadingImage } from '../../redux/actions';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function ProductCreationForm() {
    let uploadPreset = 'd9vdlmyy'
    let cloudName = 'da42wdmjv'
    const dispatch = useDispatch();
    const allCategories = useSelector(state => state.categories);
    const loading = useSelector(state => state.imageLoading);
    const navigate = useNavigate()

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
        categories: '',
        stock: null,
    });

    useEffect(() => {
        if (!allCategories.length) {
            dispatch(getCategories())
        };
    }, [dispatch, allCategories.length]);

    const handleInputChange = function (e) {
        let data;
        if (e.target.name === 'image') {
            data = e.target.files[0];
        }
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

    const handleSubmit = async function (e) {
        e.preventDefault();
        if (Object.keys(errors).length !== 0) return alert('Please, fill all the information correctly')
        if ((input.name && input.description && input.image && input.ranking && input.price && input.categories.length && input.stock) && Object.keys(errors).length === 0) {
            try {
                dispatch(loadingImage(true));
                const formData = new FormData();
                formData.append('file', input.image);
                formData.append('upload_preset', uploadPreset);
                axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, formData)
                    .then(resp => {
                        let data = {
                            ...input,
                            image: resp.data.public_id
                        }
                        dispatch(createProduct(data));
                        dispatch(getProducts());
                        e.target.reset();
                    }).then(res => {
                        navigate('/home')
                    })
            } catch (err) {
                console.log(err.message);
            }
        } else {
            alert('All the fields are mandatory!');
        }
    };
    console.log(errors, input)
    return (
        <>
            {loading ?
                <>
                    <div class="alert shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>Creating product, please wait until you're redirected</span>
                        </div>
                    </div>
                </>
                :
                <div>
                    <h1 className="font-bold text-lg pb-5">Create your course</h1>

                    <div className="flex flex-col justify-center items-center">
                        <form onSubmit={handleSubmit} >
                            <div className="flex flex-col justify-center items-center" >
                                <label>Course name:</label>
                                <div className="tooltip tooltip-right tooltip-warning max-w-xs p-1" data-tip="required">
                                    <div class="flex flex-row items-center justify-center indicator">
                                        <input name="name" onChange={handleInputChange} placeholder="Product's name" class="input input-bordered input-accent w-full max-w-xs" />
                                    </div>
                                </div>
                                {errors.name ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.name}</span> : ''}<br />

                                <label>Description:</label>
                                <div class="flex flex-row items-center justify-center indicator ">
                                    <div className="tooltip tooltip-right tooltip-warning w-18 p-1 " data-tip="required">
                                        <textarea
                                            class="textarea textarea-accent"
                                            placeholder="What`s the course about"
                                            name="description"
                                            onChange={handleInputChange}
                                            rows='3'
                                            cols='40' >
                                        </textarea>
                                    </div>
                                </div>
                                {errors.description ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.description}</span> : ''}<br />

                                <label>Image:</label>
                                <label className={input.image?.name ? "btn btn-success w-[150px] cursor-pointer" : "btn btn-secondary w-full max-w-xs cursor-pointer"}>
                                    {input.image?.name ? "Image Selected" : "Select an image from your device"}
                                    <input type='file' accept=".png, .jpg, .jpeg" name="image" onChange={handleInputChange} className="bg-transparent w-full max-w-xs cursor-pointer hidden" />
                                </label>
                                {errors.image ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.image}</span> : ''}<br />

                                <label>ranking:</label>
                                <div className="tooltip tooltip-right tooltip-warning max-w-xs p-1" data-tip="required">
                                    <div class="flex flex-row items-center justify-center indicator">
                                        <input name="ranking" onChange={handleInputChange} placeholder="Ranking" class="input input-bordered input-accent w-full max-w-xs" />
                                    </div>
                                </div>
                                {errors.ranking ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.ranking}</span> : ''}<br />

                                <label>Created by:</label>
                                <div className="tooltip tooltip-right tooltip-warning max-w-xs p-1" data-tip="required">
                                    <div class="flex flex-row items-center justify-center indicator">
                                        <input name="createBy" onChange={handleInputChange} placeholder="Created by" class="input input-bordered input-accent w-full max-w-xs" />
                                    </div>
                                </div>
                                {errors.createBy ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.createBy}</span> : ''}<br />

                                <label>Price:</label>
                                <div className="tooltip tooltip-right tooltip-warning max-w-xs p-1" data-tip="required">

                                    <div className="flex flex-row items-center justify-center indicator">
                                        <input name="price" onChange={handleInputChange} placeholder="0.00 USD" className="input input-bordered input-accent w-full max-w-xs" />
                                    </div>
                                </div>
                                {errors.price ? <span className="indicator-item indicator-middle indicator-center badge badge-warning">{errors.price}</span> : ''}<br />
                                <label>Vacancies:</label>
                                <div className="tooltip tooltip-right tooltip-warning max-w-xs p-1" data-tip="required">
                                    <div class="flex flex-row items-center justify-center indicator">
                                        <input name="stock" onChange={handleInputChange} placeholder="Stock available" class="input input-bordered input-accent w-full max-w-xs" />
                                    </div>
                                </div>
                                {errors.stock ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.stock}</span> : ''}<br />

                                <label>Categories:</label>
                            </div>
                            <div className="tooltip tooltip-right tooltip-warning max-w-xs" data-tip="required">
                                {errors.categories ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.categories}</span> : null}<br />

                                <div className="flex flex-row flex-wrap justify-between w-[21rem]">
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
                            </div><br></br>
                            <button type='submit' class="btn btn-primary mb-5 mt-5">
                                Create product
                            </button>
                        </form>
                    </div>
                </div >
            }
        </>);
};

export const validate = function (input) {
    let errors = {};
    if (input.name) {
        if (!input.name || input.name.length < 1 || typeof input.name !== 'string') {
            errors.name = 'The course name must be at least 2 characters long.';
        } else if (/["`!'#%&,:;<>=@{}~$()*+/?[\]^|]+/.test(input.name)) {
            errors.name = 'The course name can not contain special characters.';
        };
    };
    if (input.description) {
        if (input.description.length < 10) {
            errors.description = 'The description must be at least 10 characters long.';
        };
    };
    if (input.ranking) {
        if (!input.ranking || input.ranking > 5 || input.ranking < 0 || input.ranking % 1 !== 0 || typeof input.ranking !== 'number') {
            errors.ranking = 'The ranking must be a integer between 0 and 5.';
        };
    };
    if (input.categories) {
        if (input.categories.length < 1) {
            errors.categories = 'The curse must have at least one category.';
        };
    };
    if (input.image?.name) {
        let extention = input.image?.name.slice(input.image.name.length - 5, input.image.name.length)
        let reg = /(\.jpg|\.jpeg|\.png)$/i
        if (!reg.test(extention)) {
            errors.image = 'The image must be a jpg, jpeg or a png file.';
        }
    }
    if (input.createBy) {
        if (!input.createBy || input.createBy.length < 3) {
            errors.createBy = 'The creator of the course is mandatory information.';
        } else if (/["`'#%&,:;<>=@{}~$()*+/?[\]^|]+/.test(input.createBy)) {
            errors.createBy = 'The course name can not contain special characters.';
        };
    };
    if (input.price) {
        if (!input.price || typeof input.price !== 'number' || input.price < 0) {
            errors.price = 'The price of the course must be completed with the $0.00 USD format.';
        };
    };
    if (input.stock) {
        if (!input.stock || typeof input.stock !== 'number') {
            errors.stock = 'The course should have at least one vacancy and lower than 100.';
        };
    };
    return errors;
};


export default ProductCreationForm;