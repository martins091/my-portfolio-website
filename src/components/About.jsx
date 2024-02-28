import React from 'react';
 import CountUp from 'react-countup'
 import { useInView } from 'react-intersection-observer'
  import Image from '../assets/ejiofor.jpeg';
  import {motion} from 'framer-motion'
  import {fadeIn} from '../variants'


const About = () => {
  const [ ref, inView ] = useInView({
    threshold: 0.5,
  })
  return (
    <div className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-6 lg:flex-row lg:items-center justify-between'>
          {/* img */}
          <motion.div 
          variants={
            fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
          className=' mix-blend-lighten lg:pr-[20px]'>
            <img className='h-[300px] w-[80%] lg:w-[100%] lg:h-[660px]'  src={Image}  alt='image' />
          </motion.div>
          {/* text */}
          <motion.div
          variants={
            fadeIn('left', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.4}}  
          className='flex-1 text-center lg:text-left'>
            <h1 className='text-[40px] font-bold text-gradient leading-[0.8] lg:text-[60px] mb-[8px]'>About me</h1>
            <h2 className='mb-4 text-[25px] lg:text-[35px] font-secondary font-semibold 
                uppercase leading-[1] text-gradient'>Full-Stack Web Developer // Specializing <br /> in the MERN stack // Proficient in WordPress
            </h2>
            <p className=' max-w-lg '>
            I have been working as a freelancer for over 3 year, and it helped me to gain strong knowledge in web development
            </p>
            {/* stars */}
            <div className='flex lg:gap-x-10 mb-6'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient 
                mb-2'>
                  {
                  inView ?
                  <CountUp start={0} end={10} duration={5} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient 
                mb-2'>
                  {
                  inView ?
                  <CountUp start={0} end={100} duration={5} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient 
                mb-2'>
                  {
                  inView ?
                  <CountUp start={0} end={100} duration={5} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied
                  Clients
                </div>
              </div>
            </div>
            <div className='flex max-w-max gap-x-6 items-center mb-12
            mx-auto lg:mx-0'>
            <a href="#contact" className="bg-red-500 hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-full">
            contact me
            </a>
            </div>
          </motion.div>
        </div>
      </div>  

    
    </div>
  )
}

export default About