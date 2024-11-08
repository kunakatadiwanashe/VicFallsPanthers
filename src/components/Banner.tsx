import React from "react";
import Image from "next/image";

import logo from "../assets/logo.png";
import bg from "../assets/bg.png"; 
import BannerSlide from "./BannerSlide";

// style={{ backgroundImage: `url(${bg.src})` }} 

const Banner = () => {
return (
<div className="min-h-screen overflow-x-hidden bg-cover bg-center">


    <header className="flex justify-between items-center pl-20 pr-20 h-[10vh]">
        <div className="flex items-center">
            <Image src={logo} alt="logo" className="mr-2" className="w-[80px]" />
        </div>
        <nav className="flex space-x-6 text-xl font-bold text-black">
            <a href="#" className="hover:text-[#08645d]">
                Home
            </a>
            <a href="#" className="hover:text-[#08645d]">
                About
            </a>
            <a href="#" className="hover:text-[#08645d]">
                Match Event
            </a>
            <a href="#" className="hover:text-[#08645d]">
                Page
            </a>
            <a href="#" className="hover:text-#08645d0">
                Contact Us
            </a>
        </nav>
    </header>

    <main className="flex flex-col items-start p-10 md:flex-row md:items-center md:justify-between md:p-12">
        <div className="w-[50%] p-16 pt-40 text-[#118985]">
            <h1 className="text-6xl font-bold mb-4 drop-shadow-2xl">
                Victoria Falls Panthers Basketball
            </h1>
            <p className="mb-6 text-xl text-black">
                Premier Amateur Basketball Club in Victoria Falls, Zimbabwe
                affiliated to the Matabeleland North Basketball League.
            </p>
            <button className="bg-[#118985] text-white px-6 py-3 rounded">
                Get Started →
            </button>
        </div>


        <div className="relative mt-6 md:mt-0 pr-28">
          <BannerSlide />

        </div>



    </main>

</div>
);
};

export default Banner;