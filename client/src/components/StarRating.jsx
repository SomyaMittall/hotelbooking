import React from 'react';
import { assets } from '../assets/assets';

const StarRating = ({ rating = 4 }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={rating > index ? assets.starIconFilled : assets.starIconOutlined}
          alt="star-icon"
          className="w-5 h-5 transition-transform duration-200 ease-in-out hover:scale-110 
                     filter hue-rotate-10 saturate-150"
        />
      ))}
    </div>
  );
};

export default StarRating;
