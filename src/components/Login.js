import React, { useState, useRef } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/Validate'
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState()


  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const navigate = useNavigate()


  const handleClickButton = ()=> {
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)

    if(message) return;
    
    if(!isSignIn){
      createUserWithEmailAndPassword(auth,email.current.value, password.current.value).then((userCredential)=>{
        const user = userCredential.user;
        navigate("/Browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +"-"+ errorMessage)
      })
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
      
      const user = userCredential.user;
      // console.log(user);  
      navigate("/Browse")
  })
  .catch((error) => {
    setErrorMessage("User Not Found")
  });

    }
  }

  const toggleSignInForm = () =>{
    setIsSignIn(!isSignIn)
  }
  return (
  <div>
    <Header />

    <div className='absolute'>
      <img 
      src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg'
      alt='bg'
      />
    </div>

    <form 
      onSubmit={(e)=>e.preventDefault()}
      className='absolute w-4/12 p-12 mx-auto my-36 left-0 right-0 bg-black text-white rounded-lg bg-opacity-75'
    >
      <h1 className='font-bold text-3xl py-4'>
        {isSignIn ? "Sign In" :"Sign Up"}
      </h1>

      {!isSignIn && (
        <input ref={name}
        className="my-4 p-4 rounded-lg w-full bg-gray-600" 
        type='text' 
        placeholder='Name'
      />
      )}
      <input 
        ref={email}
        className="my-4 p-4 rounded-lg w-full bg-gray-600" 
        type='email' 
        placeholder='Email'
      />

      <input 
        ref={password}
        className="my-4 p-4 rounded-lg w-full bg-gray-600" 
        type='password' 
        placeholder='Password'
      />

      <button className='my-6 p-4 rounded-lg bg-red-600 w-full' onClick={handleClickButton}>
        {isSignIn ? "Sign In" :"Sign Up"}
      </button>
      
      <p className='text-red-500 bold'>
        {errorMessage}
      </p>
      <p onClick={toggleSignInForm} className='py-4 cursor-pointer'>
        {isSignIn ? "New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}
      </p>
    </form>

  </div>
  )
}

export default Login