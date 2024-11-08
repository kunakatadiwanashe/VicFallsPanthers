import React from "react";
import Image from "next/image";

import sasha from "../assets/kun.jpg";
import kun from "../assets/kun.png";
import shawn from "../assets/kun.jpg";
import danny from "../assets/kun.jpg";

import ball from "../assets/ball.png";

import BoysStats from "./boysStats";

const PlayerStats2 = () => {
  return (
    <div className="flex flex-wrap h-[100vh]">
      <h2 className="pr-28 pt-12 text-3xl font-bold w-full text-right">Players Statistics</h2>

      <div className="carousel carousel-center rounded-box   p-4 w-[65vw] h-[60vh] overflow-y-hidden">


        <div className="carousel-item w-[60vw] h-[70vh] relative">
          <Image
            src={ball}
            fill={true}
            alt={"Background Image"}
            className="w-[100%] h-[100%]"
          />
          <div className="absolute z-10 flex justify-between ">
          <div className=" text-white pl-20 pt-[25%]">
            <h4 className="text-xl">60pts</h4>
            <h3 className="text-2xl">Tadiwanashe Kunaka</h3>
            <h4 className="text-xl">PF / PG</h4>
          </div>
              <div className="w-[30%] h-[100%]">
              <Image
            src={kun}
            alt="Player"
            className="rounded-box object-contain w-[100%] h-[100%]"

          />
              </div>
          </div>
        </div>



      </div>

      <div className="stats  ml-5 w-[25vw]">
        <BoysStats />
      </div>
    </div>
  );
};

export default PlayerStats2;
