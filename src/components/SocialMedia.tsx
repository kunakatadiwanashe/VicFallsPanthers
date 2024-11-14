"use client";
import { useEffect, useState } from "react";


const SocialMedia = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = 4; // Number of slides

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 3000); // Adjust the interval time for sliding (3000 ms = 3 seconds)
    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div>
      <h2 className="text-3xl pl-4 font-bold">Social Media</h2>
      <div className="carousel w-[100vw] h-[60vh] md:h-[50vh]">
        <div
          className={`carousel-item ${activeIndex === 0 ? "block" : "hidden"}`}
        >
          instagram
        </div>
      </div>

    </div>
  );
};

export default SocialMedia;
