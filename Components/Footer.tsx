import React from 'react'
import Image from 'next/image'
import { PiCopyrightLight } from "react-icons/pi";
import { GiAutomaticSas } from "react-icons/gi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialTwitter } from 'react-icons/ti';
const Footer = () => {
    return (
        <div className='pt-4 pl-4 pr-4 pb-4 bg-green-200  '>
            <div className='flex  justify-between items-center '>
                <div className='pl-8'><GiAutomaticSas />
                     <h1 className='text-[20px]' font-bold font-poppins  >Welcome to this website </h1><br />
                      <p>  where you can learn newthings.</p></div>
                <div className='flex pb-1'>copyright<PiCopyrightLight />All rights reserved.</div>
                <div><h1>Get in touch</h1>
                    <div className='flex gap-2 '><FaFacebookSquare />
                        <FaInstagramSquare />
                        <TiSocialTwitter /></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
