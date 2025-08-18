import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
    return (
        <Link to={`/rooms/${room._id}`}
            onClick={() => scrollTo(0, 0)}
            key={room._id}
            className="relative w-full max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md 
                       hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 
                       hover:border hover:border-blue-400 group"
        >
            {/* Hotel Image with Zoom on Hover */}
            <div className="overflow-hidden">
                <img
                    src={room.images[0]}
                    alt="Hotel"
                    className="w-full h-52 sm:h-64 md:h-48 lg:h-52 object-cover 
                               transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Best Seller Badge */}
            {index % 2 === 0 && (
                <p className="absolute top-3 left-3 px-3 py-1 text-xs bg-white text-gray-800 
                              font-medium rounded-full shadow-sm">
                    Best Seller
                </p>
            )}

            {/* Hotel Info */}
            <div className="p-4 pt-5">
                {/* Title & Rating */}
                <div className="flex items-center justify-between flex-wrap gap-y-2">
                    <p className="font-playfair text-lg sm:text-xl font-medium text-gray-800">
                        {room.hotel.name}
                    </p>
                    <div className="flex items-center gap-1 text-orange-500 text-sm">
                        <img src={assets.starIconFilled} alt="star-icon" className="w-4 h-4" /> 4.5
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                    <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
                    <span className="truncate">{room.hotel.address}</span>
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
                    <p>
                        <span className="text-lg sm:text-xl text-gray-800 font-semibold">
                            ${room.pricePerNight}
                        </span>{' '}
                        <span className="text-sm text-gray-500">/ night</span>
                    </p>
                    <button
                        className="px-4 py-2 text-sm font-medium border border-gray-300 rounded 
                                   hover:bg-blue-100 hover:text-blue-700 transition-all duration-200"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default HotelCard;