"use client"
import Image from "next/image";

import kun from "../assets/kun.png";
import sasha from "../assets/sasha.png";
import munashe from "../assets/man/munashe.JPG";
import tk from "../assets/man/tk.JPG";


import { useRouter } from 'next/navigation';
import Link from "next/link";

const PlayerCard = ({ imageSrc, altText, playerName, position, number }) => {
    return (
        <div className="shadow-2xl text-center h-[45vh] border pb-20 md:pb-0">
            <Image src={imageSrc} alt={altText} className="w-full h-[100%] mb-4 object-contain mb:object-cover" />
            <div className="relative">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2">
                    #{number}
                </div>
            </div>
            <h2 className="text-lg md:text-xl font-bold mt-4">{playerName}</h2>
            <p className="text-gray-400">{position}</p>
        </div>
    );
};

const BoysTeam = () => {
    const router = useRouter(); // Initialize useRouter
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
            image: tk,
            alt: "Player Alec Burks",
          },
          {
            name: "Shawn Shawn",
            position: "GUARD",
            number: 18,
            image: munashe,
            alt: "Player Alec Burks",
          },
          {
            name: "Chitinhe Emmanuel",
            position: "Point Guard",
            number: 5,
            image: sasha, // You can replace with an actual image if available
            alt: "Player Chitinhe Emmanuel",
          },
    ];

    return (
        <div className="p-4 md:p-8 pb-24 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex items-center mb-4 md:mb-0">
                    <i className="fas fa-bolt text-[#118985] text-2xl mr-2"></i>
                    <h1 className="text-xl md:text-2xl font-bold">Mens First Team</h1>
                </div>
                <button className="border border-[#118985] text-[#118985] px-4 py-2 hover:bg-[#118985] hover:text-white transition duration-300">
                    <Link href={"/ladiesTeam"} className="text-xl md:text-2xl font-bold">Ladies First Team</Link>
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                {players.map((player, index) => (
                    <PlayerCard 
                        key={index}
                        imageSrc={player.image}
                        altText={`Player ${index + 1}`}
                        playerName={player.name}
                        position={player.position}
                        number={player.number}
                    />
                ))}
            </div>

            <button
                onClick={() => router.push('/mensTeam')} // Navigate to the new page
                className="mt-28 font-bold border border-[#118985] text-[#118985] px-4 py-2 hover:bg-[#118985] hover:text-white transition duration-300"  >
                See All Squad Members
            </button>

        </div>
    );
};

export default BoysTeam;