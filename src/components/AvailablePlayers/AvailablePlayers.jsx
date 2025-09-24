import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playerPromise, SetavailableBalance, availableBalance }) => {
    const playerData = use(playerPromise);
    // console.log(playerPromise)
    return (


        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>

            {
                playerData.map(player => <PlayerCard availableBalance={availableBalance} SetavailableBalance={SetavailableBalance} player={player}></PlayerCard>)
            }

        </div>
    );
};

export default AvailablePlayers;