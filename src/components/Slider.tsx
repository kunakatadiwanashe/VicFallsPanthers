"use client"
import { useEffect, useState } from 'react';

const AutoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = 4; // Number of slides

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 3000); // Adjust the interval time for sliding (3000 ms = 3 seconds)
    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="carousel w-full">
      <div className={`carousel-item ${activeIndex === 0 ? 'block' : 'hidden'}`}>
        <img src="/images/slide1.jpg" className="w-full" alt="Slide 1" />
      </div>
      <div className={`carousel-item ${activeIndex === 1 ? 'block' : 'hidden'}`}>
        <img src="/images/slide2.jpg" className="w-full" alt="Slide 2" />
      </div>
      <div className={`carousel-item ${activeIndex === 2 ? 'block' : 'hidden'}`}>
        <img src="/images/slide3.jpg" className="w-full" alt="Slide 3" />
      </div>
      <div className={`carousel-item ${activeIndex === 3 ? 'block' : 'hidden'}`}>
        <img src="/images/slide4.jpg" className="w-full" alt="Slide 4" />
      </div>
    </div>
  );
};

export default AutoCarousel;
