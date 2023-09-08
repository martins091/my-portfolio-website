import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Banner = () => {
  return (
    <section className='min-h-[60vh] lg:min-h-[78vh] flex lg:items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:center lg:gap-x-12'>
          {/* text */}
          <motion.div 
          variants={
            fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.4}}
          className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={
            fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='text-[34px]'>Hello, I'm</motion.h1>
            <motion.h1
            variants={
              fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
            className='text-[40px] font-bold text-gradient lg:text-[60px]'>
              Martins Ejiofor
            </motion.h1>
            <motion.div
            variants={
              fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
            className='mb-6 text-[34px] lg:text-[60px] font-secondary font-semibold leading-[1]'>
              <span className='text-gradient'>A</span>
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'Graphic Designer',
                  2000,
                  'Content Creator',
                  2000,
                ]}
                speed={50}
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.div 
            variants={
              fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <SocialLink href="https://www.linkedin.com/in/agbo-martins-ejiofor-a9b32b26a">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://github.com/martins091">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/martinsejiofo/?fbclid=IwAR2TMSgMcMlB6kf7HU7-eVGqdUvOtnyVHLZME6QJusttqpsROGHk2ynfRIw">
                <FaInstagram />
              </SocialLink>
            </div>
            <a href="https://docs.google.com/document/d/1b2Fg50ipp6P2mvvfFxQpi1XV7nKkuuok-jAtOaRKHtw/edit?usp=sharing" 
              className='font-bold text-[18px] bg-white text-black rounded-full px-5
              hover:text-white hover:bg-black' target="_blank">
              <div className="flex items-center">
                <p>Resume</p>
                <FaDownload />
                </div>
              </a>
            </motion.div>
          </motion.div>
          {/* image */}
          <motion.div 
          variants={
            fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img className='h-[350px] rounded-full' src={Image} alt="image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, children }) => (
  <a href={href} target="_blank" style={{ cursor: "pointer" }}>
    {children}
  </a>
);

export default Banner;
