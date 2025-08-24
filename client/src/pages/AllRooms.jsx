import React, { useState } from 'react';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import { useNavigate, useSearchParams } from 'react-router-dom';
import StarRating from '../components/StarRating';
import { useAppContext } from '../context/AppContext';
import { useMemo } from 'react';

const CheckBox = ({ label, selected = false, onChange = () => { } }) => (
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


const RadioButton = ({ label, selected = false, onChange = () => { } }) => (
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

  const [searchParams, setSearchParams] = useSearchParams();
  const { rooms, navigate, currency } = useAppContext();
  const [openFilters, setOpenFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    roomType: [],
    priceRange: []
  });
  const [selectedSort, setSelectedSort] = useState('');


  const roomTypes = ["Single Bed 🛏️", "Double Bed 🛌", "Luxury Room ✨", "Family Suite 👨‍👩‍👧‍👦"];
  const priceRanges = ["0 to 500", "500 to 1000", "1000 to 2000", "2000 to 3000"];
  const sortOptions = ["Price Low to High", "Price High to Low", "Newest First"];

  // handle changes for filters and sorting 
  const handleFilterChange = (checked, value, type) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
        updatedFilters[type].push(value);
      } else {
        updatedFilters[type] = updatedFilters[type].filter(item => item !== value);
      }
      return updatedFilters

    })
  }
  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
  }
  //  functions to check if a room matches the selected room types 
  const matchesRoomType = (room) => {
    return selectedFilters.roomType.length === 0 || selectedFilters.roomType.includes(room.roomType);
  }
  //  functions to check if a room matches the selected price ranges
  const matchesPriceRange = (room) => {
    return selectedFilters.priceRange.length === 0 || selectedFilters.priceRange.some(range => {
      const [min, max] = range.split(' to ').map(Number);
      return room.pricePerNight >= min && room.pricePerNight <= max;
    })
  }

  // function to sort rooms based on the selected sort option 
  const sortRooms=(a,b)=>{
    if(selectedSort === "Price Low to High"){
      return a.pricePerNight - b.pricePerNight;
    }
    if(selectedSort === "Price High to Low"){
      return b.pricePerNight - a.pricePerNight;
    }
    if(selectedSort === "Newest First"){
      return new Date(b.createdAt)-new Date(a.createdAt);
    }
    return 0;
  }

  // filter destination 
  const filterDestination = (room) => {
    const destination = searchParams.get('destination');
    if(!destination) return true;
    return room.hotel.city.toLowerCase().includes(destination.toLowerCase()); 
    } 

    // filter and sort rooms based on the selected filters and sort option 
    const filteredRooms= useMemo(()=>{
      return rooms.filter(room=> matchesRoomType(room) && matchesPriceRange(room) && filterDestination(room)).sort(sortRooms);
    },[rooms, selectedFilters, selectedSort, searchParams]);

    // clear all filters
    const clearFilters=()=>{
      setSelectedFilters({
        roomType: [],
        priceRange: []  
      });
      setSelectedSort('');
      setSearchParams({});
    }

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

        {/* {roomsDummyData.map((room) => ( */}
        {filteredRooms.map((room) => (
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
          className={`flex items-center justify-between px-5 py-2.5 min-lg:border-gray-300 ${openFilters && "border-b"
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
              <CheckBox key={index} label={room} selected={selectedFilters.roomType.includes(room)} onChange={(checked) => handleFilterChange(checked, room, "roomType")} />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox key={index} label={`$${currency} ${range}`} selected={selectedFilters.priceRange.includes(range)} onChange={(checked) => handleFilterChange(checked, range, "priceRange")} />
            ))}
          </div>
          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton key={index} label={option} selected={selectedSort === option} onChange={() => handleSortChange(option)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
