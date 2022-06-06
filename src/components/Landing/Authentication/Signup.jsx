import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signUp } from '../../../redux/actions';
import { validateSignup } from './validateSignup';
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userSignup, setUserSignup] = useState({ email: '', password: '', nickName: '', firstName: '', lastName: '', phone: '', address: '', birthdate: '', country: '' })
  const [errors, setErrors] = useState('')

  function signUpChange(e) {
    setErrors(validateSignup({ ...userSignup, [e.target.name]: e.target.value }))
    setUserSignup({ ...userSignup, [e.target.name]: e.target.value })
  }
  console.log('userSignup: ',userSignup)
  async function handleSignUp(e) {
    e.preventDefault()
    if (Object.keys(errors).length) {
      return alert('Please fill the right way')
    }
    await dispatch(signUp(userSignup))
    await dispatch(login(userSignup))
    if (localStorage.user) {
      navigate('/home')
    }
    setUserSignup({ email: '', password: '' })
  }

  return (
    <div className='border-solid border-2 border-sky-500 p-2'>
      {Object.keys(errors).length ? <p>{errors}</p> : null}
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
        type="text" placeholder='Email'
        onChange={signUpChange} name='email' value={userSignup.email} />
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="password" placeholder='Password'
        onChange={signUpChange} name='password' value={userSignup.password} />
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="text" placeholder='Nickname'
        onChange={signUpChange} name='nickName' value={userSignup.nickName} />
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="text" placeholder='First name'
        onChange={signUpChange} name='firstName' value={userSignup.firstName} />
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="text" placeholder='Last name'
        onChange={signUpChange} name='lastName' value={userSignup.lastName} />
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="text" placeholder='Phone'
        onChange={signUpChange} name='phone' value={userSignup.phone} />
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="text" placeholder='Address'
        onChange={signUpChange} name='address' value={userSignup.address} />
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="text" placeholder='Birthdate'
        onChange={signUpChange} name='birthdate' value={userSignup.birthdate} />
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="text" placeholder='Country'
        onChange={signUpChange} name='country' value={userSignup.country} />
      <br />
      <button className="box-border w-40 bg-amber-700 text-white p-2 rounded-xl" onClick={handleSignUp}>
        Sign up
      </button>
    </div>
  );
};