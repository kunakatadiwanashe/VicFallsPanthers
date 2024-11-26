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
  {
    name: "Chitinhe Emmanuel",
    position: "Forward",
    number: 1,
    image: kun, // You can replace with an actual image if available
    alt: "Player Chitinhe Emmanuel",
  },
  {
    name: "Chitura Cleopas",
    position: "Guard",
    number: 2,
    image: kun,
    alt: "Player Chitura Cleopas",
  },
  {
    name: "Dube Tatenda",
    position: "Guard",
    number: 3,
    image: kun,
    alt: "Player Dube Tatenda",
  },
  {
    name: "Enock Rosi",
    position: "Guard",
    number: 4,
    image: kun,
    alt: "Player Enock Rosi",
  },
  {
    name: "Gande Tafadzwa",
    position: "Centre",
    number: 5,
    image: kun,
    alt: "Player Gande Tafadzwa",
  },
  {
    name: "Gangata Innocent",
    position: "Guard",
    number: 6,
    image: kun,
    alt: "Player Gangata Innocent",
  },
  {
    name: "Kakurira Munashe",
    position: "Forward",
    number: 7,
    image: kun,
    alt: "Player Kakurira Munashe",
  },
  {
    name: "Kasuka Lance",
    position: "Centre",
    number: 8,
    image: kun,
    alt: "Player Kasuka Lance",
  },
  {
    name: "Masuku Duncan",
    position: "Centre",
    number: 9,
    image: kun,
    alt: "Player Masuku Duncan",
  },
  {
    name: "Mavangira Sean",
    position: "Guard",
    number: 10,
    image: kun,
    alt: "Player Mavangira Sean",
  },
  {
    name: "Moyo Lancelot",
    position: "Centre",
    number: 11,
    image: kun,
    alt: "Player Moyo Lancelot",
  },
  {
    name: "Mushitu Daros D",
    position: "Forward",
    number: 12,
    image: kun,
    alt: "Player Mushitu Daros D",
  },
  {
    name: "Mutongi Fortune Tendai",
    position: "Guard",
    number: 13,
    image: kun,
    alt: "Player Mutongi Fortune Tendai",
  },
  {
    name: "Ncube Solomon M",
    position: "Forward",
    number: 14,
    image: kun,
    alt: "Player Ncube Solomon M",
  },
  {
    name: "Ndlovu Daniel Z",
    position: "Forward",
    number: 15,
    image: kun,
    alt: "Player Ndlovu Daniel Z",
  },
  {
    name: "Nyango Tafara",
    position: "Forward",
    number: 16,
    image: kun,
    alt: "Player Nyango Tafara",
  },
  {
    name: "Nyathi Malcolm T",
    position: "Guard",
    number: 17,
    image: kun,
    alt: "Player Nyathi Malcolm T",
  },
  {
    name: "Rosi Kundai",
    position: "Guard",
    number: 18,
    image: kun,
    alt: "Player Rosi Kundai",
  },
  {
    name: "Sibanda Jadel M",
    position: "Guard",
    number: 19,
    image: kun,
    alt: "Player Sibanda Jadel M",
  },

];

const PlayerCard = ({ player }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleStatsClick = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <div className="bg-black text-white rounded-lg overflow-hidden shadow-lg m-4 relative md:h-[50vh]">
        <div className="relative">
          <Image
            src={player.image}
            alt={player.alt}
            className="w-full h-[40vh] object-contain"
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