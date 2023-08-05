import React from 'react'

export default function Navbar() {
  return (
    <div className='mainBackground' style={{backgroundColor:"#ECEAFF"}}>
        <div className='container mx-auto flex justify-between space-x5 border-black border-solid  pt-5 pl-4'>
                <div>
                    <p>Logo</p>
                </div>

                <div className='hidden md:block'>
                    <ul className='flex space-x-7 text-3md font-bold  ' >
                        <li className='hover:text-white '>About Us</li>
                        <li className='hover:text-white '>Pricing</li>
                        <li className='hover:text-white '>Faq</li>
                        <li className='hover:text-white '>Contac Us</li>
                    </ul>
                </div>

                <div className='space-x-10'>
                    <button className='text-white p-4 font-bold rounded-tl-lg' style={{backgroundColor:'#6E00FF'}}>Login</button>
                    <button className='text-white p-4 font-bold rounded-tl-lg' style={{backgroundColor:'#6E00FF'}}>Get Started</button>

                </div>

        </div>
       

    </div>
  )
}


