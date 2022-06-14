import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import axios from "axios";



export default function ProductTable(alerta) {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);


  async function deletePost(id) {
    await axios.delete(`http://localhost:3001/product/delete/${id}`);
    alert('Delete successful');
    window.location.reload(true);
  }


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(allProducts);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {allProducts &&
            allProducts.map((product) => {
              return (
                <tr key={product.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product.image} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{product.categories}</td>
                  <td>${product.price}</td>
                  <th>
                    <NavLink to={`/details/${product.id}`}>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </NavLink>
                  </th>
                  <th>
                  <button onClick={()=> deletePost(product.id)}>
                  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                  </svg>
                  </button>

                  </th>
                </tr>
              );
            })}
        </tbody>
        {/* <!-- foot --> */}
      </table>
    </div>
  );
}
