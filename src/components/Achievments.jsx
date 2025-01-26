import React from 'react'
import { ARCHIEVMENTS } from '../constants'
import { motion } from 'framer-motion'

export default function Achievements() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-md flex flex-col'>
        <motion.h2
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration:0.5}}
          className='text-center text-4xl mb-8'
        >
          Achievements
        </motion.h2>
        {ARCHIEVMENTS.map((achievement, index) => (
          <motion.div
            key={index}
            whileInView={{opacity:1, scale:1}}
            initial={{opacity:0, scale:0.8}}
            transition={{duration:0.5}}
            className='bg-neutral-800 rounded-xl shadow-lg mb-6 overflow-hidden 
            border-2 border-white hover:border-[#bf360c] transition-all duration-300'
          >
            <div className='w-full h-64 overflow-hidden'>
              <img 
                src={achievement.image} 
                alt={achievement.title}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-6'>
              <p className='text-cyan-400 uppercase text-sm font-bold mb-2'>
                {achievement.place}
              </p>
              <h6 className='text-xl font-semibold text-neutral-100 mb-3'>
                {achievement.title}
              </h6>
              <p className='text-neutral-400'>
                {achievement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}