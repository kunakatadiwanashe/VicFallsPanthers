import React from "react";
import Image from "next/image";

import img3 from "../assets/sld/3.png";
import imgm from "../assets/imgm.jpg";
import mish from "../assets/mish.jpg";
import ora from "../assets/ora.jpg";

const Gallery = () => {
  return (
    <div className="flex flex-col md:flex-row pb-8 bg-[#1a1a1a21] pt-12">
      <div className="left w-full md:w-1/3 flex flex-wrap">
        <h2 className="text-3xl font-bold pl-5 pt-9 pb-4 text-center">Panthers Gallery</h2>
        <div className="w-[100vw] h-[30vh] md:pl-20 lg:w-[50vw] lg:h-[60vh] lg:pr-12">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/c-QS3mQtLPQ"
            title="Lights out💤"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-1/2 h-[30vh] md:pl-[16%]">
          <Image src={ora} alt="alt" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 h-[30vh]">
          <Image src={ora} alt="alt" className="w-full h-full object-cover" />
        </div>

      </div>

      <div className="right w-full md:w-2/3 flex flex-wrap md:pr-16">
        <div className="h-[40vh] w-full mb-4 lg:h-[60vh]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/XdQcjOi85FY"
            title="Men's Basketball Gold Medal Match 🏀 | Full Replay | Paris Replays"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="pl-6 md:pl-0 md:w-1/2 lg:w-1/3 h-[38vh] mb-4">
          <Image src={img3} alt="alt" className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 lg:w-1/3 h-[38vh] mb-4">
          <Image src={mish} alt="alt" className="w-full h-full object-cover object-top" />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 h-[38vh] mb-4">
          <Image src={imgm} alt="alt" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;



