import React from 'react';
import navImg from '../../assets/logo.png';
import dollarImg from '../../assets/coin.png';
const Navbar = ({ availableBalance }) => {
    return (
        <nav className="navbar max-w-[1200px] mx-auto">
            <div className="flex-1">
                <a className="text-xl">
                    <img className='w-[60px] h-[60px]' src={navImg} alt="" /></a>
            </div>
            <div className="flex ">
                <span className='mr-1'>{availableBalance}</span>
                <span className='mr-1'> Coin</span>
                <img src={dollarImg} alt="" />
            </div>
        </nav>
    );
};

export default Navbar;