"use client";

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between">
        <div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
          <a href="#" className="inline-flex items-center">
            <Image src="/logo.png" alt="Logo" className="h-8 mr-2" width={32} height={32} />
            <span className="font-semibold text-xl">Company Name</span>
          </a>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg mb-4">Stay Updated</h2>
          <form className="flex justify-center md:justify-start">
            <input 
              type="email" 
              placeholder="Email" 
              className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 mr-2"
              aria-label="Email"
            />
            <button 
              type="submit" 
              className="px-4 py-2 rounded-r-md bg-blue-500 text-white hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg mb-4">Navigation</h2>
          <ul className="list-unstyled">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Blogs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="w-full text-center md:text-left">
          <p className="text-gray-400">© 2023 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
