import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePermission, getUsers } from '../../redux/actions';
import CreateCategory from '../CreateCategory/CreateCategory';
import styles from './AdminSite.module.css';

export default function Users() {
  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  async function handlePermission(e) {
    if (e.target.name === 'Admin') {
      await dispatch(changePermission({ email: e.target.id, usertype: 'User' }))
    } else {
      await dispatch(changePermission({ email: e.target.id, usertype: 'Admin' }))
    }
    dispatch(getUsers())
  }

  return (
    <div>
      <button onClick={() => dispatch(getUsers())}>Refresh users</button>
      <div className="overflow-x-auto w-full z-50">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Permissions</th>
              <th>Name</th>
              <th>User type</th>
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
                  <th>
                    <button id={u.mail} name={u.usertype} onClick={e => handlePermission(e)}>Change to {u.usertype === 'Admin' ? 'User' : 'Admin'}</button>
                  </th>
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
                </tr>
              })
              : <p>wuachin</p>
            }
          </tbody>
          {/* <!-- foot --> */}
          <tfoot>
            <tr>
              <th></th>
              <th>Permissions</th>
              <th>Name</th>
              <th>User type</th>
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