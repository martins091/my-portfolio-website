import React from 'react';
// icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';
// links
import { Link } from 'react-scroll'

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full bg-primary h-[96px] backdrop-blur-2xl
          rounded-full max-w-[460px] mx-auto px-5 flex justify-between
          items-center text-2xl text-white'>
          <Link
           to='home'
           activeClass='active'
           spy={true}
           className='cursor-pointer w-[60px] flex items-center
           justify-center hover:text-white/20'
          >
            <BiHomeAlt />
          </Link>
          <Link
           to='about'
           activeClass='active'
           spy={true}
           className='cursor-pointer w-[60px] flex items-center
          justify-center hover:text-white/20'
          >
            <BiUser />
          </Link>
          <Link
           to='services'
           activeClass='active'
           spy={true}
           className='cursor-pointer w-[60px] flex items-center
          justify-center hover:text-white/20'
          >
            <BsClipboardData />
          </Link>
          <Link
           to='work'
           activeClass='active'
           spy={true}
           className='cursor-pointer w-[60px] flex items-center
          justify-center hover:text-white/20'
          >
            <BsBriefcase />
          </Link>
          <Link
           to='contact'
           activeClass='active'
           spy={true}
           className='cursor-pointer w-[60px] flex items-center
          justify-center hover:text-white/20'
          >
            <BsChatSquareText />
          </Link>
          
        </div>
      </div>
    </nav>
  
}

export default Nav