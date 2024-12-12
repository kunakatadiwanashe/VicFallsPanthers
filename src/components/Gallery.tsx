"use client";
import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = 2; // Number of slides

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 3000); // Adjust the interval time for sliding (3000 ms = 3 seconds)
    return () => clearInterval(interval);
  }, [slideCount]);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  return (
    <div className="w-full flex p-12 h-full">
      <div className="w-1/3 flex justify-center align-center h-full">
        <h2 className="text-3xl font-bold">Trending Videos & Games</h2>
      </div>

      <div className="w-2/3 carousel h-[60vh] md:h-[70vh] flex md:overflow-hidden rounded-3xl relative">
        <div className={`carousel-item ${activeIndex === 0 ? "block" : "hidden"}`}>
          <iframe
            width="900"
            height="700"
            src="https://www.youtube.com/embed/oRfruo-DyPM"
            title="Munashe Kakurira"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className={`carousel-item ${activeIndex === 1 ? "block" : "hidden"}`}>
          <iframe
            width="951"
            height="535"
            src="https://www.youtube.com/embed/XdQcjOi85FY"
            title="Ladies: VicFalls Panthers Vs Royal Eagles"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
          onClick={goToPrevious}
        >
          &#10094; {/* Left Arrow */}
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
          onClick={goToNext}
        >
          &#10095; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default Gallery;