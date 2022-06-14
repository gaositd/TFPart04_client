import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePermission } from '../../redux/actions';
import styles from './AdminSite.module.css';

export default function Users() {
  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  const getProducts = () => {
    return function (dispatch) {
      return axios.get(`http://localhost:3001/user`)
        .then(resp => dispatch({ type: 'GET_USERS', payload: resp.data }))
        .catch(error => console.log('Action error in getProducts: ', error))
    }
  }

  function handlePermission(e) {
    console.log(e)
    if (e.target.name === 'Admin') {
      dispatch(changePermission({ email: e.target.id, usertype: 'User' }))
    } else {
      dispatch(changePermission({ email: e.target.id, usertype: 'Admin' }))
    }
  }

  return (
    <div>
      <button onClick={() => dispatch(getProducts())}>Refresh users</button>
      <div className="overflow-x-auto w-full z-50">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>User type</th>
              <th>Permissions</th>
            </tr>
          </thead>
          <tbody>
            {users.length ?
              users.map(u => {
                return <tr>

                  <td>
                    <div className="flex items-center space-x-3">
                      {/* <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div> */}
                      <div>
                        <div className="font-bold">{u.nickName}</div>
                        <div className="text-sm opacity-50">{u.country}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {u.usertype}
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                  </td>
                      <th>
                        <button id={u.mail} name={u.usertype} onClick={e => handlePermission(e)}>Change to {u.usertype === 'Admin' ? 'User' : 'Admin'}</button>
                      </th>
                </tr>
              })
              : <p>wuachin</p>
            }
          </tbody>
          {/* <!-- foot --> */}
        </table>
      </div>
      <div>
      </div>
    </div>
  );
};