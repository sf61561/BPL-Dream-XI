import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa";
const Player = ({ player, handleSelectPlayer }) => {
    return (
        <div className="card w-full shadow-sm bg-white text-black">
            <figure>
                <img className='h-[240px] w-[376px] rounded-xl' src={player.image} alt={player.name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><CgProfile />{player.name}</h2>
                <div className='flex justify-between'><span className='flex items-center gap-2'><FaFlag />{player.country}</span><span className='text-[rgba(19,19,19,0.7)]'>{player.role}</span></div>
                <p className='flex justify-between'><span className='font-semibold'>Rating:</span><span className='text-[rgba(19,19,19,0.7)]'>{player.rating}</span></p>
                <p className='flex justify-between'><span className='font-semibold'>{player.batting_style}</span><span className='text-[rgba(19,19,19,0.7)]'>{player.bowling_style}</span></p>
                <p className='flex justify-between items-center'><span className='font-semibold'>Price:${player.price}</span><button className='btn bg-white text-black border-0' onClick={() => handleSelectPlayer(player)}>Choose Player</button></p>
            </div>
        </div>
    );
};

export default Player;