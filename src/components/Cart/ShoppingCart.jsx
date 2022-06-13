import React from 'react'
import CartItem from './CartItem.jsx'


const ShoppingCart = () => {
  
  return (
    <div className=" w-full h-full grid justify-items-center ">
          <div className="w-full grid justify-items-center">
          <CartItem />
          </div>
        {/* <button className="btn btn-primary" onClick={clearCart}>Clear Cart</button> */}
    </div>
  )
}

export default ShoppingCart

