import React, { use } from 'react';
import userImg from '../../assets/user.png'
import flagImg from '../../assets/flag.png'

const AvailablePlayers = ({ playerPromise }) => {
    const playerData = use(playerPromise);
    // console.log(playerPromise)
    return (


        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>

            {
                playerData.map(player => <div className="card bg-base-100 shadow-sm p-4">
                    <figure>
                        <img
                            src={player.player_image}
                            alt="Shoes"
                            className='w-full h-[400px] object-cover'
                        />
                    </figure>
                    <div className="mt-4">
                        <div className='flex'>
                            <img src={userImg} alt="" />
                            <h2 className="card-title ml-2">{player.player_name}</h2>
                        </div>
                        <div className='flex justify-between mt-4 border-b-1 pb-2 border-gray-400'>
                            <div className='flex items-center '>
                                <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
                                <span className='ml-2'>{player.player_country}</span>
                            </div>
                            <button className='btn'>{player.playing_role}</button>
                        </div>

                        <div className='flex justify-between mt-2 '>
                            <span className='font-semibold'>Rating</span>
                            <span>{player.rating}</span>
                        </div>

                        <div className='flex justify-between mt-4'>
                            <span className='font-semibold'>{player.batting_style}</span>
                            <span>{player.bowling_style}</span>
                        </div>

                        <div className="card-actions mt-3 justify-between items-center">
                            <p className='font-semibold'>Price: ${player.price}</p>
                            <button className="btn">Choose Player</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default AvailablePlayers;