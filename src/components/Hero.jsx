import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilephoto from '../assets/profile-pic.png';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  vissible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
    },
  },
});

export default function Hero() {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/assets/cv/Wimukthi_Pathum_CV.pdf';
    
    // Set the download attribute with the desired filename
    link.download = 'Wimukthi_Pathum_CV.pdf';
    
    // Set the correct MIME type
    link.type = 'application/pdf';
    
    // Append to document, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="vissible"
              className="pb-20 text-4xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Wimukthi Pathum
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="vissible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Electrical and Information Engineering Undergraduate
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="vissible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="h-auto"
              src={profilephoto}
              alt="wimukthi pathum"
            />
          </div>
        </div>
      </div>
      {/* Updated Download CV button with proper PDF handling */}
      <div className="flex justify-center mt-8">
        <motion.div
          variants={container(0)}
          initial="hidden"
          animate="vissible"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            className="border-2 rounded-full border-black text-black transition-all duration-300 
                     hover:border-purple-500 hover:text-purple-500 hover:bg-purple-50
                     cursor-pointer h-16 w-64 text-xl font-light"
            variant="outlined"
            onClick={handleDownload}
          >
            Download CV
          </Button>
        </motion.div>
      </div>
    </div>
  );
}