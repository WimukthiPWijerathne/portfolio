import React from 'react'

import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { motion } from 'framer-motion'
import springbbot from '../assets/springbbot.png.png'
import tensor from '../assets/ml/tensor.png'
import python from '../assets/ml/python.png'
import numpy from '../assets/ml/Numpy.png'

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
})

export default function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h2>
      <h3 className='text-center text-2xl underline mb-10'>Web Development</h3>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <TbBrandNextjs className='text-7xl' />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiMongodb className='text-7xl text-green-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <DiRedis className='text-7xl text-red-700' />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaNodeJs className='text-7xl text-green-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <BiLogoPostgresql className='text-7xl text-sky-700' />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <img src={springbbot} className='h-20 w-20' alt='Spring Boot' />
        </motion.div>
      </motion.div>
      <h3 className='text-center text-2xl underline mb-10 mt-5'>Machine Learning and Data Science</h3>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <img src={python} className='h-20 w-20' alt='Python' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <img src={numpy} className='h-20 w-28' alt='NumPy' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <img src={tensor} className='h-20 w-24' alt='TensorFlow' />
        </motion.div>
      </motion.div>
    </div>
  )
}