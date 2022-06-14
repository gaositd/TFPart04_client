import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getorder } from "../../redux/actions";
import axios from "axios";



export default function Orders() {
  const dispatch = useDispatch();
  const allorders = useSelector((state) => state.orders);



  useEffect(() => {
    dispatch(getorder(1));
  }, [dispatch]);

  return (
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>User</th>
            <th>User Orders</th>
            <th> </th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {allorders &&
            allorders.map((order) => {
              return (
                  <tr>
                    <td>
                      <div class="flex items-center space-x-3">
                        <div class="avatar"></div>
                        <div>
                        <NavLink to={`/userOrder/${order}`}>
                          <div class="font_bold">
                            {order}
                            </div>
                        </NavLink>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="font_bold"> view Orders</div>
                    </td>
                    <td>

                    </td>
                    <td>

                    </td>
                    <th>

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
