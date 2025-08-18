import React from 'react';
import Title from './Title';
import { assets, exclusiveOffers } from '../assets/assets';

const ExclusiveOffers = () => {
    return (
        <div className='flex flex-col items-center px-6 md:px-24 lg:px-24 xl:px-32 pt-20 pb-30 bg-gradient-to-b from-[#f0f8ff] via-white to-[#f9f9f9]'>
            {/* Title Section */}
            <div className='flex flex-col md:flex-row items-start text-left justify-between w-full'>
                <Title
                    align="left"
                    title="Exclusive Offers"
                    subTitle={
                        <>
                            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                            <br />
                            <span className="text-green-600 font-semibold mt-2 block">
                                🌟 Unparalleled luxury meets unbeatable value.
                            </span>
                            <span className="text-blue-400 font-medium block">
                                ✨ Book now and experience premium comfort at exceptional prices.
                            </span>
                            <span className="text-pink-400 block">
                                💼 Perfect for business travelers, dreamers, and adventurers alike.
                            </span>
                        </>
                    }
                />

                <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12 text-pink-600 hover:text-pink-800 transition-colors duration-300'>
                    View All Offers
                    <img
                        src={assets.arrowIcon}
                        alt="arrow-icon"
                        className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                </button>
            </div>

            {/* Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full'>

                {exclusiveOffers.map((item) => (
                    <div
                        key={item._id}
                        className="group relative flex flex-col items-start justify-between gap-1 pt-14 md:pt-16 px-5 rounded-2xl text-white bg-no-repeat bg-cover bg-center overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.03]"
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        {/* Color Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/10 group-hover:bg-black/30 transition-all duration-500 rounded-2xl"></div>

                        {/* Glowing Border */}
                        <div className="absolute inset-0 border border-transparent group-hover:border-pink-400 group-hover:shadow-[0_0_25px_4px_rgba(255,192,203,0.4)] rounded-2xl transition-all duration-500"></div>

                        {/* Discount Badge */}
                        <p className="z-20 px-3 py-1 absolute top-4 left-4 text-xs bg-gradient-to-r from-yellow-300 to-yellow-500 text-gray-900 font-semibold rounded-full shadow-md">
                            🔥 {item.priceOff}% OFF
                        </p>

                        {/* Text Content */}
                        <div className="relative z-20 transition-all duration-500 group-hover:translate-y-[-2px]">
                            <p className="text-2xl font-semibold font-playfair drop-shadow-md mb-1">
                                {item.title}
                            </p>
                            <p className="text-sm text-white/90 drop-shadow-sm">{item.description}</p>
                            <p className="text-xs text-white/70 mt-3 italic">{`⏳ Expires ${item.expiryDate}`}</p>
                        </div>

                        {/* CTA Button */}
                        <button className="relative z-20 flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5 text-yellow-300 hover:text-yellow-400 transition-colors duration-300">
                            View Offer
                            <img
                                className="invert group-hover:translate-x-1 transition-transform duration-300"
                                src={assets.arrowIcon}
                                alt="arrow-icon"
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExclusiveOffers;
