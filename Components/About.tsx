import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className='flex w-screen h-screen '>
      <div>
        <div><Image src="/man.png"
        alt=""
        width={100}
        height={100}/>
        </div>
        <div><h1>About </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit dolore mollitia
             nesciunt aliquid ratione eligendi distinctio dolorem voluptate atque dolor impedit repudiandae
             at voluptas, obcaecati animi quisquam id! Minus, possimus!</p></div>
      </div>
    </div>
  )
}

export default About

