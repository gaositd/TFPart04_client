import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions';
import { validateLogin } from './validateLogin';
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState('')

  function loginChange(e) {
    setErrors(validateLogin({ ...userLogin, [e.target.name]: e.target.value }))
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
  }

  async function handleLogin(e) {
    e.preventDefault()
    let actualInput = Object.keys(userLogin);
    let isValid = true;
    actualInput.forEach(key => {
      if (userLogin[key].includes(' ')) {
        isValid = false;
        return;
      };
    });
    if (!isValid) return alert('No blank spaces allowed!');
    if (Object.keys(errors).length) {
      return alert('Please fill the right way')
    }
    await dispatch(login(userLogin))
    if (localStorage.user) {
      navigate('/home')
    }
    setUserLogin({ email: '', password: '' })
  }

  return (
    <div className='border-solid border-2 border-accent p-2 w-[300px] rounded-lg'>
      <div className="tooltip tooltip-right tooltip-warning w-full max-w-xs" data-tip="required">
        <input className="input input-bordered input-secondary w-full max-w-xs mt-1 "
          type="text" placeholder='User' onChange={loginChange} name='email' value={userLogin.email} />
        {Object.keys(errors).length ? <span class="indicator-item indicator-middle indicator-center badge badge-warning w-[260px] h-9 rounded-lg mt-2">{errors}</span> : ''}
      </div>

      <div className="tooltip tooltip-right tooltip-warning w-full max-w-xs" data-tip="required">
        <input className="input input-bordered input-secondary w-full max-w-xs mt-4"
          type="password" placeholder='Password'
          onChange={loginChange} name='password' value={userLogin.password} />
      </div>
      <br />
      <button className="btn btn-secondary w-1/3 mb-1 mt-4" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};