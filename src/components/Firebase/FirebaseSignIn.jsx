import React from 'react'
import { auth, provider } from '../../firebase'
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/actions';

const FirebaseSignIn = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      return await signInWithPopup(auth, provider)
    } catch (error) {
      console.log('Signin with google error: ', error)
    }
  }

  async function handleGoogleSignin() {
    const googleResponse = await signInWithGoogle()
    console.log(googleResponse)
    if (googleResponse.user.email) {
      const googleUser = {
        email: googleResponse.user.email,
        password: googleResponse.user.uid.slice(0,10),
        nickName: googleResponse.user.email.split('@')[0]
      }
      await dispatch(signUp(googleUser))
      if (localStorage.user) {
        navigate('/home')
      }
    } else alert('No response from google')
    // await dispatch(login(googleResponse.user.email))
    // if (localStorage.user) {
    // navigate('/home')
    // }
  }

  return (
    <button onClick={handleGoogleSignin} className='box-border w-40 bg-cyan-600 text-white p-2 rounded-xl'>Sign in with Google</button>
  )
}

export default FirebaseSignIn