import React from 'react';
import './Footer.css';
import Newsletter from '../newsletter/Newsletter.jsx';
const Footer = () => {
    return (
        <div className=' flex flex-col items-center bg-[rgba(6,9,26,1)]'>
            <Newsletter />
            <footer className="justify-around footer md:footer-horizontal text-base-content p-10">
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <p className='w-60'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <ul className='list-disc pl-6'>
                        <li className='pb-2'><a className="link link-hover">Home</a></li>
                        <li className='pb-2'><a className="link link-hover">Services</a></li>
                        <li className='pb-2'><a className="link link-hover">About</a></li>
                        <li className='pb-2'><a className="link link-hover">Contact</a></li>
                    </ul>
                </nav>
                <form>
                    <h6 className="footer-title">Subscribe</h6>
                    <fieldset className="w-80">
                    <p className='w-50 pb-3'>Subscribe to our newsletter for the latest updates.</p>
                    <div className="join">
                        <input
                        type="text"
                        placeholder="Enter your email"
                        className="input input-bordered join-item bg-white text-[rgba(19,19,19,0.4)] rounded-[12px_0px_0px_12px]" />
                        <button className="btn btn-primary join-item bg-gradient-to-r from-pink-300 via-orange-200 to-yellow-300 text-[rgba(4,13,17,1)] rounded-[0px_12px_12px_0px]">Subscribe</button>
                    </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;