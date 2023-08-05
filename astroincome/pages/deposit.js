import React from 'react'
import Navbar from '../Components/Navbar'

function deposit() {
  return (
    <div>
        <Navbar/>
        <div className=''>
            <div className='container mx-auto mx-5 my-5 ' >
                <button className='bg-blue-200 p-4 rounded'>Go back</button>
                <div className='container mx-auto  w-2/5' >
                <h1 className='text-xl  md:text-4xl font-bold'>Fund Your Wallet</h1>
                <form className='mt-4'>
                    <label className='block text-purple-700  text-sm font-bold mb-2 ' >Amount</label>
                    <div className='w-full mb-4'>
                        <input  className='bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight
          focus:outline-none focus:bg-white focus:border-purple-500' type='number'></input>
                    </div>
                    <button className='text-white p-4 font-bold rounded-tl-lg w-full hover:bg-purple-400' style={{backgroundColor:'#6E00FF'}}>Pay Now</button>
                </form>

                

                </div>
                
            </div>

        </div>
    </div>
  )
}

export default deposit