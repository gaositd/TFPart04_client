import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartItems } from '../../redux/actions';



function ProductIndividualCard({
    id,
    name,
    price,
    image,
    categories,
    ranking,
}) {
    const dispatch = useDispatch();

    let addcar = { id, name, price };

    const addToCart = (addcar) => {

        let prodCart = [];
        prodCart = JSON.parse(localStorage.getItem('cartProduct')) || [];

        let exist = false;
        prodCart.forEach(item => {
            if (item.idProduct === addcar.id) {
                exist = true;
            }

        });

        if (!exist) {
            dispatch(cartItems(prodCart.length + 1))
            prodCart.push({ idProduct: addcar.id, description: addcar.name, price: addcar.price });
            localStorage.setItem(`cartProduct`, JSON.stringify(prodCart));
            console.log(prodCart);
        } else if (exist) {
            alert('Producto ya existe en el carrito');
        }
    }

    const imageName = image.includes('product') ?
        '../../img_products/' + image + '.jpg' :
        `https://res.cloudinary.com/da42wdmjv/image/upload/v1654727380/${image}`


    return (
        <>

            <div class="card card-compact w-96 bg-orange-100 shadow-xl my-4">
                <NavLink to={`/details/${id}`}>
                    <figure><img src={imageName} /></figure>
                </NavLink>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="grid grid-cols-2 justify-items-start">
                        <div>Categories: </div>
                        <div><p>{categories}</p></div>
                    </div>
                    <div className="grid grid-cols-2 justify-items-start">
                        <div>Price: </div>
                        <div><p>{price} USD</p></div>
                    </div>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => addToCart(addcar)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductIndividualCard;