import React from 'react';

const Navbar = () => {
  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
    <div className='container mx-auto flex justify-between items-center'>
    <div>
        <a href='#' className='text-3xl font-bold text-white'>Dhanushika
        <span className='text-purple'>Udayangani</span>
        <div className='w-4 h-4 bg-purple rounded-full'></div>
        </a>
    </div>
    <div className='hidden md:flex space-x-10 '>
    <a href="#home" className='relative text-white/80 transition duration-300 hover:textr-purple group'>
    <span>Home</span>
    <span className='absolute left-0 -bottom-1 w-0 h-0 '>About</span>
    <span></span>
    </a>
    </div>
    </div>
    </nav>
  );
}

export default Navbar;
