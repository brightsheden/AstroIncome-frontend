import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import Navbar from '../../Components/Navbar'

function investments() {
  return (
    <>
    <Navbar/>
    <section className='bg-white mt-10 '>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h3 className='text-4xl font-bold mb-4'>Our Investment Plan</h3>
          <span className='text-lg'>Choose how you want to invest with us</span>
        </div>

        <div className='block md:flex flex-wrap justify-evenly space-x-10 mb-5  '>
        <div className='w-full md:w-80 shadow-lg  mt-5 p-5 border-b-4'  >
            <p className='  p-2 text-2xl text-blue rounded-tl-lg'  style={{backgroundColor:'#ECE9FF',width:'50%', color:'#9E59FF'}}>Basic Plan</p>
            <p className='text-2xl font-bold'>#30000</p>
            <span className='text-xl ' style={{color:'#8F9CAD'}}>10 days</span>
            <hr className='my-5'/>
            <div className='flex space-x-3 mt-3'> <span className='text-sm ' style={{color:'6E00FF'}}> <FaCheckCircle/></span> <p className='text-lg relative bottom-2'>minimum deposit:3000</p></div>
            <div className='flex space-x-3'> <span className='text-sm '> <FaCheckCircle/></span> <p className='text-lg relative bottom-2'>maximum deposit:3000</p></div>
           
            <button  className='text-white p-4 font-bold rounded-tl-lg mt-5 w-full' style={{backgroundColor:'#6E00FF'}}>Buy Now</button>
           
          </div>

          <div className='w-full md:w-80 shadow-lg  mt-5 p-5 border-b-4'>
            <p className='  p-2 text-2xl text-blue rounded-tl-lg'  style={{backgroundColor:'#ECE9FF',width:'50%', color:'#9E59FF'}}>Prem. Plan</p>
            <p className='text-2xl font-bold'>#30000</p>
            <span className='text-xl ' style={{color:'#8F9CAD'}}>10 days</span>
            <hr className='my-5'/>
            <div className='flex space-x-3 mt-3'> <span className='text-sm ' style={{color:'6E00FF'}}> <FaCheckCircle/></span> <p className='text-lg relative bottom-2'>minimum deposit:3000</p></div>
            <div className='flex space-x-3'> <span className='text-sm '> <FaCheckCircle/></span> <p className='text-lg relative bottom-2'>maximum deposit:3000</p></div>
           
            <button  className='text-white p-4 font-bold rounded-tl-lg mt-5 w-full' style={{backgroundColor:'#6E00FF'}}>Buy Now</button>
           
          </div>

          <div className='w-full md:w-80 shadow-lg  mt-5 p-5 border-b-4'  >
            <p className='  p-2 text-2xl text-blue rounded-tl-lg'  style={{backgroundColor:'#ECE9FF',width:'50%', color:'#9E59FF'}}>Ultra Plan</p>
            <p className='text-2xl font-bold'>#30000</p>
            <span className='text-xl ' style={{color:'#8F9CAD'}}>10 days</span>
            <hr className='my-5'/>
            <div className='flex space-x-3 mt-3'> <span className='text-sm ' style={{color:'6E00FF'}}> <FaCheckCircle/></span> <p className='text-lg relative bottom-2'>minimum deposit:3000</p></div>
            <div className='flex space-x-3'> <span className='text-sm '> <FaCheckCircle/></span> <p className='text-lg relative bottom-2'>maximum deposit:3000</p></div>
           
            <button  className='text-white p-4 font-bold rounded-tl-lg mt-5 w-full' style={{backgroundColor:'#6E00FF'}}>Buy Now</button>
           
          </div>
        </div>


      </div>

    </section>

    </>
  )
}

export default investments