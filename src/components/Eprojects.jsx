import React from 'react'
import { EPROJECTS } from '../constants/index'
import { motion } from 'framer-motion'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'
      >
        Electronic Projects
      </motion.h2>
      
      {/* Centered horizontal scrolling container */}
      <div className='flex justify-center overflow-x-auto'>
        <div className='flex space-x-6 px-4 pb-6 max-w-screen-xl'>
          {EPROJECTS.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{opacity:1, scale:1}}
              initial={{opacity:0, scale:0.8}}
              transition={{duration:0.5}}
              className='group'
            >
              <Card className="w-[450px] h-[600px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-neutral-700 hover:border-purple-600 flex flex-col">
                <CardHeader floated={false} className="h-[300px] flex items-center justify-center p-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className='max-w-full max-h-full object-contain'
                    />
                  </div>
                </CardHeader>
                <CardBody className="text-center flex-grow flex flex-col justify-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    {project.title}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium text-sm">
                    {project.description}
                  </Typography>
                </CardBody>
                <CardFooter className="flex flex-wrap justify-center gap-2 pt-2 pb-4 overflow-auto max-h-[100px]">
                  {project.technologies.map((tech, techIndex) => (
                    <Typography
                      key={techIndex}
                      className="bg-neutral-900 text-purple-300 
                      px-2 py-1 rounded-md text-xs 
                      hover:bg-purple-900 hover:text-white 
                      transition-colors"
                    >
                      {tech}
                    </Typography>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}