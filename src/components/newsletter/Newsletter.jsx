import React from 'react';

const Newsletter = () => {
    return (
        <div className='flex justify-center w-[85%] md:w-[80%] bg-[rgba(255,255,255,0.15)] p-[15px] mt-[-170px]  rounded-[24px] border-[2px] border-white border-solid'>
            <div className='flex flex-col justify-center items-center w-[100%] h-[300px] bg-gradient-to-tr from-[#a0e9ff] via-white to-[#ffe7b2] rounded-[24px]'>
                <h1 className='text-[rgba(19,19,19,1)] font-bold text-xl md:text-2xl mb-5'>Subscribe to our Newsletter</h1>
                <p className='text-[rgba(19,19,19,0.7)] text-xs md:text-base mb-5'>Get the latest updates and news right in your inbox!</p>
                <div className="flex gap-3">
                    <input
                    type="text"
                    placeholder="Enter your email"
                    className="input input-bordered join-item bg-white text-[rgba(19,19,19,0.4)] rounded-[12px_12px_12px_12px]" />
                    <button className="btn btn-primary join-item bg-gradient-to-r from-pink-300 via-orange-200 to-yellow-300 text-[rgba(4,13,17,1)] rounded-[12px_12px_12px_12px]">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;