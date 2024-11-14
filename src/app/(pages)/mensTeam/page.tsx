"use client"
import React, { useState } from "react";
import Image from "next/image";
import kun from "../../../assets/kun.png";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";

const players = [
  {
    name: "Sasha Sasha",
    position: "CENTER-FORWARD",
    number: 13,
    image: kun,
    alt: "Player Bam Adebayo",
  },
  {
    name: "Tadiwanashe Kunaka",
    position: "CENTER/SF",
    number: 11,
    image: kun,
    alt: "Player Thomas Bryant",
  },
  {
    name: "Danny Danny",
    position: "GUARD",
    number: 18,
    image: kun,
    alt: "Player Alec Burks",
  },
  {
    name: "Shawn Shawn",
    position: "GUARD",
    number: 18,
    image: kun,
    alt: "Player Alec Burks",
  },

];

const PlayerCard = ({ player }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleStatsClick = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <div className="bg-black text-white rounded-lg overflow-hidden shadow-lg m-4 relative">
        <div className="relative">
          <Image
            src={player.image}
            alt={player.alt}
            className="w-full h-96 object-cover"
            width={384}
            height={384}
          />
          <div className="absolute top-4 right-4 text-4xl font-bold text-white">
            {player.number}
          </div>
        </div>

        <div className="p-4 flex justify-between">
          <div className="flex flex-col justify-between ">
            <div className="text-lg font-bold">{player.name}</div>
            <div className="text-sm text-gray-400">{player.position}</div>
          </div>
          <div
            className="bg-yellow-500 text-black text-center cursor-pointer font-bold p-3 rounded-full"
            onClick={handleStatsClick}
          >
            + Stats
          </div>
        </div>

        {showOverlay && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg">
            <div className="p-4">
              <h2 className="font-bold">{player.name} starts</h2>
              <div>Player stats............................................</div>
              <button
                className="mt-4 bg-red-500 text-white p-2 rounded"
                onClick={handleStatsClick}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const PlayerList = () => (
  <>
    <Navbar />
    <Hero />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {players.map((player) => (
        <PlayerCard key={player.name} player={player} />
      ))}
    </div>
    <Footer />
  </>
);

export default PlayerList;