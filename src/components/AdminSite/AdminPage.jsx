import React from "react";
import ProductTable from "./ProductTable";
import CreateCategory from '../CreateCategory/CreateCategory';
import ProductCreationForm from '../ProductCreationForm/ProductCreationForm';
import { useState } from "react";
import Users from "./Users";
import NotFound from "../NotFound/NotFound";


export default function AdminPage() {
  const [Alert, setAlert] = useState(false);
  const [Page, setPage] = useState('course');

  function HandlePage(e) {
    if (e === 'course') setPage('course')
    else if (e === 'CreateCategory') setPage('CreateCategory')
    else if (e === 'CreateCourse') setPage('CreateCourse')
    else if (e === 'Users') setPage('Users')
  }

  function alerta() {
    setAlert(true);
    setTimeout(function () {
      setAlert(false);
    }, 1000);
  }

  if (window.location.href === 'http://localhost:3000/admin' && localStorage.usertype !== 'Admin') {
    return <NotFound />
  }

  return (
    <div>
      <div>
        {Alert ? (<div className="alert alert-success shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>course successfully removed!</span>
          </div>
        </div>) : (<h1>Tabla de admin</h1>)}
      </div>
      <div className="flex flex-row">
        {/* //------------------------- menu lateral ------------------------------------- */}
        <div>
          <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded grey:bg-gray-800">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => HandlePage('course')}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3">Courses</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => HandlePage('CreateCategory')}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    <span className="ml-3">Create category</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => HandlePage('CreateCourse')}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                      <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                    </svg>
                    <span className="ml-3">Create course</span>
                    {/* <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  3
                </span> */}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => HandlePage('Users')}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-3">Users</span>
                  </button>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* //---------------------------------------- tabla ---------------------------------- */}
        <div className="flex-auto">
          {Page === 'course' &&
            <div>
              <ProductTable />
            </div>}
          {Page === 'CreateCategory' &&
            <div>
              <CreateCategory />
            </div>
          }
          {Page === 'CreateCourse' &&
            <div>
              <ProductCreationForm />
            </div>
          }
          {Page === 'Users' &&
            <div>
              <Users />
            </div>
          }
        </div>


      </div>
    </div>
  );
}
