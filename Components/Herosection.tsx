import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
const Herosection = () => {
  return (
    <div className='py-[60px] w-screen h-screen '>
      <div className='px-[40px] md:flex items-center justify-between border-2 border-black '>
        <div className=' w-1/2  '>
          <div className='text-wrap ' ><h1 className=' text-3xl font-black justify-around items-center lg:text-6xl  '>You are just a particle </h1>
            <p className='pt-4  text-silve font-poppins  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dix
              omnis facere impedit aperiam maxime adipisci
              ducimus minima blanditiis magnam.
            </p>
          </div>
          <div className='pt-6    '><button className='border-2 border-black rounded-lg text-black px-6 py-2 pt-2 hover:bg-black hover:text-white '>Subscribe</button></div>
        </div>
        <div className='w-1/2'>
          <Image
            src="/il.png"
            alt=""
            width={500}
            height={500}
            className='pt-6   rounded-xl  ' />
        </div>

      </div>

    </div>
  )
}

export default Herosection
