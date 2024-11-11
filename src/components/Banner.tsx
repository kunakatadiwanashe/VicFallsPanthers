import React from "react";
import Image from "next/image";

import logo from "../assets/logo.png";
import BannerSlide from "./BannerSlide";
import Navbar from "./Navbar";


// style={{ backgroundImage: `url(${bg.src})` }}

const Banner = () => {
    return (
        <div className="min-h-screen overflow-x-hidden bg-cover bg-center" >

            {/* <header className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
                <div className="flex items-center mb-4 md:mb-0">
                    <Image src={logo} alt="logo" className="mr-2 w-[60px] md:w-[80px]" />
                </div>
                <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-lg md:text-xl font-bold text-black">
                    <a href="#" className="hover:text-[#08645d]">Home</a>
                    <a href="#" className="hover:text-[#08645d]">About</a>
                    <a href="#" className="hover:text-[#08645d]">Match Event</a>
                    <a href="#" className="hover:text-[#08645d]">Page</a>
                    <a href="#" className="hover:text-[#08645d]">Contact Us</a>
                </nav>
            </header> */}
            <Navbar />

            <main className="flex flex-col items-center md:flex-row md:items-center md:justify-between p-4 md:p-12 lg:p-0">
                <div className="w-full md:w-[50%] p-4 md:p-16 pt-10 md:pt-40 lg:pt-4 text-[#118985] text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
                        Victoria Falls Panthers Basketball
                    </h1>
                    <p className="mb-6 text-lg md:text-xl text-black">
                        Premier Amateur Basketball Club in Victoria Falls, Zimbabwe
                        affiliated to the Matabeleland North Basketball League.
                    </p>
                    <button className="bg-[#118985] text-white px-4 py-2 md:px-6 md:py-3 rounded">
                        Get Started →
                    </button>
                </div>

                <div className="relative mt-6 lg:mt-0 md:mt-0 w-full md:w-[50%] pr-0 md:pr-28 lg:h[100vh]">
                    <BannerSlide />
                </div>
            </main>
        </div>
    );
};

export default Banner;