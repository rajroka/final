import React from 'react'
import Link from 'next/link'
import { Input } from 'postcss'
import { GiBrickWall } from "react-icons/gi";
const Navbar = () => {
  return (
    <nav className='flex bg-black text-white border-2' >
      <div className='flex w-[100%]   justify-between items-center  py-4  px-4 '>
        <div><GiBrickWall /></div>
        <ul className=' hidden md:flex gap-16  '>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
        <button className='border-2 px-6  py-2 shadow-neon hidden md:flex rounded-xl hover:text-black hover:bg-white  '>Subscribe</button>
      </div>

    </nav>
  )
}

export default Navbar
