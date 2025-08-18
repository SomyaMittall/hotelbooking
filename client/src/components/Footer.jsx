import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-gradient-to-br from-pink-50 to-pink-100 text-gray-600 pt-8 px-6 md:px-16 lg:px-24 xl:px-32 shadow-inner'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                
                {/* Brand */}
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='invert mb-4 h-10 md:h-12' />
                    <p className='text-sm'>
                        Discover the world's most extraordinary places to stay — from boutique hotels to luxury villas 🌸✨
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        <a href="#" className='hover:scale-110 transition-transform'>
                            <img src={assets.instagramIcon} alt="instagram-icon" className="w-6 h-6 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_5px_rgba(255,0,0,0.7)]"  />
                        </a>
                        <a href="#" className='hover:scale-110 transition-transform'>
                            <img src={assets.facebookIcon} alt="facebook-icon" className="w-6 h-6 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_5px_rgba(59,89,152,0.7)]" />
                        </a>
                        <a href="#" className='hover:scale-110 transition-transform'>
                            <img src={assets.twitterIcon} alt="twitter-icon" className="w-6 h-6 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_5px_rgba(29,155,240,0.7)]" 
/> 
                        </a>
                        <a href="#" className='hover:scale-110 transition-transform'>
                            <img src={assets.linkendinIcon} alt="linkendin-icon" className='w-6 h-6 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_5px_rgba(10,102,194,0.7)]' />
                        </a>
                    </div>
                </div>

                {/* Company Links */}
                <div>
                    <p className='font-playfair text-lg text-pink-700 font-semibold'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        {["About", "Careers", "Press", "Blog", "Partners"].map((item) => (
                            <li key={item}>
                                <a href="#" className='hover:text-pink-500 transition-colors'>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <p className='font-playfair text-lg text-pink-700 font-semibold'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        {["Help Center", "Safety Information", "Cancellation Options", "Contact Us", "Accessibility"].map((item) => (
                            <li key={item}>
                                <a href="#" className='hover:text-pink-500 transition-colors'>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div className='max-w-80'>
                    <p className='font-playfair text-lg text-pink-700 font-semibold'>STAY UPDATED 💌</p>
                    <p className='mt-3 text-sm'>
                        Join our newsletter for travel tips, dreamy stays & exclusive offers 🚀
                    </p>
                    <div className='flex items-center mt-4'>
                        <input 
                            type="text" 
                            className='bg-white rounded-l-lg border border-gray-300 h-10 px-4 outline-none w-full focus:border-pink-400 transition' 
                            placeholder='Your email' 
                        />
                        <button className='flex items-center justify-center bg-gradient-to-r from-pink-500 to-pink-600 h-10 w-12 rounded-r-lg hover:from-pink-600 hover:to-pink-700 transition'>
                            <img src={assets.arrowIcon} alt="arrow-icon" className='w-4 invert' />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <hr className='border-pink-200 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-sm'>
                <p>© {new Date().getFullYear()} QuicStay. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    {["Privacy", "Terms", "Sitemap"].map((item) => (
                        <li key={item}>
                            <a href="#" className='hover:text-pink-500 transition-colors'>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Footer
