import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';

const FunClub = () => {
    return (
        <div className="flex h-[30vh]">
            <div className="w-[60vw] bg-red-600 flex flex-col justify-center items-start p-16">
                <h2 className="text-white text-sm font-bold mb-4">JOIN OUR TEAM</h2>
                <h1 className="text-white text-3xl font-bold mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    JOIN OUR FAN CLUB AND GET FREE TICKET
                </h1>
                <button className="bg-white text-red-600 font-bold py-2 px-6 rounded">
                    REGISTER
                </button>
            </div>
            <div className="w-[40vw]">
                <Image src={logo} alt="A person holding a basketball" className="w-full h-full object-contain" />
            </div>
        </div>
    );
};

export default FunClub;