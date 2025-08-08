import React from 'react';
import logo from '../../assets/images/logo.png';
const Navbar = () => {

    return (
        <div className='flex items-center justify-between h-[60px] md:h-[70px] lg:h-[80px] px-5 md:px-13 lg:px-20'>
            <img src={logo} alt='Logo' className='w-[50px] h-[50px]'/>
            <div className='flex gap-3 md:gap-7 lg:gap-10'>
                <a href='#' className='text-[rgba(19,19,19,0.7)] font-normal'>Home</a>
                <a href='#' className='text-[rgba(19,19,19,0.7)] font-normal'>About</a>
                <a href='#' className='text-[rgba(19,19,19,0.7)] font-normal'>Contact</a>
                <p className='font-semibold text-[rgb(19,19,19)] flex items-center gap-1 lg:gap-2'>
                    <span id="claimed_coin" className='text-black'>0</span> Coin
                    <img width="20" height="20" src="https://img.icons8.com/color-glass/50/cheap-2.png" alt="cheap-2"/>
                </p>
            </div>
        </div>
    );
};

export default Navbar;