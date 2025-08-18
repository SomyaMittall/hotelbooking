import React from 'react';
import Title from './Title';
import { testimonials } from '../assets/assets';
import StarRating from './StarRating';

const Testimonial = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 py-20 px-4">
      <Title
        title="What Our Guests Say"
        subTitle={
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent font-medium">
            Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world.
          </span>
        }
      />

      <div className="flex flex-wrap items-center justify-center gap-6 mt-20 pb-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white bg-opacity-80 backdrop-blur-sm border border-transparent hover:border-purple-300 transition-all duration-300 p-6 rounded-xl shadow-md hover:shadow-2xl max-w-xs sm:max-w-sm transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full border-2 border-pink-300 shadow"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-xl font-semibold text-purple-800 hover:text-pink-700 transition-colors duration-300">
                  {testimonial.name}
                </p>
                <p className="text-sm text-pink-500">{testimonial.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-4 text-yellow-400">
              <StarRating />
            </div>

            <p className="text-gray-700 text-sm mt-4 italic leading-relaxed">
              “{testimonial.review}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
