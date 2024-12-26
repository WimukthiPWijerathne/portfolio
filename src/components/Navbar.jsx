import React from 'react';
import logo from '../assets/kevinRushLogo.png';


export default function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        {/* <img className='mx-2 w-10' src={logo} alt="logo"  /> */}
      </div>
      <div className='m-8 flex items-center justify-center gap-4' >
        <ul className='flex flex-wrap gap-5 hover:cursor-pointer bg-gradient-to-r from-pink-300 via-slate-500
            to-purple-500 bg-clip-text text-xl tracking-tight text-transparent '>
          <li className='hover:underline'>Home</li>
          <li className='hover:underline'>About Me</li>
          <li className='hover:underline'>Contact Me</li>
        </ul>
      </div>
    </nav>
  );
}
