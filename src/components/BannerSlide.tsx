import React from 'react';
import Image from 'next/image';

import  img1 from '../assets/sld/1.png'
import  img2 from '../assets/sld/2.png'
import  img3 from '../assets/sld/3.png'
import  img4 from '../assets/sld/4.png'






const BannerSlide = () => {
  return (
    <div className="carousel carousel-center  rounded-box max-w-md space-x-4 p-4" >
      <div className="carousel-item">
        <Image
          src={img1}   className="rounded-box"
          alt="Banner Image"
          width={400} // Specify width
          height={300} // Specify height
        />
      </div>

      <div className="carousel-item">
        <Image
          src={img2}   className="rounded-box"
          alt="Banner Image"
          width={400} // Specify width
          height={300} // Specify height
        />
      </div>


      <div className="carousel-item">
        <Image
          src={img3}   className="rounded-box"
          alt="Banner Image"
          width={400} // Specify width
          height={300} // Specify height
        />
      </div>


      <div className="carousel-item">
        <Image
          src={img4}   className="rounded-box"
          alt="Banner Image"
          width={400} // Specify width
          height={300} // Specify height
        />
      </div>





    </div>
  );
};



export default BannerSlide;