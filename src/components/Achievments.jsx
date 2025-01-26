import React from 'react'
import { ARCHIEVMENTS } from '../constants'
import { motion } from 'framer-motion'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function Achievements() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl '
      >
        Achievements
      </motion.h2>

      <div className='flex justify-center'>
        <div
          className='flex space-x-6 px-4 pb-6 max-w-screen-xl overflow-x-auto scrollbar-hide'
        >
          {ARCHIEVMENTS.map((achievement, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='group'
            >
              <Card className="w-[450px] h-[600px] border-2 border-neutral-700 hover:border-[#bf360c] flex flex-col">
                <CardHeader floated={false} className="h-[300px] flex items-center justify-center p-4">
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title} 
                      className='max-w-full max-h-full object-cover'
                    />
                  </div>
                </CardHeader>
                <CardBody className="text-center flex-grow flex flex-col justify-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    {achievement.title}
                  </Typography>
                  <Typography color="cyan" className="uppercase text-sm font-bold mb-2">
                    {achievement.place}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium text-sm">
                    {achievement.description}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}