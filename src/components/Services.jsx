import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import Image from '../assets/laptop.jpg'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const services = [
  {
    name: 'Full-Stack Web Development',
    description: 'HTML, CSS, JavaScript, NodeJS, ReactJS, NextJS, Tailwind, Git, Node.js, Express.js', 
    link: 'learn more',
  },
  {
    name: 'MERN-Stack Web Developer',
    description: 'specializing in Mern-stack web development',
    link: 'learn more',
  },
  {
    name: 'Wordpress Developer',
    description: 'I am good in developing website with wordpress ',
    link: 'learn more',
  }
]

const Services = () => {
  return (
    <section className='section bg-cover bg-center bg-no-repeat ' id='services' >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center gap-20'>
        {/* text */}
        <motion.div 
        variants={
          fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
        >
          <h2 className='text-[20px] font-bold text-gradient  lg:text-[60px] leading-[1]'>
            My Services.</h2>
          <h3 className='text-[20px] max-w-[455px] lg:text-[35px] font-secondary
            leading-[1] '>
          I am a Freelance Front-end Web Developer with over 3 year of
          experience.
          </h3>
          <div className='mt-[20px]'>
          <a href="#contact" className="bg-red-500 hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-full mt-[20px]">
            contact me
            </a>
            </div>
        </motion.div>
        {/* services */} 
        <motion.div 
        variants={
          fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
        >
          {services.map((service, index) => {
            // destructure service
            const { name, description, link } = service;
            return (
            <div className=' h-[146px] mb-[38px] 
            flex' key={index}>
              <div className='max-w-[476px]'>
                <h4 className='text-[20px] tracking-wider lg:text-[30px]
                font-primary font-semibold mb-6 text-white'>{name}</h4>
                <p className='font-secondary leading-tight'>
                  {description}
                </p>
              </div>
              <div className='flex flex-col flex-1 items-end'>
                <a href="#" className='bg-red-500 hover:bg-black hover:text-white text-white font-bold py-2 px-4 rounded-full
                flex justify-center items-center'>
                  <BsArrowUpRight />
                  </a>
                  <a className='text-white text-sm' href="#">{link}</a>
              </div>
            </div>
            )
          })}
        </motion.div>
      </div>
      </div>
    </section>
  )
}

export default Services