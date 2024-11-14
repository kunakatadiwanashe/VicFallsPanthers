import Image from 'next/image';
import nxt from '../assets/suns.jpg';

const NextMatch = () => {
    return (
        <div className="container p-4 md:p-10 h-auto md:h-[90vh] bg-black text-white" id='match'>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex items-center mb-4 md:mb-0">
                    <i className="fas fa-bolt text-red-500 mr-2"></i>
                    <h1 className="text-2xl md:text-3xl font-bold">LATEST RESULTS</h1>
                </div>
                <div className="flex items-center">
                    <i className="fas fa-bolt text-red-500 mr-2"></i>
                    <h1 className="text-2xl md:text-3xl font-bold">TODAY S BASKETBALL MATCHES</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-[45vw] h-auto md:h-[50vh] overflow-auto">
                    {[
                        { date: 'Saturday, November 2', location: 'Chambabondo Primary', teamA: 'Victoria Falls Panthers', scoreA: '111', scoreB: '55', teamB: 'Titans' },
                        { date: 'Saturday, October 26', location: 'Asward Sports Centre', teamA: 'Royal Eagles Academy', scoreA: '51', scoreB: '55', teamB: 'Victoria Falls Panthers' },
                        { date: 'Saturday, October 19', location: ' Training Centre', teamA: 'Victoria Falls Panthers', scoreA: '55', scoreB: '70', teamB: 'Victoria Falls Suns' },
                        { date: 'Saturday, November 2', location: 'Chambabondo Primary', teamA: 'Victoria Falls Panthers', scoreA: '111', scoreB: '55', teamB: 'Titans' },
                        { date: 'Saturday, October 26', location: 'Asward Sports Centre', teamA: 'Royal Eagles Academy', scoreA: '51', scoreB: '55', teamB: 'Victoria Falls Panthers' },
                        { date: 'Saturday, October 19', location: ' Training Centre', teamA: 'Victoria Falls Panthers', scoreA: '55', scoreB: '70', teamB: 'Victoria Falls Suns' },
                    ].map((match, index) => (
                        <div key={index} className="bg-black text-white p-4 mb-2">
                            <div className="flex flex-col">
                                <span>{match.date}</span>
                                <span className=' text-[#118985]'>{match.location}</span>
                            </div>
                            <div className="flex font-bold">
                                <span>{match.teamA}</span>
                                <span className='text-[#118985] pl-12 pr-12'>{match.scoreA}:{match.scoreB}</span>
                                <span>{match.teamB}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full md:w-[80vw] h-auto md:h-[66.5vh] mt-4 md:mt-0">
                    <Image src={nxt} alt="Next basketball match" className='object-contain h-full w-full' />
                </div>
            </div>
        </div>
    );
};

export default NextMatch;