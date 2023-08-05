import React from 'react'
import { FaArrowDown, FaArrowUp, FaCoins, FaMoneyBillAlt } from 'react-icons/fa'
import Navbar from '../../Components/Navbar'

function dashboard() {
  return (
    <div className='h-screen mainBackground'>
        <Navbar/>
        <div className=''>
            <div className='container mx-auto'>
                <div className='p-5'>
                    <h1 className='text-3xl text-blue-500 font-bold'>Welcome 'Bright'</h1>
                </div>

            </div>
                

            </div>
        <div className='container rounded mx-auto bg-white p-5'>
        
           <div className='p-2'>
            <h3 className='text-lg text-purple'>Account Summary</h3>
            <div className='flex-col md:flex-row space-y-4  flex flex-wrap justify-between mb-4' >
                <div className='w-full md:w-1/2 flex justify-between shadow p-5 rounded'>
                    <div>
                        <p className='text-base text-grey'>Account Balance</p>
                        <p className='text-base font-bold'>#0.00</p>
                    </div>
                    <div className='rounded-full p-5' style={{backgroundColor:'purple'}}>
                        <FaMoneyBillAlt className='text-white text-3xl w-50'/>

                    </div>
                </div>

                <div className='w-full md:w-1/2 flex justify-between shadow p-5 rounded'>
                    <div>
                        <p className='text-base text-grey'>Investment Balance</p>
                        <p className='text-base font-bold'>#0.00</p>
                    </div>
                    <div className='rounded-full p-5' style={{backgroundColor:'purple'}}>
                        <FaCoins className='text-white text-3xl w-50'/>

                    </div>
                </div>

                <div className='w-full md:w-1/2  flex justify-between shadow p-5 rounded'>
                    <div>
                        <p className='text-base text-grey'>Total Withdraw</p>
                        <p className='text-base font-bold'>#0.00</p>
                    </div>
                    <div className='rounded-full p-5' style={{backgroundColor:'purple'}}>
                        <FaArrowDown className='text-white text-3xl w-50'/>

                    </div>
                </div>

                <div className='w-full md:w-1/2 flex justify-between shadow p-5 rounded'>
                    <div>
                        <p className='text-base text-grey'>Total deposit</p>
                        <p className='text-base font-bold'>#0.00</p>
                    </div>
                    <div className='rounded-full p-5' style={{backgroundColor:'purple'}}>
                        <FaArrowUp className='text-white text-3xl w-50'/>

                    </div>
                </div>

                <div className='w-full md:w-1/2 flex justify-between shadow p-5 rounded'>
                    <div>
                        <p className='text-base text-grey'>Total Profit</p>
                        <p className='text-base font-bold'>#0.00</p>
                    </div>
                    <div className='rounded-full p-5' style={{backgroundColor:'purple'}}>
                        <FaMoneyBillAlt className='text-white text-3xl w-50'/>

                    </div>
                </div>
            </div>

           </div>


        </div>
    </div>
  )
}

export default dashboard