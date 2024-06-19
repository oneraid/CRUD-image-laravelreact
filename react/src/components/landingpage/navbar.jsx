import React, { useState } from 'react'
import logo from "../../asset/mylogo.png";
import { navLink } from '../../data/dummy';
import { Link } from 'react-scroll';
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
    setNav(false); // Close the mobile menu after clicking a link
  };
  return (
    <div className='z-10 flex justify-between items-center lg:px-[72px] h-[80px] w-full fixed top-0'>
      <div className='w-[150px] h-[300px]'>
      <img src={logo} alt="" className='w-full h-full object-contain' />
      </div>
      <ul className='hidden md:flex'>
        <li className='flex gap-x-4'>
          {navLink.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              className='hover:text-brown text-lg md:text-md cursor-pointer'
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </a>
          ))}
        </li>
      </ul>
      <div className='flex items-center'>
        <button className="px-6 lg:px-8 py-2 bg-lightbrown outline-none hover:bg-brown hover:text-white rounded-full">
          Sign In
        </button>
        <HiMenu className='text-2xl block md:hidden cursor-pointer' onClick={()=> setNav(prev=>!prev)}/>
      </div>
      <div className={`${nav ? "right-0" : "-right-[100%]"} flex flex-col gap-4 pt-5 px-5 md:hidden absolute top-0 w-full h-screen bg-white`}>
        <MdOutlineClose className='cursor-pointer text-2xl'onClick={()=> setNav(prev=>!prev)}/>
        <ul className=''>
          <li className='flex gap-y-4 flex-col'>
            {navLink.map((item) => (
              <a
                href={`#${item.id}`}
                key={item.id}
                className='hover:text-orange text-sm md:text-md border-b cursor-pointer py-3'
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </a>
            ))}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
