import React, { useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { getorderbyid} from "../../redux/actions";



export default function OrderDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const orderDetails = useSelector((state) => state.orderDet)
    const orderSingle = orderDetails.orders_pos

    useEffect(() => {
        dispatch(getorderbyid(id));
      }, [dispatch]);


  return (
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orderSingle && orderSingle.map(o => {
            return (
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <td>
                    <NavLink to={`/details/${o.idProduct}`}>
                        <div class="font-bold">{o.description}</div>
                      </NavLink>
                    </td>
                  </div>
                </td>
                <td>{o.price} ARS</td>
                <td>{o.createdAt.slice(0, 10)}</td>
                <td>
                <NavLink to={`/modificationForm/${o.id}`}>
                      <button class="btn btn-ghost btn-xs">Leave Review</button>
                    </NavLink>
                </td>
              </tr>
            );

          })
            }
        </tbody>
        {/* <!-- foot --> */}
      </table>
    </div>
  );
}
