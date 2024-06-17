import React from 'react'
import Image from 'next/image'
const Card = () => {
  return (
    <div className='w-screen h-screen bg-slate-500 '>
      <div>
        <div><Image src="/1.jpg"
          alt=""
          width={300}
          height={300} />
        </div>
        <div>
        <div>
          <h1>Heading </h1>
          <p>THis paragrap is about this copy and this is good </p>
        </div>
        <div className='px-6 py-2 border-2 border-black text-black '>Subscribe</div>
        </div>
      </div>
    </div>
  )
}

export default Card

