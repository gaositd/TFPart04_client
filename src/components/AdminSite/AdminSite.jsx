import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateCategory from '../CreateCategory/CreateCategory';
import styles from './AdminSite.module.css';

export default function AdminSite() {
  const dispatch = useDispatch()

  const users = useSelector(state => state.users)
  console.log('users en state: ', users.map(u => {
    console.log('mi user 1', u)
  }))

  const getProducts = () => {
    return function (dispatch) {
      return axios.get(`http://localhost:3001/user`)
        .then(resp => dispatch({ type: 'GET_USERS', payload: resp.data }))
        .catch(error => console.log('Action error in getProducts: ', error))
    }
  }

  return (
    <div>
      <button onClick={() => dispatch(getProducts())}>Traeme rey</button>
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
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.length ?
              users.map(u => {
                return <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{u.nickName}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              })
              : <p>wuachin</p>
            }
          </tbody>
          {/* <!-- foot --> */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>

        </table>
      </div>
      <div>
        <CreateCategory />
      </div>
    </div>
  );
};