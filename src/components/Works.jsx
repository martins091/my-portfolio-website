import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'


// img
import Img1 from '../assets/realestate.jpeg';
import Img2 from '../assets/martins.b.jpeg';
import Img3 from '../assets/martins-shop.jpeg';

const Works = () => {
  return (
    <section className='section my-24' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-y-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10px lg:mb-0'>
            {/* text */}
            <motion.div
            variants={
              fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount:0.3}}
            >
              <h2 className='leading-tight lg:mt-24 text-xl font-bold uppercase text-gradient mb-2 tracking-wide'>
                My Latest Works
              </h2>
              <p className='max-w-sm mb-16'>
                These are a few of the projects I have completed and are in my GitHub repository.
              </p>
              <a
                href="https://github.com/martins091"
                className="bg-red-500 hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-full mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                View all projects
              </a>
            </motion.div>
            {/* image */}
            <motion.div 
            variants={
              fadeIn('right', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount:0.3}}
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img1}
                alt="Movie App"
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient text-[25px]'>Full-Stack Web Project</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <a className='text-3xl text-white hover:underline hover:text-gray-400'  href='https://realestate-app-ymhb.onrender.com/search?searchTerm=' target='_blank' >Real Estate web app</a>
              </div>
            </motion.div>
          </div>
          <div className='flex-1 flex flex-col gap-y-10'>
            {/* image */}
            <motion.div 
            variants={
              fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount:0.3}}
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img2}
                alt="Bank Website"
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient text-[25px]'>Full-Stack Web App</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <a className='text-3xl text-white hover:underline hover:text-gray-400'  href='https://mern-blog-rja7.onrender.com/dashboard?tab=dash' target='_blank' >Blog Admin Dashboard</a>
              </div>
            </motion.div>
            <motion.div 
            variants={
              fadeIn('left', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once:false, amount:0.3}}
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img3}
                alt="GPT3 Website"
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient text-[25px]'>Web Development</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <a className='text-3xl text-white hover:underline hover:text-gray-400'  href='https://ecommerce-website-one-roan.vercel.app/' target='_blank' >Ecommerce web app</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
