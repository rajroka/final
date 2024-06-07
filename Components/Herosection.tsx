import React from 'react'
import Image from 'next/image'
const Herosection = () => {
    return (
        <div className='margin-[20] w-screen h-screen bg-slate-200'>
            <div className='flex pt-[200] pr-8 pl-8 sm:pr-4 sm:pl-4 sm:grid-cols-2 '>
                <div className='pt-[200px]'><h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p>hello my name is raj roka and i am a good boy and i have made a lot of frinefs
                        they will help me when i nedd so your help will help me to
                        gain supoory </p></div>
                <div className='px-6 sm:items-center sm:shrink-0 md:shrink-0 sm:justify-center'>
                    <Image
                        src="/man.png"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    )
}

export default Herosection
