import React, { useState,useEffect } from 'react';
import Player from '../Player/PLayer.jsx';
import Selected from '../Selected/Selected.jsx';

const Players = ({handleVisited, visited, handleSelectPlayer, handleRemovePlayer,selected,addMorePlayer}) => {
    const [players, setplayers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/players.json');
            const data = await response.json();
            setplayers(data);
        };
        fetchData();
    }, []);


    return (
        <div className='mt-15 mb-50'>
            <div className='flex justify-between items-center px-5 sm:px-15 md:px-20 lg:px-25 mb-15'>
                {visited ? <h1 className='text-[rgb(19,19,19)] text-xs sm:text-sm md:text-xl lg:text-3xl font-bold'>Available Players</h1> : <h1 className='text-[rgb(19,19,19)] text-xs sm:text-sm md:text-xl lg:text-3xl  font-bold'>Selected Players({selected.length}/6)</h1>}
                <div className='flex gap-2'>
                    <button className={`btn btn-primary w-20 sm:w-20 md:w-25 lg:w-30 text-xs md:text-base ${visited ? ' bg-[rgb(231,254,41)] text-[rgb(19,19,19)]' : 'bg-white text-[rgba(19,19,19,0.6)]'} border-0`} onClick={handleVisited}>Available</button>
                    <button className={`btn btn-primary w-20 sm:w-20 md:w-25 lg:w-30 text-xs md:text-base ${!visited ? 'bg-[rgb(231,254,41)] text-[rgb(19,19,19)]' : 'bg-white text-[rgba(19,19,19,0.6)]'} border-0`} onClick={handleVisited}>Selected({selected.length})</button>
                </div>
            </div>
            <div className={`${visited ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-15 gap-5' : 'grid grid-cols-1 px-5 md:px-30 gap-5'}`}>
            {
                visited ? players.map(player => <Player key={player.id} player={player} handleSelectPlayer={handleSelectPlayer} />) : <div>
                        {
                            selected.map(player => <Selected key={player.id} player={player} handleRemovePlayer={handleRemovePlayer} />)
                        }
                        <button className='btn btn-warning bg-[rgb(231,254,41)] text-[rgb(19,19,19)] shadow-[inset_4px_4px_20px_0px_rgba(19,19,19,0.3)] h-8 md:h-12 w-30 md:w-45 text-[8px] md:text-base rounded-xl mt-5' onClick={() => addMorePlayer()}>Add More Players</button>
                    </div>
            }
            </div>
        </div>
    );
};

export default Players;