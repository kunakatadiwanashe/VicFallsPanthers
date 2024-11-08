import React from 'react'

const BoysStat = () => {
  return (
    <div>

      <table className="w-full mt-4">
                                <thead>
                                    <tr className="text-left">
                                        <th className="py-2">POS</th>
                                        <th className="py-2">Name</th>
                                        <th className="py-2">Points</th>
                                        <th className="py-2">L</th>
                                        <th className="py-2">PTT</th>
                                        <th className="py-2">%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { pos: 1, team: 'Florence Munoz', w: 14, l: 1, ptt: 28, pct: 93 },
                                        { pos: 2, team: 'Victoria Lawrence', w: 14, l: 1, ptt: 28, pct: 93 },
                                        { pos: 3, team: 'Frances Matthews', w: 14, l: 1, ptt: 28, pct: 93 },
                                        { pos: 4, team: 'George Chambers', w: 14, l: 1, ptt: 28, pct: 93 },
                                        { pos: 5, team: 'Nathaniel Murphy', w: 14, l: 1, ptt: 28, pct: 93 },
                                        { pos: 6, team: 'Tony Jordan', w: 14, l: 1, ptt: 28, pct: 93 },
                                    ].map((row, index) => (
                                        <tr key={index} className="border-t">
                                            <td className="py-2">{row.pos}</td>
                                            <td className="py-2">{row.team}</td>
                                            <td className="py-2">{row.w}</td>
                                            <td className="py-2">{row.l}</td>
                                            <td className="py-2">{row.ptt}</td>
                                            <td className="py-2">{row.pct}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
    </div>
  )
}

export default BoysStat
