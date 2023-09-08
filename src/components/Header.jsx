import React from 'react';
import { Button } from 'react-scroll';




const Header = () => {
  return <div className='py-6 px-6 ' id='home'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
        <h1 className='text-bold text-[30px] text-gradient'>Martins Ejiofor</h1>
        </a>
        <a href="#contact" className="bg-blue-400 hover:bg-blue-300 text-white hover:text-black font-bold py-2 px-4 rounded-full">
          Work with me
        </a>
      </div>
    </div>
  </div>
}

export default Header