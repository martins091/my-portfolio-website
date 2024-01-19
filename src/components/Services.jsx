import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import Image from '../assets/service.jpg'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const services = [
  {
    name: 'Web Development',
    description: 'HTML, CSS, JavaScript, NodeJS, ReactJS, NextJS, Tailwind, Git',
    link: 'learn more',
  },
  {
    name: 'Graphic Design',
    description: 'Figma, Adobe Photoshop, CorelDraw and Canva.',
    link: 'learn more',
  },
  {
    name: 'Content Creator',
    description: 'I have been creating contents in different social media platforms.',
    link: 'learn more',
  }
]

const Services = () => {
  return (
    <section className='section bg-cover bg-center bg-no-repeat ' id='services' style={{ backgroundImage: `url(${Image})` }}>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
        variants={
          fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
        >
          <h2 className='text-[40px] font-bold text-gradient  lg:text-[60px] leading-[1]'>
            My Services.</h2>
          <h3 className='text-[25px] max-w-[455px] lg:text-[35px] font-secondary
            leading-[1] '>
          I am a Freelance Front-end Web Developer with over 1 year of
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
            <div className='border-b border-white/30 h-[146px] mb-[38px] 
            flex' key={index}>
              <div className='max-w-[476px]'>
                <h4 className='text-[30px] tracking-wider
                font-primary font-semibold mb-6 text-black'>{name}</h4>
                <p className='font-secondary leading-tight'>
                  {description}
                </p>
              </div>
              <div className='flex flex-col flex-1 items-end'>
                <a href="#" className='bg-red-500 hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-full
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