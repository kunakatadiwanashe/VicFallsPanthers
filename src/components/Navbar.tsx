import React from 'react';
import Image from "next/image";
import logo from "../assets/logo.png";



export default function Navbar() {
  return (
    <>
    <div className="navbar bg-base-100 flex justify-between">
  <div className="navbar-start flex justify-between md:justify-start w-[100vw]">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                    <a href="#" className="hover:text-[#08645d]">Home</a>
                    <a href="#" className="hover:text-[#08645d]">About</a>
                    <a href="#" className="hover:text-[#08645d]">Match Event</a>
                    <a href="#" className="hover:text-[#08645d]">Page</a>
                    <a href="#" className="hover:text-[#08645d]">Contact Us</a>

      </ul>
    </div>
    <div className="flex items-center mb-4 md:mb-0">
                    <Image src={logo} alt="logo" className="mr-2 w-[60px] md:w-[80px]" />
                </div>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-lg md:text-xl font-bold text-black">
                    <a href="#" className="hover:text-[#08645d]">Home</a>
                    <a href="#" className="hover:text-[#08645d]">About</a>
                    <a href="#" className="hover:text-[#08645d]">Match Event</a>
                    <a href="#" className="hover:text-[#08645d]">Page</a>
                    <a href="#" className="hover:text-[#08645d]">Contact Us</a>
                </nav>
    </ul>
  </div>

</div>
    </>
  )
}
