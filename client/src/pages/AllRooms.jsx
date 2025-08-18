// import React, { useState } from 'react'
// import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'
// import StarRating from '../components/StarRating';

// const CheckBox = ({ label, selected = false, onChange = () => { } }) => {
//     return (
//         <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
//             <input type="checkbox" checked={selected} onChange={(e) => onChange(e.
//                 target.checked, label)} />
//             <span className='font-light select-none'>{label}</span>
//         </label>
//     )
// }
// const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
//     return (
//         <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
//             <input type="radio" name='sortOption' checked={selected} onChange={() => onChange(label)} />
//             <span className='font-light select-none'>{label}</span>
//         </label>
//     )
// }

// const AllRooms = () => {
//     const navigate = useNavigate();
//     const [openFilters, setOpenFilters] = useState(false);

//     const roomTypes = [
//         "Single Bed",
//         "Double Bed",
//         "Luxury Room",
//         "Family Suite"
//     ];

//     const priceRanges = [
//         "0 to 500",
//         "500 to 1000",
//         "1000 to 2000",
//         "2000 to 3000",
//     ];

//     const sortOptions = [
//         "Price Low to High",
//         "Price High to Low",
//         "Newest First",
//     ]

//     return (

//         <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
//             <div>
//                 <div className='flex flex-col items-start text-left'>
//                     <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
//                     <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories </p>
//                 </div>

//                 {roomsDummyData.map((room) => (
//                     <div className='flex flex-col md:flex-row items-start py-10  gap-6 border-gray-300 last:pb-30 last:border-0'>
//                         <img onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0) }}
//                             src={room.images[0]} alt="hotel-img" title='View Room Details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer' />
//                         <div>
//                             <p className='text-gray-500'>{room.hotel.city}</p>
//                             <p onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0) }}
//                                 className='text-gray-800 text-3xl font-playfair cursor-pointer  '>{room.hotel.name}</p>
//                             <div className='flex items-center'>
//                                 <StarRating />
//                                 <p className='ml-2'>200+reviews</p>
//                             </div>
//                             <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
//                                 <img src={assets.locationIcon} alt="location-icon" />
//                                 <span>{room.hotel.address}</span>
//                             </div>

//                             {/* room amenities */}
//                             <div className='flex flex-wrap items-center mt-3 mb-6 gap-4' >
//                                 {room.amenities.map((item, index) => (
//                                     <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
//                                         <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
//                                         <p className='text-xs'>{item}</p>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* room price per night */}
//                             <p className='text-xl font-medium text-gray-700'>${room.pricePerNight}/Night</p>
//                         </div>
//                     </div>

//                 ))}
//             </div>

//             {/* filters */}
//             <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16'>
//                 <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-gray-300 ${openFilters && "border-b "} `} >
//                     <p className='text-base font-medium text-gray-800'>FILTERS</p>
//                     <div className='text-xs cursor-pointer'>
//                         <span onClick={() => setOpenFilters(!openFilters)} className='lg:hidden'>
//                             {openFilters ? 'HIDE' : 'SHOW'}</span>
//                         <span className='hidden lg:block'>CLEAR</span>
//                     </div>
//                 </div>
//                 <div className={`${openFilters ? 'h-auto' : "h-0 lg:h-auto"} 
//                 overflow-hidden transition-all duration-700`} >
//                     <div className='px-5 pt-5'>
//                         <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
//                         {roomTypes.map((room,index)=>(
//                             <CheckBox key={index} label={room}/>
//                         ))}
//                     </div>
//                     <div className='px-5 pt-5'>
//                         <p className='font-medium text-gray-800 pb-2'>Price Range</p>
//                         {priceRanges.map((range, index)=>(
//                             <CheckBox key={index} label={`$ ${range}`}/>
//                         ))}
//                     </div>
//                     <div className='px-5 pt-5 pb-7'>
//                         <p className='font-medium text-gray-800 pb-2'>Sort By</p>
//                         {sortOptions.map((option, index)=>(
//                             <RadioButton key={index} label={option}/>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default AllRooms

