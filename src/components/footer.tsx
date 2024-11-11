import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div className='text-white flex flex-col items-center'>
                        <Image src={logo} alt="logo" width={200} height={100} />
                        <div className="flex text-center justify-evenly mt-4">
                            <a href="#" className="bg-[#118985] p-2 rounded-full">
                                <FaFacebook />
                            </a>
                            <a href="#" className="bg-[#118985] p-2 rounded-full mx-4">
                                <FaInstagramSquare />
                            </a>
                            <a href="#" className="bg-[#118985] p-2 rounded-full">
                                <AiFillTikTok />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg mb-4">Services</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Senior Team</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">For Kids</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Reviews</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg mb-4">About Us</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Our Story</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Meet the team</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Coach</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg mb-4">Company</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg mb-4">Have a Questions?</h2>
                        <ul>
                            <li className="mb-2 flex items-center"><i className="fas fa-map-marker-alt mr-2"></i>Victoria Falls, Zimbabwe</li>
                            <li className="mb-2 flex items-center"><i className="fas fa-phone mr-2"></i>+2 392 3929 210</li>
                            <li className="mb-2 flex items-center"><i className="fas fa-envelope mr-2"></i>info@vicfallspanther</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <p>Copyright ©2024 All rights reserved <i className="fas fa-heart text-red-500"></i> by VicFalls Panthers</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;