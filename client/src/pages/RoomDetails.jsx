import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import { assets, facilityIcons, roomCommonData, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StarRating";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const RoomDetails = () => {
  const { id } = useParams();
  const { rooms, getToken, axios, navigate } = useAppContext();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [isAvailable, setIsAvailable] = useState(false);

  // check the availability of room 
  const checkAvailability = async (e) => {
    try {
      if (checkInDate >= checkOutDate) {
        toast.error("Check-Out date must be after Check-In date")
        return;
      }
      const { data } = await axios.post("/api/bookings/check-availability", {
        room: id,
        checkInDate,
        checkOutDate
      });
      if (data.success) {
        if (data.isAvailable) {
          setIsAvailable(true);
          toast.success("Room is available for booking");
        } else {
          setIsAvailable(false);
          toast.error(data.message);
        }
      } else {
        toast.error(data.message)
      } 
    }
    catch (error) {
      toast.error(error.message);
    }
  }

  const onSubmitHandler=async(e)=>{
    try {
      e.preventDefault();
      if(!isAvailable){
        return checkAvailability();
      }else{
        const {data}=await axios.post("/api/bookings/book", {room:id,checkInDate,checkOutDate,guests, paymentMethod: "Pay At Hotel"}, {headers:{Authorization: `Bearer ${ await getToken()}`}});
        if(data.success){
          toast.success(data.message);  
          navigate("/my-bookings")
          scroll(0,0)
        }else{
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // useEffect(() => {
  //   const room = roomsDummyData.find((room) => room._id === id);
  //   room && setRoom(room)
  //   room && setMainImage(room.images[0]);
  // }, []);

  useEffect(() => {
    const room = roomss.find((room) => room._id === id);
    room && setRoom(room)
    room && setMainImage(room.images[0]);
  }, [rooms]);

  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-pink-50 via-white to-pink-100">

        {/* Room Title */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair text-pink-700">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm text-gray-500">
              ({room.roomType})
            </span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-pink-500 rounded-full shadow-md ml-2">
            🔥 20% OFF
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2 text-gray-600">200+ reviews</p>
        </div>

        {/* Address */}
        <div className="flex items-center gap-1 mt-2 text-gray-500">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Images */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="room"
              className="w-full rounded-xl shadow-lg object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  key={index}
                  src={image}
                  alt="room-thumbnail"
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${mainImage === image ? "ring-4 ring-black-400" : ""
                    }`}
                />
              ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair text-gray-800">
              ✨ Experience Luxury Like Never Before
            </h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-pink-50 text-pink-700 font-medium shadow-sm hover:shadow-pink-300 transition-all"
                >
                  <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-2xl font-medium text-pink-700">
            ${room.pricePerNight} / Night
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={onSubmitHandler} className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white/80 backdrop-blur-md shadow-lg p-6 rounded-xl mx-auto mt-16 max-w-6xl border border-pink-100">
          <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-600">
            <div className="flex flex-col">
              <label htmlFor="checkInDate" className="font-medium">
                Check-In
              </label>
              <input onChange={(e) => setCheckInDate(e.target.value)} min={new Date().toISOString().split("T")[0]}
                type="date"
                id="checkInDate"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 mt-1.5 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-300 transition-all"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="checkOutDate" className="font-medium">
                Check-Out
              </label>
              <input onChange={(e) => setCheckOutDate(e.target.value)} min={checkInDate} disabled={!checkInDate}
                type="date"
                id="checkOutDate"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 mt-1.5 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-300 transition-all"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="guests" className="font-medium">
                Guests
              </label>
              <input onChange={(e) => setGuests(e.target.value)} value={guests}
                type="number"
                id="guests"
                placeholder="1"
                className="max-w-20 rounded-lg border border-gray-300 px-3 py-2 mt-1.5 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-300 transition-all"
                required
              />
            </div>
          </div>

          {/* Animated Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold rounded-lg max-md:w-full max-md:mt-6 md:px-8 py-3 md:py-4 text-base cursor-pointer shadow-lg hover:shadow-pink-400 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            {isAvailable ? "Book Now" : "💖 Check Availability"}
          </button>
        </form>

        {/* Common Specs */}
        <div className="mt-16 space-y-4">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex items-start gap-2">
              <img src={spec.icon} alt={`${spec.title}-icon`} className="w-6.5" />
              <div>
                <p className="text-base font-semibold text-gray-700">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-3xl border-y border-gray-300 my-12 py-10 text-gray-500 leading-relaxed">
          <p>
            Guests will be allocated on the ground floor according to availability.
            You get a comfortable two-bedroom apartment with a true city feeling.
            The price quoted is for two guests; please update the guest slot to get
            the exact price for groups. 🌸
          </p>
        </div>

        {/* Host Section */}
        <div className="flex flex-col items-start gap-4 bg-white/70 p-6 rounded-xl shadow-lg border border-pink-100">
          <div className="flex gap-4 items-center">
            <img
              src={room.hotel.owner.image}
              alt="Host"
              className="h-14 w-14 md:h-18 md:w-18 rounded-full border-2 border-pink-300 shadow-md"
            />
            <div>
              <p className="text-lg md:text-xl font-semibold text-gray-800">
                Hosted by {room.hotel.name}
              </p>
              <div className="flex items-center mt-1">
                <StarRating />
                <p className="ml-2 text-gray-600">200+ reviews</p>
              </div>
            </div>
          </div>
          <button className="px-6 py-2.5 mt-4 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 shadow-lg hover:shadow-pink-400 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
            📩 Contact Now
          </button>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
