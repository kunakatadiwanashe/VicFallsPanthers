import Image from 'next/image';
import nxt from '../assets/suns.jpg';

const NextMatch = () => {
    return (
        <div className="container  p-10 h-[90vh] bg-black text-white">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                    <i className="fas fa-bolt text-red-500 mr-2"></i>
                    <h1 className="text-3xl font-bold">LATEST RESULTS</h1>
                </div>
                <div className="flex items-center">
                    <i className="fas fa-bolt text-red-500 mr-2"></i>
                    <h1 className="text-3xl font-bold">TODAY'S BASKETBALL MATCHES</h1>
                </div>
            </div>
            <div className="flex">
                <div className="w-[45vw] h-[50vh]">
                    {[

                        { date: 'Saturday, November 2', location: 'Chambabondo Primary', teamA: 'Victoria Falls Panthers', scoreA: '111', scoreB: '55', teamB: 'Titans' },
                        { date: 'Saturday, October 26', location: 'Asward Sports Centre', teamA: 'Royal Eagles Academy', scoreA: '51', scoreB: '55', teamB: 'Victoria Falls Panthers' },
                        { date: 'Saturday, October 19', location: ' Training Centre', teamA: 'Victoria Falls Panthers', scoreA: '55', scoreB: '70', teamB: 'Victoria Falls Suns' },
                        { date: 'Saturday, November 2', location: 'Chambabondo Primary', teamA: 'Victoria Falls Panthers', scoreA: '111', scoreB: '55', teamB: 'Titans' },
                        { date: 'Saturday, October 26', location: 'Asward Sports Centre', teamA: 'Royal Eagles Academy', scoreA: '51', scoreB: '55', teamB: 'Victoria Falls Panthers' },
                        { date: 'Saturday, October 19', location: ' Training Centre', teamA: 'Victoria Falls Panthers', scoreA: '55', scoreB: '70', teamB: 'Victoria Falls Suns' },
                    ].map((match, index) => (
                        <div key={index} className="bg-black text-white p-4 mb-2">
                            <div className="flex justify-between">
                                <span>{match.date}</span>
                                <span>{match.location}</span>
                            </div>
                            <div className="flex justify-between font-bold">
                                <span>{match.teamA}</span>
                                <span>{match.scoreA}:{match.scoreB}</span>
                                <span>{match.teamB}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-[80vw] h-[66.5vh]">
                    <Image src={nxt} alt="Next basketball match" className='object-contain h-full w-full' />
                </div>
            </div>
        </div>
    );
};

export default NextMatch;