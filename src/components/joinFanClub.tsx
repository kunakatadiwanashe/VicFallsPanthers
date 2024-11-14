import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png'; // Ensure you have different logos if needed
import bg from '../assets/bgg.jpg';

const FunClub = () => {
    return (
        <div>
            <header className="bg-white py-4">
                <div className="container mx-auto flex flex-wrap justify-center md:justify-between px-4">
                    <Image src={logo} alt="Edge Logo" className="h-12 w-12 m-2" />
                    <Image src={logo} alt="Aramiz Logo" className="h-12 w-12 m-2" />
                    <Image src={logo} alt="Kphone Logo" className="h-12 w-12 m-2" />
                    <Image src={logo} alt="TVC Logo" className="h-12 w-12 m-2" />
                    <Image src={logo} alt="Arcade Logo" className="h-12 w-12 m-2" />
                </div>
            </header>

            <main className="relative h-[40vh]">
                <Image 
                    src={bg} 
                    alt="Basketball game background" 
                    width={1920} 
                    height={1080} 
                    className="w-full h-[40vh] object-cover" 
                />
                <div className="absolute inset-0 bg-[#118985] bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">JOIN OUR FAN CLUB AND</h1>
                    <h1 className="text-3xl md:text-5xl font-bold mb-8">GET FREE TICKET</h1>
                    <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded hover:bg-yellow-400 transition duration-300">
                        JOIN US
                    </button>
                </div>
            </main>
        </div>
    );
};

export default FunClub;