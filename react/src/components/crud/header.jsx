import React from 'react'
import logo from "../../asset/mylogo.png";

const Header = () => {
  return (
    <div className=" z-10 flex justify-between items-center lg:px-10 h-20 w-full fixed top-0 shadow-md bg-light_brown">
      <div className="logo-container w-[150px] h-[300px]">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
      </div>
      <div className="flex items-center">
        <button className="px-6 lg:px-8 py-2  shadow text-white rounded-full bg-lightbrown hover:bg-brown hover:text-white">
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Header
