import React from 'react'
import CartItem from './CartItem.jsx'


const ShoppingCart = () => {
  
  return (
    <div className="grid justify-items-center w-full h-full ">
          <div className="w-2/3 grid justify-items-center h-full">
          <CartItem />
          </div>
        {/* <button className="btn btn-primary" onClick={clearCart}>Clear Cart</button> */}
    </div>
  )
}

export default ShoppingCart

