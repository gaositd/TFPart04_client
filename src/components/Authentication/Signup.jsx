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
    <div className='border-solid border-2 border-accent p-2 w-[300px] rounded-lg'>
      <div className="tooltip tooltip-right tooltip-warning w-full max-w-xs" data-tip="required">
        <input className="input input-bordered input-secondary w-full max-w-xs mt-1"
          type="text" placeholder='Email'
          onChange={signUpChange} name='email' value={userSignup.email} />
        {errors.email && userSignup.email ? <span class="indicator-item indicator-middle indicator-center badge badge-warning w-[260px] rounded-lg mt-2">{errors.email}</span> : ''}<br />
      </div>

      <div className="tooltip tooltip-right tooltip-warning w-full max-w-xs" data-tip="required">
        <input className="input input-bordered input-secondary w-full max-w-xs mt-4"
          type="password" placeholder='Password'
          onChange={signUpChange} name='password' value={userSignup.password} />
        {errors.password && userSignup.password ? <span class="indicator-item indicator-middle indicator-center badge badge-warning w-[260px] h-[60px] rounded-lg mt-2">{errors.password}</span> : ''}<br />
      </div>

      <div className="tooltip tooltip-right tooltip-warning w-full max-w-xs" data-tip="required">
        <input className="input input-bordered input-secondary w-full max-w-xs mt-4"
          type="text" placeholder='Nickname'
          onChange={signUpChange} name='nickName' value={userSignup.nickName} />
        {errors.nickName && userSignup.nickName ? <span class="indicator-item indicator-middle indicator-center badge badge-warning w-[260px] h-[40px] rounded-lg mt-2">{errors.nickName}</span> : ''}<br />
      </div>

      <div className="tooltip tooltip-right tooltip-warning w-full max-w-xs" data-tip="required">
        <input className="input input-bordered input-secondary w-full max-w-xs mt-4"
          type="text" placeholder='First name'
          onChange={signUpChange} name='firstName' value={userSignup.firstName} />
        {errors.firstName && userSignup.firstName ? <span class="indicator-item indicator-middle indicator-center badge badge-warning w-[260px] h-[40px] rounded-lg mt-2">{errors.firstName}</span> : ''}<br />

      </div>

      <div className="tooltip tooltip-right tooltip-warning w-full max-w-xs" data-tip="required">
        <input className="input input-bordered input-secondary w-full max-w-xs mt-4"
          type="text" placeholder='Last name'
          onChange={signUpChange} name='lastName' value={userSignup.lastName} />
        {errors.lastName && userSignup.lastName ? <span class="indicator-item indicator-middle indicator-center badge badge-warning w-[260px] h-[40px] rounded-lg mt-2">{errors.lastName}</span> : ''}<br />
      </div>

      <div className="tooltip tooltip-right tooltip-warning w-full max-w-xs" data-tip="required">
        <input className="input input-bordered input-secondary w-full max-w-xs mt-4"
          type="tel" placeholder='Phone'
          onChange={signUpChange} name='phone' value={userSignup.phone} />
        {errors.phone && userSignup.phone ? <span class="indicator-item indicator-middle indicator-center badge badge-warning w-[260px] h-9 rounded-lg mt-2">{errors.phone}</span> : ''}<br />

      </div>
      <div className="tooltip tooltip-right tooltip-warning w-full max-w-xs" data-tip="required">
        <input className="input input-bordered input-secondary w-full max-w-xs mt-4"
          type="date" placeholder='Birthdate'
          onChange={signUpChange} name='birthdate' value={userSignup.birthdate} />
        {errors.birthdate && userSignup.birthdate ? <span class="indicator-item indicator-middle indicator-center badge badge-warning w-[260px] rounded-lg mt-2">{errors.birthdate}</span> : ''}<br />
      </div>

      <div className="tooltip tooltip-right tooltip-warning w-full max-w-xs" data-tip="required">
        <input className="input input-bordered input-secondary w-full max-w-xs mt-4"
          type="text" placeholder='Country'
          onChange={signUpChange} name='country' value={userSignup.country} />
        {errors.country && userSignup.country ? <span class="indicator-item indicator-middle indicator-center badge badge-warning w-[260px] rounded-lg mt-2 ">{errors.country}</span> : ''}<br />
      </div>

      <br />
      <button className="btn btn-secondary w-1/2 mt-4 mb-1" onClick={handleSignUp}>
        Sign up
      </button>
    </div>
  );
};

