import Image from "next/image";
import kun from "../assets/kun.png";
import sasha from "../assets/sasha.png";
import shawn from "../assets/shwan.png";
import lence from "../assets/lence.png";

const BoysTeam = () => {
    return (
        <div className="p-4 md:p-8 pb-24">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex items-center mb-4 md:mb-0">
                    <i className="fas fa-bolt text-[#118985] text-2xl mr-2"></i>
                    <h1 className="text-xl md:text-2xl font-bold">Mens First Team</h1>
                </div>
                <button className="border border-[#118985] text-[#118985] px-4 py-2 hover:bg-[#118985] hover:text-white transition duration-300">
                    <h1 className="text-xl md:text-2xl font-bold">Ladies First Team</h1>
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                <div className="shadow-2xl text-center h-[55vh] pb-20 md:pb-0">
                    <Image src={sasha} alt="Player 1" className="w-full h-[100%] mb-4 object-contain mb:object-cover" />
                    <div className="relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2">
                            #11
                        </div>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold mt-4">Tadiwanashe Kunaka</h2>
                    <p className="text-gray-400">P.G / P.F</p>
                </div>

                <div className="shadow-2xl text-center h-[55vh] border pb-20 md:pb-0">
                    <Image src={kun} alt="Player 2" className="w-full h-[100%] mb-4 object-contain mb:object-cover" />
                    <div className="relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2">
                            #11
                        </div>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold mt-4">Tadiwanashe Kunaka</h2>
                    <p className="text-gray-400">P.G / P.F</p>
                </div>

                <div className="shadow-2xl text-center h-[55vh] border pb-20 md:pb-0">
                    <Image src={shawn} alt="Player 3" className="w-full h-[100%] mb-4 object-contain mb:object-cover" />
                    <div className="relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2">
                            #11
                        </div>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold mt-4">Tadiwanashe Kunaka</h2>
                    <p className="text-gray-400">P.G / P.F</p>
                </div>

                <div className="shadow-2xl text-center h-[55vh] border pb-20 md:pb-0">
                    <Image src={lence} alt="Player 4" className="w-full h-[100%] mb-4 object-contain mb:object-cover" />
                    <div className="relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2">
                            #11
                        </div>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold mt-4">Tadiwanashe Kunaka</h2>
                    <p className="text-gray-400">P.G / P.F</p>
                </div>
            </div>
        </div>
    );
};

export default BoysTeam;