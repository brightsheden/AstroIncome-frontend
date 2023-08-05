import React from 'react'
import { FaDotCircle, FaWallet } from 'react-icons/fa'
import Navbar from '../../Components/Navbar'

function invest() {
  return (
    <div>
        <Navbar/>
        <div className='bg-grey-500'>
            <div className='container mx-auto'>
                <div className='bg-white mt-5 w-full'>
                    <form className='md:flex md:justify-between w-full   flex-wrap shadow-md'>
                        <div className='p-5 border-2 md:w-2/4'>
                            <div className='relative'>
                            <select className='block appearance-none w-full bg-white-200 shadow-md  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-non focus:white foucus:border-gray-500  font-bold mb-2'>
                            <option>select plan</option>
                                <option>starter</option>
                                <option>Pro</option>
                                <option>Ultra</option>
                            </select>
        

                            </div>
                           

                            <div className='my-5'>
                                <label className='block text-gray-700  text-sm font mb-2 '>Enter Amount</label>
                                <div className=''>
                                    <input className='bg-grey-200 appearance-none border-2 border-grey-200 rounded w-full py-2 px-4 text-grey-700 leading-tight
                                     focus:outline-none focus:bg-white focus:border-purple-500' type='number'></input>
                                </div>


                            </div>

                            <div>
                                <label className='block text-gray-700  text-sm font-bold mb-2 '>Payment Method:</label>
                                <div className='flex items-center space-x-2'>
                                <FaWallet/> 
                                <p className=''>Account Balance:0.0</p>

                                </div>
                                
                              
                            </div>
                            

                        </div>
                        <hr/>
                       

                        <div className='  justify-evenly  border-2   md:w-2/4'>
                            <div className='text-center mt-5 mb-5'>
                            <span className='text-2xl text-grey-200 '>Investment details</span>


                            </div>
                        
                            <div className='flex justify-evenly   '>
                                <div className=' '>
                                    <span className='text-base text-grey-500'>Name</span>
                                    <p className='text-purple-800 text-upper'>starter</p>

                                    <span className='text-base text-grey-500'>Duration</span>
                                    <p className='text-purple-800 text-upper'>10 days</p>

                                    <span className='text-base text-grey-500'>Minimum deposit</span>
                                    <p className='text-purple-800 text-upper'>$1900</p>

                                
                                </div>

                                    <div>
                                        <span  className='text-base text-grey-500'>Price</span>
                                        <p>123</p>

                                        <span  className='text-base text-grey-500'>interest</span>
                                        <p className='text-purple-800 text-upper'>10%</p>
                                    </div>

                            
                                </div>
                                <div className='mt-5 mb-3 md:mx-20  '>
                                    <button className='text-white p-4 font-bold rounded-tl-lg w-full hover:bg-purple-400' style={{backgroundColor:'#6E00FF'}}>Pay Now</button>

                                </div>
                        
                           
                        </div>


                    </form>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default invest