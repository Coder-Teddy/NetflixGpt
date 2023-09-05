import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)

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

    <form className='absolute w-4/12 p-12 mx-auto my-36 left-0 right-0 bg-black text-white rounded-lg bg-opacity-75'>
      <h1 className='font-bold text-3xl py-4'>
        {isSignIn ? "Sign In" :"Sign Up"}
      </h1>

      {!isSignIn && (
        <input 
        className="my-4 p-4 rounded-lg w-full bg-gray-600" 
        type='text' 
        placeholder='Name'
      />
      )}
      <input 
        className="my-4 p-4 rounded-lg w-full bg-gray-600" 
        type='email' 
        placeholder='Email'
      />

      <input 
        className="my-4 p-4 rounded-lg w-full bg-gray-600" 
        type='password' 
        placeholder='Password'
      />

      <button className='my-6 p-4 rounded-lg bg-red-600 w-full'>
        {isSignIn ? "Sign In" :"Sign Up"}
      </button>

      <p onClick={toggleSignInForm} className='py-4 cursor-pointer'>
        {isSignIn ? "New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}
      </p>
    </form>

  </div>
  )
}

export default Login