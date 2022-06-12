import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signUp } from '../../redux/actions';
import { validateSignup } from './validateSignup';
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userSignup, setUserSignup] = useState({
    email: '',
    password: '',
    nickName: '',
    firstName: '',
    lastName: '',
    phone: '',
    birthdate: '',
    country: ''
  });

  const [errors, setErrors] = useState('')

  function signUpChange(e) {
    setErrors(validateSignup({ ...userSignup, [e.target.name]: e.target.value }))
    setUserSignup({ ...userSignup, [e.target.name]: e.target.value })
  }

  console.log('userSignup: ', userSignup)

  async function handleSignUp(e) {
    e.preventDefault()
    let actualInput = Object.keys(userSignup);
    let isValid = true;
    actualInput.forEach(key => {
      if (userSignup[key].includes(' ')) {
        isValid = false;
        return;
      };
    })
    if (!isValid) return alert('No blank spaces allowed!');
    if (Object.keys(errors).length) {
      return alert('Please, complete all the fields with the correct information')
    }
    await dispatch(signUp(userSignup))
    if (localStorage.user) {
      navigate('/home')
    }
    setUserSignup({ email: '', password: '', nickName: '', firstName: '', lastName: '', phone: '', birthdate: '', country: '' })
  }

  return (
    <div className='border-solid border-2 border-sky-500 p-2'>
      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
        type="text" placeholder='Email'
        onChange={signUpChange} name='email' value={userSignup.email} />
      {errors.email && userSignup.email ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.email}</span> : ''}<br />

      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="password" placeholder='Password'
        onChange={signUpChange} name='password' value={userSignup.password} />
      {errors.password && userSignup.password ? <span class="indicator-item indicator-middle indicator-center badge badge-warning w-60 h-[60px]">{errors.password}</span> : ''}<br />

      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="text" placeholder='Nickname'
        onChange={signUpChange} name='nickName' value={userSignup.nickName} />
      {errors.nickName && userSignup.nickName ? <span class="indicator-item indicator-middle indicator-center badge badge-warning w-60 h-9">{errors.nickName}</span> : ''}<br />


      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="text" placeholder='First name'
        onChange={signUpChange} name='firstName' value={userSignup.firstName} />
      {errors.firstName && userSignup.firstName ? <span class="indicator-item indicator-middle indicator-center badge badge-warning w-60 h-[40px]">{errors.firstName}</span> : ''}<br />

      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="text" placeholder='Last name'
        onChange={signUpChange} name='lastName' value={userSignup.lastName} />
      {errors.lastName && userSignup.lastName ? <span class="indicator-item indicator-middle indicator-center badge badge-warning w-60 h-[40px]">{errors.lastName}</span> : ''}<br />

      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="tel" placeholder='Phone'
        onChange={signUpChange} name='phone' value={userSignup.phone} />
      {errors.phone && userSignup.phone ? <span class="indicator-item indicator-middle indicator-center badge badge-warning w-60 h-9">{errors.phone}</span> : ''}<br />

      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="date" placeholder='Birthdate'
        onChange={signUpChange} name='birthdate' value={userSignup.birthdate} />
      {errors.birthdate && userSignup.birthdate ? <span class="indicator-item indicator-middle indicator-center badge badge-warning ">{errors.birthdate}</span> : ''}<br />

      <input className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
          focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none justify-center"
        type="text" placeholder='Country'
        onChange={signUpChange} name='country' value={userSignup.country} />
      {errors.country && userSignup.country ? <span class="indicator-item indicator-middle indicator-center badge badge-warning">{errors.country}</span> : ''}<br />

      <br />
      <button className="box-border w-40 bg-amber-700 text-white p-2 rounded-xl" onClick={handleSignUp}>
        Sign up
      </button>
    </div>
  );
};

