import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'

const Nav = () => {


 
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div >
    
<nav className="bg-gray-800 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-12">
        <div className="flex">
            <div className="flex-shrink-0 flex  gap-2">
              <img src='https://w7.pngwing.com/pngs/19/574/png-transparent-social-media-computer-icons-linkedin-logo-recipe-silhouette-desktop-wallpaper-internet.png' className='h-[40px] w-[80px] mt-1 rounded-full' alt="" />
                <h1 className="text-xl font-bold">Nikhil Recipe</h1>
            </div>
            <div className="hidden md:flex md:ml-6 space-x-4">
                <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <Link to="/login" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            </div>
        </div>
        <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
            </button>
        </div>
    </div>
</div>

<div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link to="/" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
        <Link to="/about" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</Link>
        <Link to="/contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
        <Link to="/login" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
    </div>
</div>
</nav>

    </div>
  )
}

export default Nav
