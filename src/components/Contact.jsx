import React, { Ref, useRef } from 'react'
import emailjs, { send } from '@emailjs/browser';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
  
const Contact = () => {
  const form = useRef ()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6tbgfpg', 'template_0poztpg', form.current, 'A2G-xcAYZTtOFsZU1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section className='section mt-24' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
          variants={
            fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
          className='flex-1'>
            <div>
            <h4 className='text-xl uppercase font-medium mb-2 
            tracking-wide'>Get in touch</h4>
            <h2 className='text-[40px] text-gradient'>Do you need an amazing website?</h2>
            <h2 className='text-[45px] lg:text-[70px]  mb-12 text-gradient'>
              Let's work <br /> together! 
              </h2>
          </div>
          </motion.div>
          {/* form */}

          <motion.form 
          variants={
            fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
          onSubmit={sendEmail} ref={form} className='flex-1 border rounded-2xl flex flex-col gap-y-6
          pb-24 p-6 items-start mt-10'
           method='post'>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all' 
              type='text'
              name='user_name'
              placeholder='Your name'

            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all' 
              type="text"
              name='user_email'
              placeholder='example@gmail.com'
            />
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full
              placeholder:text-white focus:border-accent transition-all
              resize:none mb-12'
              placeholder='message'
              name='message'
              ></textarea>
              <button className='bg-red-500 hover:bg-white text-white hover:text-black font-bold py-2 
              px-6 rounded-full'
              type='submit'
              value={send}
              >send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact