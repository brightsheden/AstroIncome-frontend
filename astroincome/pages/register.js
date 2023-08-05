import React from 'react'

export default function register() {
  return (
    <div className='mainBackground h-screen' >
      <div className=' container  mx-auto ' style={{maxWidth:'950px'}}>
      <div className='p-5'>
        <div className='bg-white  ml-20  text-center' style={{width:'50%',padding:'10px'}}>
          <p className='text-3xl font-bold w-50 ' >ASTROINCOME</p>

        </div>

        <form className='bg-white mt-4 p-5  w-50'>
          <div className='text-center'>
          <h3 className='text-purplr-500 text-2xl'>Create Account</h3>
          </div>
          <div className='block'>
          <label className='block text-grey-700  text-sm font-bold mb-2 ' for='email'>Username</label>
          <div className='w-full'>
          <input className='bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight
          focus:outline-none focus:bg-white focus:border-purple-500' type='text' placeholder='enter your username' id='inline-full-name'></input>

          </div>
          


          <label className='block text-grey-700  text-sm font-bold mb-2 ' for='email'>Your Email</label>
          <div className='w-full'>
          <input className='bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight
          focus:outline-none focus:bg-white focus:border-purple-500' type='email' placeholder='enter your mail' id='inline-full-name'></input>

          </div>
          
          <label className='block text-grey-700  text-sm font-bold mb-2 ' for='email'>Password</label>
          <div className='  w-full'>
          <input className='bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight
          focus:outline-none focus:bg-white focus:border-purple-500' type='text' placeholder='enter your password' id='inline-password' />

          </div>

          <label className='block text-grey-700  text-sm font-bold mb-2 ' for='email'>Confirm Password</label>
          <div className='  w-full'>
          <input className='bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight
          focus:outline-none focus:bg-white focus:border-purple-500' type='text' placeholder='confirm password' id='inline-password' />

          </div>

          <div className='mt-5 '>
          <button className='text-white p-4 font-bold rounded-tl-lg w-full hover:bg-purple-400' style={{backgroundColor:'#6E00FF'}}>Sign In</button>
          </div>


          

          </div>

          <div className='text-center mt-5'>
            <p className='text-sm'>have an account? Sign In</p>
            <p className='text-sm mt-5'>© Copyright 2023   ASTROINCOME   All Rights Reserved.</p>
          </div>
         
        </form>

      </div>

      </div>
      
    </div>
  )
}