import React, { useState } from 'react';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';

const CheckBox = ({ label, selected = false, onChange = () => {} }) => (
  <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm hover:text-pink-500 transition-colors">
    <input
      type="checkbox"
      checked={selected}
      onChange={(e) => onChange(e.target.checked, label)}
      className="accent-pink-500"
    />
    <span className="font-light select-none">{label}</span>
  </label>
);

const RadioButton = ({ label, selected = false, onChange = () => {} }) => (
  <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm hover:text-pink-500 transition-colors">
    <input
      type="radio"
      name="sortOption"
      checked={selected}
      onChange={() => onChange(label)}
      className="accent-pink-500"
    />
    <span className="font-light select-none">{label}</span>
  </label>
);

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);

  const roomTypes = ["Single Bed 🛏️", "Double Bed 🛌", "Luxury Room ✨", "Family Suite 👨‍👩‍👧‍👦"];
  const priceRanges = ["0 to 500", "500 to 1000", "1000 to 2000", "2000 to 3000"];
  const sortOptions = ["Price Low to High", "Price High to Low", "Newest First"];

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-pink-50 via-white to-white">
      
      {/* Left side - Rooms list */}
      <div>
        <div className="flex flex-col items-start text-left mb-6">
          <h1 className="font-playfair text-4xl md:text-[40px] text-pink-600 drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
            Hotel Rooms 🏨
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-2 max-w-174">
            ✨ Take advantage of our limited-time offers 💖 and special packages 🎁 to enhance your stay and create unforgettable memories.
          </p>
        </div>

        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start py-8 gap-6 border-b border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-2xl p-4 bg-white"
          >
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel-img"
              title="View Room Details"
              className="max-h-65 md:w-1/2 rounded-2xl shadow-md object-cover cursor-pointer hover:opacity-90 hover:scale-[1.03] transition-all duration-300"
            />
            <div className="flex flex-col justify-between w-full">
              <div>
                <p className="text-gray-500">{room.hotel.city}</p>
                <p
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    scrollTo(0, 0);
                  }}
                  className="text-gray-800 text-3xl font-playfair cursor-pointer hover:text-pink-500 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] transition-all duration-300"
                >
                  {room.hotel.name}
                </p>
                <div className="flex items-center mt-1">
                  <StarRating />
                  <p className="ml-2 text-gray-600"> 200+ reviews</p>
                </div>
                <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span>{room.hotel.address}</span>
                </div>
              </div>

              {/* Amenities with colorful glow */}
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-pink-50 hover:bg-pink-100 transition transform hover:scale-105 hover:shadow-lg"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className={`w-5 h-5 drop-shadow-[0_0_6px_rgba(${index * 40 % 255},${index * 80 % 255},${index * 120 % 255},0.9)] hover:drop-shadow-[0_0_12px_rgba(${index * 40 % 255},${index * 80 % 255},${index * 120 % 255},1)] transition-all duration-300`}
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <p className="text-xl font-semibold text-pink-600">${room.pricePerNight} / Night</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right side - Filters */}
      <div className="bg-white w-80 border border-gray-300 rounded-xl shadow-md text-gray-600 max-lg:mb-8 min-lg:mt-16">
        <div
          className={`flex items-center justify-between px-5 py-2.5 min-lg:border-gray-300 ${
            openFilters && "border-b"
          }`}
        >
          <p className="text-base font-medium text-gray-800">FILTERS 🎯</p>
          <div className="text-xs cursor-pointer text-pink-500 font-semibold">
            <span onClick={() => setOpenFilters(!openFilters)} className="lg:hidden">
              {openFilters ? "HIDE" : "SHOW"}
            </span>
            <span className="hidden lg:block hover:underline">CLEAR</span>
          </div>
        </div>

        <div
          className={`${openFilters ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}
        >
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular Filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox key={index} label={room} />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox key={index} label={`$ ${range}`} />
            ))}
          </div>
          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton key={index} label={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
