import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className='flex flex-col items-center border-b border-neutral-900 pb-12'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='mt-16 mb-8 text-center text-4xl'
      >
        Get in Touch
      </motion.h2>

    

      {/* Social Links Container */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='flex items-center justify-center gap-4 rounded-full border-2 border-black px-8 py-4 shadow-sm'
      >
        <a href="mailto:wimukthiwijerathne@gmail.com" className="flex items-center gap-2 hover:text-gray-600">
          <Mail size={20} />
          <span>wimukthiwijerathne@gmail</span>
        </a>
        <div className="h-6 w-px bg-neutral-300" />
        <a href="#" className="flex items-center gap-2 hover:text-gray-600">
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
        <div className="h-6 w-px bg-neutral-300" />
        <a href="#" className="flex items-center gap-2 hover:text-gray-600">
          <Instagram size={20} />
          <span>Instagram</span>
        </a>
      </motion.div>

      {/* Navigation Links */}
      {/* <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='mt-16 flex gap-8 text-sm'
      >
        <a href="#about" className="hover:text-gray-600">About</a>
        <a href="#skills" className="hover:text-gray-600">Skills</a>
        <a href="#projects" className="hover:text-gray-600">Projects</a>
        <a href="#achievements" className="hover:text-gray-600">Achievements</a>
        <a href="#milestones" className="hover:text-gray-600">Milestones</a>
        <a href="#contact" className="hover:text-gray-600">Contact</a>
      </motion.div> */}

      {/* Copyright Notice */}
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='mt-8 text-sm text-gray-500'
      >
        Copyright © 2024 Wimukthi Pathum Wijerathne. All Rights Reserved.
      </motion.p>

      {/* Go to Top Button */}
      <motion.a
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        href="#"
        className='mt-8 text-sm text-gray-500 hover:text-gray-700'
      >
        GO TO TOP
      </motion.a>
    </div>
  );
}