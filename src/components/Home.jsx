import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

            <p className=' text-30xl sm:-9xl font-bold  text-[#8661c9] '>Hello, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-sky-300'>Mike Reidy</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-sky-300'>I'm a full stack developer</h2>
            <p></p>
            <div>
                <button className='text-white group border-2 
                                     px-6 py-3 
                                     my-2 rounded-lg 
                                     flex items-center 
                                     hover:bg-pink-600 
                                     hover:border-orange-500'>View Work 
                                     <span className='group-hover:rotate-90 duration-300'>
                                     <HiArrowNarrowRight className='ml-3' />
                                     </span>
                                     </button>
            </div>
        </div>
    </div>
  )
}

export default Home