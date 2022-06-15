import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getuserOrders } from "../../redux/actions";
import axios from "axios";

export default function UserOrder() {
  const { email } = useParams();
  const dispatch = useDispatch();
  const userOrder = useSelector((state) => state.userOrders);
  const ordersheads = userOrder.orders_heads;
  const [Alert, setAlert] = useState({});
  console.log(ordersheads);

  console.log(Alert);

  useEffect(() => {
    dispatch(getuserOrders(email));
  }, [dispatch]);

  const handlechangeStatus = (e) => {
    // setStatus({})
  };

  return (
    <div class="overflow-x-auto w-full">
      <div className="grid justify-items-center">
        <div className="grid justify-items-center rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
          <div className="w-full flex justify-between p-3">
            <div className="flex"></div>
            <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
              <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
            </span>
          </div>
          <div className="px-3 pb-2">
            <div className="pt-2">
              <i className="far fa-heart cursor-pointer"></i>
              <h1 className="text-xl text-orange-700 font-bold">
                {userOrder.firstName} {userOrder.lastName}
              </h1>
              <hr />
            </div>
            <br></br>
            <div className="grid justify-items-start bg-gray-100 p-4 border shadow-md">
              <div className="text-md mb-2 text-orange-700 font-bold">
                Orders:
              </div>
              <div className="pt-1">
                <div className="mb-2 text-sm">{ordersheads.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {ordersheads.length > 1 &&
            ordersheads.map(o => {
              return (
                <tr>
                  <td>
                    <div class="flex items-center space-x-3">
                      <td>
                        <div class="font-bold">
                          {o.orders_pos.length} Products
                        </div>
                      </td>
                    </div>
                  </td>
                  <td>{o.total} ARS </td>
                  <td>{o.status}</td>
                  <td>
                    <button>hola</button>
                  </td>
                </tr>
              );
            })}

          {ordersheads.length < 2 && (
            <tr>
            <td>
              <div class="flex items-center space-x-3">
                <td>
                  <div class="font-bold">
                    {ordersheads.orders_pos.length} Products
                  </div>
                </td>
              </div>
            </td>
            <td>{ordersheads.total} ARS </td>
            <td>{ordersheads.status}</td>
            <td>
              <button>hola</button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
