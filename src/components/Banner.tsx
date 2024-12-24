"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image"; 
import Navbar from "./Navbar"; 

import b1 from "../assets/bg/1.jpg";
import b2 from "../assets/bg/2.jpg"; 

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [b1, b2]; // Array of slide images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="carousel w-full h-[90vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`carousel-item w-full relative ${index === currentSlide ? 'block' : 'hidden'}`}
          >
            <Image src={slide} alt={`Description of slide ${index + 1}`} className="w-full" />

            <div className="absolute top-0 w-[100%]">
              <Navbar />
            </div>

            <div className="w-full absolute top-48 md:w-[60%] p-4 md:p-16 pt-10 md:pt-40 lg:pt-10 text-white text-center md:text-left">
              <p className="text-[] pb-4">We Are</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl ">
                Victoria Falls Panthers Basketball
              </h1>
              <p className="mb-6 text-lg md:text-xl md:pb-12 md:pt-8 text-white">
                Premier Amateur Basketball Club in Victoria Falls, Zimbabwe
                affiliated to the Matabeleland North Basketball League.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Banner;