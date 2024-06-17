import React from 'react'
import Image from 'next/image'
const Herosection = () => {
    return (
        <div className='  h-screen   w-screen   p-[50px] bg-black  ' >
            <div className='grid     lg:grid-cols-2 sm:grid-cols-1  items-center justify-center  '>
                <div className=' grid gap-[20px]   '>
                    <h1 className='  text-6xl   font-black text-white    '> YOU ARE JUST A PARTICLE TO THIS WORLD<br />  </h1>
                    <p className='font-thin text-white  '>Welcome to this website, where you can learn, share, and expore new ideas and knowledge.</p>
                    <button className='wrap-text border-white border-2 text-white w-[7rem]  '>Subscribe </button></div>
                <div className=' sm:items-center sm:shrink-0 md:shrink-0 sm:justify-center '>
                    <Image
                        src="/dust.gif"
                        alt="Picture of the author"
                        width={600}
                        height={600}
                        className='bg-blue  rounded-xl'
                        style={{ backgroundImage: "url('/dust.gif')" }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Herosection
