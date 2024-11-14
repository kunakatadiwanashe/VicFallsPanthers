"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

import Img1 from '../assets/sld/1.png'
import Img2 from '../assets/sld/2.png'
import Img3 from '../assets/kun.png'
import Img4 from '../assets/kun.png'

const BannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = 4; // Number of slides

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 3000); // Adjust the interval time for sliding (3000 ms = 3 seconds)
    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="carousel w-[100vw] h-[60vh] md:h-[78vh]"> {/* Updated height here */}
      
      <div className={`carousel-item ${activeIndex === 0 ? 'block' : 'hidden'}`}>
        <Image src={Img1} className=" w-[100vw] md:w-[50vw] h-[50vh] md:h-[80vh] object-cover object-top" alt="Slide 1" /> {/* Updated height here */}
      </div>

      <div className={`carousel-item ${activeIndex === 1 ? 'block' : 'hidden'}`}>
        <Image src={Img2} className="w-[100vw] md:w-[50vw] h-[50vh] md:h-[80vh] object-cover object-top" alt="Slide 2" /> {/* Updated height here */}
      </div>

      <div className={`carousel-item ${activeIndex === 2 ? 'block' : 'hidden'}`}>
        <Image src={Img3} className="w-[100vw] md:w-[50vw] h-[50vh] md:h-[80vh] object-cover object-top" alt="Slide 3" /> {/* Updated height here */}
      </div>

      <div className={`carousel-item ${activeIndex === 3 ? 'block' : 'hidden'}`}>
        <Image src={Img4} className="w-[100vw] md:w-[50vw] h-[50vh] md:h-[80vh] object-cover object-top" alt="Slide 4" /> {/* Updated height here */}
      </div>
      
    </div>
  );
};

export default BannerSlider;