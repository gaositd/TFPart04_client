import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategories, getProducts, logout } from '../../redux/actions';

import bgimage from "./bg_landing.jpg";
import Login from '../Authentication/Login';
import Signup from '../Authentication/Signup';
import logo from "./Logo.png";

function Landing() {
  const dispatch = useDispatch();

  const [sign, setSign] = useState('')

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])

  const backgroundImageStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
  }

  function handleLogout(e) {
    e.preventDefault()
    dispatch(logout())
  }

  function showLogin() {
    setSign('login')
  }

  function showSignup() {
    setSign('signup')
  }

  return (
    <div className="grid grid-cols-3 gap-4 w-full h-screen">
      <div className="col-start-1 col-end-2 relative">
        <div className="flex flex-row justify-center ">
          <h1 className="font-bold text-3xl p-4 mt-2">CodeCamp</h1>
          <img src={logo} alt='logo' className='w-16 h-16 mt-1' />
        </div>
        <div className="p-0 grid justify-items-center" >
          <NavLink to='/home'>
            <div className="btn btn-accent w[150px]">
              Enter as a guest
            </div>
          </NavLink>
          <div className='mt-8'>
            {sign === '' &&
              <div className='flex justify-center gap-10'>
                {!localStorage.getItem("user") ?
                  <button onClick={showLogin} className='btn btn-secondary w-1/2 mt-4 mb-1'>Login</button>
                  : <button className="btn btn-warning w-1/2 mt-4 mb-1" onClick={handleLogout}>
                    Logout
                  </button>
                }
                <button onClick={showSignup} className='btn btn-secondary w-1/2 mt-4 mb-1'>Sign Up</button>
              </div>
            }
            {sign === 'login' &&
              <div>
                <Login />
                <br />
                <button onClick={() => setSign('')} className='btn btn-accent w-1/3 mt-4 mb-1'>Volver</button>
              </div>
            }
            {sign === 'signup' &&
              <div>
                <Signup />
                <br />
                <button onClick={() => setSign('')} className='btn btn-primary w-1/2'>Go back</button>
              </div>
            }
          </div>
        </div>
        <br />
        <br />
        <div className="p-5 text-xs absolute inset-x-0 bottom-0">
          <p>
            © 2022 Henry Part Time 04. Copyrights belongs to humanity...
          </p>
        </div>
      </div>
      <div className="col-start-2 col-span-2 " style={backgroundImageStyle} >
      </div>
    </div>
  );
};

export default Landing;