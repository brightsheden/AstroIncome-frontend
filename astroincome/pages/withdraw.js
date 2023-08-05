import React from 'react'
import { FaExclamation } from 'react-icons/fa'
import Navbar from '../Components/Navbar'

function withdraw() {
  return (
    <div>
        <Navbar/>
        <div className=''>
            <div className='container mx-auto mx-5 my-5 ' >
                <button className='bg-blue-200 p-4 rounded'>Go back</button>
                <div className='container mx-auto  w-2/5' >
                <h1 className='text-xl  md:text-4xl font-bold'>Apply For Withdrawal</h1>
                <div className='flex mt-5 items-center bg-blue-500 text-white text-sm font-bold px-4 py-3'>
                    <FaExclamation className='full-current w-4 hr-2 mr-2'/>
                    <p>Make sure your Bank details are correct ,We have no algorithm to detect and check correct and incorrect details that belongs to you</p>
                </div>
                <form className='mt-4'>
                    <div>
                    <label className='block text-purple-700  text-sm font-bold mb-2 ' >Amount</label>
                    <div className='w-full mb-4'>
                        <input  className='bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight
                    focus:outline-none focus:bg-white focus:border-purple-500' type='number'></input>
                    </div>

                    </div>

                    <div>
                    <label className='block text-purple-700  text-sm font-bold mb-2 ' >Account Name</label>
                    <div className='w-full mb-4'>
                        <input  className='bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight
                    focus:outline-none focus:bg-white focus:border-purple-500' type='text'></input>
                    </div>

                    </div>

                    <div>
                    <label className='block text-purple-700  text-sm font-bold mb-2 ' >Account number</label>
                    <div className='w-full mb-4'>
                        <input  className='bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight
                    focus:outline-none focus:bg-white focus:border-purple-500' type='number'></input>
                    </div>

                    </div>

                    
                    <div>
                    <label className='block text-purple-700  text-sm font-bold mb-2 ' >Bank</label>
                    <div className='w-full mb-4'>
                        <input  className='bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight
                    focus:outline-none focus:bg-white focus:border-purple-500' type='text'></input>
                    </div>

                    </div>
                   
                    <button className='text-white p-4 font-bold rounded-tl-lg w-full hover:bg-purple-400' style={{backgroundColor:'#6E00FF'}}>Submit</button>
                </form>

                

                </div>
                
            </div>

        </div>
    </div>
  )
}

export default withdraw