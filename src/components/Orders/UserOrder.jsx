import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getuserOrders } from "../../redux/actions";
import axios from "axios";



export default function UserOrder() {
    const {email} = useParams();
    const dispatch = useDispatch();
    const userOrder = useSelector((state)=> state.userOrders.orders_heads)
    console.log(userOrder.length)

    useEffect(() => {
        dispatch(getuserOrders(email));
      }, [dispatch]);


  return (
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>User</th>
            <th>Products</th>
            <th>Price</th>
            <th>Status</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {userOrder &&
            (order => {
              return (
                <tr>
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div>
                          {order.status === "cancelle" && (
                            <th>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </th>
                          )}
                          {order.status === "pending" && (
                            <th>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                              </svg>
                            </th>
                          )}
                          {order.status === "complete" && (
                            <th>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </th>
                          )}
                        </div>
                      </div>
                      <div>
                        <div>{order.userEmail}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <NavLink to={`/OrderDetail/${order.id}`}>
                      <div class="font_bold">
                        {order.orders.length} courses purchased
                      </div>
                    </NavLink>
                  </td>
                  <td>
                    {order.total}
                    {order.currency}
                  </td>
                  <td>
                    <div class="dropdown dropdown-hover">
                      <label tabindex="0" class="btn m-1">
                      {order.status}
                      </label>
                      <ul
                        tabindex="0"
                        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a>Item 1</a>
                        </li>
                        <li>
                          <a>Item 2</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <th>
                    {order.status === "pending" && (
                      <th>
                        <button class="btn btn-ghost btn-xs">Cancelle</button>
                      </th>
                    )}
                    {order.status === "complete" && <th></th>}
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
