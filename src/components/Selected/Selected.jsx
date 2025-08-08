import React from 'react';
import { MdDelete } from "react-icons/md";
const Selected = ({ player,handleRemovePlayer }) => {
    return (
        <div className='text-black flex justify-between items-center w-full'>
            <div className=' flex items-center gap-2 md:gap-5'> 
                <img className='h-[50px] md:h-[70px] w-[50px] md:w-[70px] rounded-xl' src={player.image} alt={player.name} />
                <div className='flex flex-col'>
                    <h2 className="text-base md:card-title font-bold">{player.name}</h2>
                    <p className='text-xs md:text-base'>{player.batting_style}</p>
                </div>
            </div>
            <button className='btn bg-white border-0' onClick={() => handleRemovePlayer(player)}><MdDelete className='text-red-500 cursor-pointer' /></button>
        </div>
    );
};

export default Selected;