import React from 'react'
import Typed from 'react-typed';


export default function Hero() {
  return (
    <div className='text-white'>
       <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH SOFTWARE DEVELOPMENT</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Tech.</h1>
        <div className=''>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-3'>Agile Software Solutions for</p>
            <Typed className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2" strings={["Scalable Platforms", "Seamless Integrations", "Business Growth"]} typeSpeed={100} backSpeed={120} loop/>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Understanding digital transformation and its importance for scalable plateforms, seamless integrations, & buisness growth.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
       </div>
        
    </div>
  )
}