import React, { useState } from 'react';
import userImg from '../../assets/user.png'
import flagImg from '../../assets/flag.png'
import { toast } from 'react-toastify';

const PlayerCard = ({ player, SetavailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleSelected = (playerData) => {
        const playerPrice = playerData.price
        if (availableBalance < playerPrice) {
            toast('Not enough Coin!!')
            return;
        }
        if (purchasedPlayers.length === 6) {
            toast('6 Players already selected!!')
            return;
        }
        setIsSelected(true);
        SetavailableBalance(availableBalance - playerPrice);
        setPurchasedPlayers([...purchasedPlayers, playerData])
    }


    return (
        <div className="card bg-base-100 shadow-sm p-4">
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
                    <p className='font-semibold'>Price: ${player.price} USD</p>
                    <button disabled={isSelected} onClick={() => { handleSelected(player) }} className="btn">{isSelected === true ? 'Selected' : 'Choose Player'}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;