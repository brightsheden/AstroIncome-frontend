import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/Navbar'
import {FaCheckCircle} from 'react-icons/fa'
import laptop from '../images/laptop.png'


export default function Home() {
  return (
    <>
    <Navbar/>
    <header className='mainBackground pb-8'  >
      <div className='container  mx-auto px-5 pb-5'  >
        <h2 className='text-3xl md:text-5xl font-bold mb-5 '>The Best Way to Trade & Invest</h2>
        <p className=' text-xl w-full  md:w-2/3 text-grey'>Experience one of the best available solution to increase your investment capital by investing in our modern technological venture.
          Looking for highest returns on your investments? Diamondsmartcoinvest is an automatic online investment platform,
          part of Diamondsmartcoinvest – team of professional traders focusing mainly on Bitcoin and other crypto currencies trading over multiple Exchanges and markets.
            Thanks to the extraordinary diversification of our investments,
          we are able to deliver steady income for our investors.</p>

          <button  className='text-white p-4 font-bold rounded-tl-lg mt-5' style={{backgroundColor:'#6E00FF'}}>Create Account</button>

      </div>
      
    </header>


    <section className='bg-white my-5'> 
      <div className='container mx-auto px-5'>
        <h3 className='text-3xl md:text-4xl mb-5 font-bold'>About <span style={{color:'#6E00FF'}}>Us</span></h3>
        <p className='text-xl  my-5'>
          We are an international financial company engaged in investment activities, which
          are related to trading on financial markets and cryptocurrency exchanges performed by qualified professional traders.
        </p>

        <p className='text-xl my-5'>Our goal is to provide investors with a reliable source of high income, while minmizing any 
          possible risks and offering of a high-quality service.allowing us to automate and simplify
          the relations between the investors and thr trustees, we work towards increasing your profit margin by profitable investment.We Lookingforward to you being part of our community.
        </p>

        <button  className='text-white p-4 font-bold rounded-tl-lg mt-5' style={{backgroundColor:'#6E00FF'}}>Get Started</button>

      </div>

    </section>

 
    <section className='mainBackground'>
      <div className='container mx-auto md:flex justify-between p-10'>
        <div className='mb-4'>
          <Image
            src={laptop}
            alt='laptop'
            width={'85%'}
            height={'100%'}
    
          
          />
        </div>

        <div>
          <h2 className=' text-2xl md:text-4xl mb-4 '>Always on the go? Mobile trading is easier than ever with Online Trade!</h2>
          <p className='text-base w-full md:w-1/2'>Get your hands on our customized Trading Platform with the comfort of freely trading on the move, to experience truly liberating trading sessions.</p>
        </div>
      </div>

    </section >

    

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


    <section className='bg-mainBackground p-10'style={{backgroundColor:"#ECEAFF"}}>
      <div className='container mx-auto block md:flex justify-between p-5' style={{backgroundColor:'#6E00FF'}} >
        <div>
          <h1 className='text-2xl md:text-3xl text-white font-bold mb-5'>Affiliate and Representative Program</h1>
          <p className='text-white text-lg w-full md:w-2/3'>DIAMONDSMARTCOINVEST is made so even investors with zero trading experience are 
            successfully making a profit. Our program, unlike any other,
             guarantees fix daily interest for investors regardless of market conditions.</p>
        </div>

        <div className=' w-full md:w-2/3 p-5'>
          <button className='bg-white text-black text-2xl rounded-tl-lg p-5'>Create Free Account</button>
        </div>




      </div>

    </section>


    <footer className='' style={{backgroundColor:'#423C8C'}}>
      <div className='container mx-auto block '>
       

        <hr></hr>

        <div className='mt-10 pb-5'>
          <p className='text-white'>© Copyright 2023 AstoIncoome All Rights Reserved.</p>
        </div>


      </div>
     

    </footer>
     
             
    </>
  )
}
