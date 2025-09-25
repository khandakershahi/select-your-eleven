import React from 'react';
import deleteImg from "../../assets/delete.png";
const SelectedCard = ({ player, removePlayer }) => {
    console.log(player)

    const handleRemove = () => {
        removePlayer(player)
    }
    return (


        <div className='border-2 border-gray-100 rounded-xl p-3 flex justify-between items-center mt-4'>
            <div className='flex gap-3 items-center'>
                <img className='h-[50px] w-[50px] rounded-xl' src={player.player_image} alt="" />
                <div>
                    <h1>{player.player_name}</h1>
                    <p className='text-xs'>{player.playing_role}</p>

                </div>
            </div>
            <div onClick={handleRemove}>
                <img src={deleteImg} alt="" />
            </div>

        </div>

    );
};

export default SelectedCard;