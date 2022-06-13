import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePermission, deleteUser, getUsers } from '../../redux/actions';
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

  async function handleDelete(e) {
    await dispatch(deleteUser(e.target.id))
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
              <th>Delete</th>
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
                    <button id={u.email} name={u.usertype} onClick={e => handlePermission(e)}>Change to {u.usertype === 'Admin' ? 'User' : 'Admin'}</button>
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
                  <td>
                    <button name={u.usertype} onClick={e => handleDelete(e)}>
                      <svg
                        id={u.email}
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          id={u.email}
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              })
              : <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>
                  <button></button>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">No users loaded</div>
                    </div>
                  </div>
                </td>
              </tr>
            }
          </tbody>
          {/* <!-- foot --> */}
          <tfoot>
            <tr>
              <th></th>
              <th>Permissions</th>
              <th>Name</th>
              <th>User type</th>
              <th>Delete</th>
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