"use client"


import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import kun from '../assets/kun.png'
import sasha from '../assets/sasha.png'

// Define the props interface
interface PlayerCardProps {
    imageSrc: StaticImageData; // Change string to StaticImageData
    altText: string;
    playerName: string;
    position: string;
    number: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ imageSrc, altText, playerName, position, number }) => {
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
    const router = useRouter();
    const players = [
        {
            name: "Sasha Sasha",
            position: "CENTER-FORWARD",
            number: 13,
            image: kun,
            alt: "Player Sasha Sasha",
        },
        {
            name: "Tadiwanashe Kunaka",
            position: "CENTER/SF",
            number: 11,
            image: kun,
            alt: "Player Tadiwanashe Kunaka",
        },
        {
            name: "Danny Danny",
            position: "GUARD",
            number: 18,
            image: kun,
            alt: "Player Danny Danny",
        },
        {
            name: "Shawn Shawn",
            position: "GUARD",
            number: 19,
            image: kun,
            alt: "Player Shawn Shawn",
        },
        {
            name: "Chitinhe Emmanuel",
            position: "POINT GUARD",
            number: 5,
            image: sasha,
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
                <button 
                    className="border border-[#118985] text-[#118985] px-4 py-2 hover:bg-[#118985] hover:text-white transition duration-300"
                    aria-label="Navigate to Ladies First Team"
                >
                    <Link href={"/ladiesTeam"} className="text-xl md:text-2xl font-bold">Ladies First Team</Link>
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                {players.map((player, index) => (
                    <PlayerCard 
                        key={index}
                        imageSrc={player.image}
                        altText={player.alt}
                        playerName={player.name}
                        position={player.position}
                        number={player.number}
                    />
                ))}
            </div>

            <button
                onClick={() => router.push('/mensTeam')}
                className="mt-28 font-bold border border-[#118985] text-[#118985] px-4 py-2 hover:bg-[#118985] hover:text-white transition duration-300"
            >
                See All Squad Members
            </button>
        </div>
    );
};

export default BoysTeam;