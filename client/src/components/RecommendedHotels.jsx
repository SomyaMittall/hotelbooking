import React, { useEffect, useState } from 'react'
// import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const RecommendedHotels = () => {
    const { rooms, searchedCities } = useAppContext();

    const [recommended, setRecommended] = useState([])

    const filterHotels = () => {
        const filteredHotels = rooms.slice().filter(room => searchedCities.includes(room.hotel.city));
        setRecommended(filteredHotels)
    }

    useEffect(() => {
        filterHotels()
    }, [rooms, searchedCities])

    return recommended.length > 0 && (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gradient-to-br from-blue-50 via-white to-pink-50 py-20'>

            <Title
                title='Recommended Hotels'
                subTitle={
                    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-medium">
                        Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences
                    </span>
                }
            />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20'>
                {recommended.slice(0, 4).map((room, index) => (
                    <HotelCard key={room._id} room={room} index={index} />
                ))}
            </div>

            <button
                onClick={() => {
                    navigate("/rooms/${id}");
                    scrollTo(0, 0);
                }}
                className='my-16 px-6 py-3 mt-8 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white
                hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg'
            >
                View All Destinations
            </button>
        </div>
    )
}

export default RecommendedHotels;
