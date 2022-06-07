import React from 'react'

const CartItem = () => {

  let dataCart = JSON.parse(localStorage.getItem("cartProduct"));

  
  const removeOneFromCart = (id) => {
    let dataCart = JSON.parse(localStorage.getItem("cartProduct"));
    let dataCart2 = dataCart.filter(item => item.id !== id);
    localStorage.setItem("cartProduct", JSON.stringify(dataCart2)); 
  }

  const clearCart = () => {
    localStorage.removeItem("cartProduct");
  }

  const buyItems = () => {
    let userLogin = JSON.parse(localStorage.getItem("user"));
    if(!userLogin){
      alert("Please login to buy items");
    }

  }

  return (
    
    <div className=" bg-white w-1/3 shadow-lg rounded-lg overflow-hidden my-10">
    <div className="px-2 py-2">
      <div className="text-gray-900 font-bold text-1xl uppercase divide-y">
      <div>
        <p className="font-bold text-lg grid justify-items-start px-2 py-2">Carrito ({dataCart && dataCart.length}) </p>
        <br/>
      </div>
        {
        dataCart && dataCart.map(product => {
          return (
            <div key={product.id} className="grid grid-cols-2 px-2 py-2">
              <div>
              <h1 className="text-gray-900 grid justify-items-start font-bold text-base uppercase">{product.name}</h1>
              </div>
              <div>
              <p className="text-gray-600 text-sm mt-1">${product.price} USD</p>
              <button onClick={()=> removeOneFromCart(product.id)} className="text-blue-400">Clear Item</button>
              <br/><br/>
            </div>
            </div>
          )
        })}
      </div>
      <hr/>
      <div className="grid grid-clos-2">
        <div className="">
        </div>
        <div className="w-9/12 grid justify-items-end">
      <p className="font-bold text-lg mt-1">Total: {
        dataCart && dataCart.reduce((total, product) => {
          return total + product.price
        }
        , 0)
      } USD</p>
        </div>
        <hr/>
      </div>
      <div className="grid grid-cols-2">
        {
            localStorage.getItem('user') ? <div className="mt-2 grid justify-items-center ">
              <button className="btn btn-primary w-40" onClick={buyItems}>Buy</button>
            </div>
              :
              <div className="mt-2 grid justify-items-center ">
                <button className="btn btn-primary w-40">Login to Buy</button>
              </div>
        }

          {/* <div className="mt-2 grid justify-items-center ">
            <button className="btn btn-primary w-40" onClick={buyItems}>Buy</button>
          </div> */}
          <div>
            <button className="btn btn-primary w-40 m-2" onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem