import React from 'react'
import { auth, provider } from '../../firebase'
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const FirebaseSignIn = () => {

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      return await signInWithPopup(auth, provider)
    } catch (error) {
      console.log('Signin with google error: ',error)
    }
  }

  async function handleGoogleSignin() {
    const googleResponse = await signInWithGoogle()
    console.log(googleResponse.user.email)
    if(googleResponse.user.email) {
      localStorage.setItem("user", googleResponse.user.email)
      localStorage.setItem("usertype", 'User')
      navigate('/home')
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