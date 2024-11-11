"use client"
import { useEffect, useState } from 'react';
import React from "react";
import Image from "next/image";

import kun from "../assets/kun.png";
import shawn from "../assets/sasha.png";
import danny from "../assets/lence.png";

import ball from "../assets/ball.png";

import BoysStats from "./boysStats";

const PlayerStats2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const players = [kun, danny, shawn]; // Array of player images

  // Array of player data
  const playerData = [
    { name: "Tadiwanashe Kunaka", points: "60pts", position: "PF / PG" },
    { name: "Danny Lence", points: "45pts", position: "SG / SF" },
    { name: "Shawn Sasha", points: "50pts", position: "SF / PF" },
  ];

  const slideCount = players.length; // Number of slides

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 3000); // Adjust the interval time for sliding (3000 ms = 3 seconds)
    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="flex flex-wrap h-auto min-h-[100vh]">
      <h2 className="pr-4 md:pr-28 pt-12 text-3xl font-bold w-full text-right">Players Statistics</h2>

      <div className="carousel carousel-center rounded-box p-4 w-full md:w-[65vw] h-auto md:h-[60vh] overflow-hidden">
        {players.map((player, index) => (
          <div key={index} className={`carousel-item w-full md:w-[60vw] h-auto md:h-[70vh] relative ${activeIndex === index ? 'block' : 'hidden'}`}>
            <Image
              src={ball}
              fill={true}
              alt={"Background Image"}
              className="w-full h-full object-cover"
            />
            <div className="absolute z-10 flex flex-col md:flex-row justify-between w-full h-full">
              <div className="text-white pl-4 md:pl-20 pt-4 md:pt-[25%]">
                <h4 className="text-xl">{playerData[index].points}</h4>
                <h3 className="text-2xl">{playerData[index].name}</h3>
                <h4 className="text-xl">{playerData[index].position}</h4>
              </div>
              <div className="w-full md:w-[35%] h-auto">
                <Image
                  src={player}
                  alt="Player"
                  className="rounded-box object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="stats ml-4 md:ml-5 w-full md:w-[25vw]">
        <BoysStats />
      </div>
    </div>
  );
};

export default PlayerStats2;