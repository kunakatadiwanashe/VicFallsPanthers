import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";

import kun from "../../../assets/kun.png";

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

const PlayerCard = ({ player }) => (


<>
<div className="bg-black text-white rounded-lg overflow-hidden shadow-lg m-4">
    <div className="relative">
      <Image
        src={player.image}
        alt={player.alt}
        className="w-full h-96 object-cover object-top"
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
      <div className="bg-yellow-500 text-black text-center cursor-pointer font-bold p-3 rounded-full">
        + Stats
      </div>
    </div>
  </div>


</>
);

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
