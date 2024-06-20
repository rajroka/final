import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <section className='flex pt-[50px] pb-[50px] pl-[50px] pr-[50px] bg-red    h-screen  w-screen  '>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 p-[30px] bg-slate-200 rounded-xl gap-4 '>
        <div><Image
        src="/1.jpg"
        alt=""
        width={500}
        height={1500}
        className='rounded-xl sm:shrink-0 md:shrink-0  ' />
        </div>
        <div>
         <h1 className='font-black text-2xl '>About</h1>
         <p className='text-slate-600 font-poppins  '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Rerum est veniam vitae aut assumenda, quis eum omnis perferendis dolorem explicabo 
            reprehenderit inventore eius magnam fugit a labore adipisci maxime sunt? Lorem ipsum 
            dolor sit amet consectetur adipisicing elit. Odio rem eveniet, fugiat enim in quis ratione 
            magnam unde quibusdam ipsapraesentium officia quo corporis sapiente! Quam voluptatem consequatur 
            voluptatibus sapiente.</p>
        </div>

      </div>
    </section>
  )
}

export default About
