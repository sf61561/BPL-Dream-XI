import React from 'react';
import banner from '../../assets/images/bg-shadow.png'
import banner1 from '../../assets/images/banner-main.png'

const Claim_card = ({ claim, visited }) => {
    console.log(visited);
    return (
        <div className='relative flex justify-center w-full mt-5'>
            <img src={banner} alt='banner' className=' bg-black w-[280px] md:w-[620px] lg:w-[870px] xl:w-[1200px] 2xl:w-[1450px] h-[290px] md:h-[390px] lg:h-[490px] rounded-2xl'/>
            <div className='absolute flex flex-col items-center justify-center w-full h-full text-center'>
                <img className='w-[100px] md:w-[180px] lg:w-[220px] xl:w-[250px] h-[80px] md:h-[144px] lg:h-[160px] xl:h-[176px]' src={banner1} alt='banner1'/>
                <p className='text-white text-xs md:text-2xl lg:text-3xl xl:text-4xl mt-8 font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</p>
                <p className='text-[rgba(255,255,255,0.7)] mt-5 text-[8px] md:text-lg lg:text-xl xl:text-2xl'>Beyond Boundaries Beyond Limits</p>
                <button className={`btn btn-warning ${visited ? 'bg-[rgb(231,254,41)]' : 'bg-gradient-to-r from-pink-300 via-orange-200 to-yellow-300'} text-[rgb(19,19,19)] shadow-[inset_4px_4px_20px_0px_rgba(19,19,19,0.3)] h-8 md:h-12 w-30 md:w-45 text-[8px] md:text-base rounded-xl mt-5`} onClick={() => claim()}>Claim Free Credits</button>
            </div>
        </div>
    );
};

export default Claim_card;