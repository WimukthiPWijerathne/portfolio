import React from 'react';
import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex items-center gap-4'>
        <a href="https://www.linkedin.com/in/wimukthi-pathum-ba32b5233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className='hover:text-blue-700' />
        </a>
        <a href="https://www.instagram.com/wimukthi_13/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className='hover:text-pink-500' />
        </a>
        <FaFacebook size={30} className='hover:text-blue-600' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4'>
        <ul className='flex flex-wrap gap-5 hover:cursor-pointer bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent'>
          <li className='hover:underline'>Home</li>
          <li className='hover:underline'>About Me</li>
          <li className='hover:underline'>Contact Me</li>
        </ul>
      </div>
    </nav>
  );
}