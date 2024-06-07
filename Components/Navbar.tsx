import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex bg-black text-white ' >
        <div className='flex w-screen justify-between py-4  px-4 '>
            <div>
                logo</div>
            <div className='flex gap-16 items-center '>
             <input type="text pla " />
             <div>About</div>
             <div>Blogs</div>
             <div>Contact</div>
             
            </div>
            <div><button className='border-2 px-2 py-2 shadow-neon '>Subscribe</button></div>
        </div>

    </nav>
  )
}

export default Navbar
