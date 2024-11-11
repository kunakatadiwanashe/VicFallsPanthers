import React from 'react'

const GamesPlayed = () => {
  return (
    <div>


    <div className="flex justify-around items-center py-10">
        <div className="text-center">
            <i className="fas fa-basketball-ball text-purple-700 text-6xl"></i>
            <div className="text-5xl font-bold text-black mt-2">130</div>
            <div className="text-lg text-black">Matches Played</div>
        </div>
        <div className="text-center">
            <i className="fas fa-basketball-ball text-purple-700 text-6xl"></i>
            <div className="text-5xl font-bold text-black mt-2">27</div>
            <div className="text-lg text-black">Total Points</div>
        </div>
        <div className="text-center">
            <i className="fas fa-tshirt text-purple-700 text-6xl"></i>
            <div className="text-5xl font-bold text-black mt-2">36</div>
            <div className="text-lg text-black">Team Members</div>
        </div>
        <div className="text-center">
            <i className="fas fa-trophy text-purple-700 text-6xl"></i>
            <div className="text-5xl font-bold text-black mt-2">39</div>
            <div className="text-lg text-black">Awards Won</div>
        </div>
    </div>


    </div>
  )
}

export default GamesPlayed
