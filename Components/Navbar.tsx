"use client"; // Mark this as a client component
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-gray-800 text-white">
      <a href="#" className="flex items-center">
        <Image src="/yes.jpg" alt="Logo" className="h-8 mr-2" width={32} height={32} />
        <span className="font-semibold text-xl">Company Name</span>
      </a>
      <ul className="hidden md:flex space-x-4 gap-16 ">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/blogs" className="hover:underline">Blogs</Link></li>
        <li><Link href="/blogeditor" className="hover:underline">Upload Blogs</Link></li>
        <li><Link href="#about" className="hover:underline">About</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        <li><Link href="/subscribe" className="border-2 py-2 px-6 rounded-lg hover:bg-white hover:text-black">Subscribe</Link></li>
      </ul>
      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white"
      >
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0V15z" />
        </svg>
      </button>
      {isMobileMenuOpen && (
        <>
          <div className='flex justify-between text-white border-2'>
            <ul className="md:hidden absolute top-0 left-0 w-full bg-gray-800 text-white py-4 px-8">
              <li><Link href="/" className="block py-2 hover:underline">Home</Link></li>
              <li><Link href="/blogs" className="block py-2 hover:underline">Blogs</Link></li>
             
              <li><Link href="#about" className="block py-2 hover:underline">About</Link></li>
              <li><Link href="/contact" className="block py-2 hover:underline">Contact</Link></li>
              <li><Link href="/subscribe" className="block py-2 hover:underline">Subscribe</Link></li>
            </ul>
            <div className='text-white border-2'>
              <span>hamburger</span>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
