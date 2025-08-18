import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {
    const [bookings, setBookings] = useState(userBookingsDummyData);

    return (
        <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-gray-50 to-white'>

            <Title
                title="My Bookings"
                subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks."
                align='center'
            />

            <div className='max-w-6xl mt-10 w-full text-gray-800 space-y-6'>

                {/* Header Row */}
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-semibold text-lg py-3 text-gray-700'>
                    <div>Hotels</div>
                    <div>Date & Timings</div>
                    <div>Payment</div>
                </div>

                {/* Booking Rows */}
                {bookings.map((booking) => (
                    <div
                        key={booking._id}
                        className='group grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full bg-white border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-2xl hover:border-pink-400 transition-all duration-300'
                    >
                        {/* hotel details */}
                        <div className='flex flex-col md:flex-row'>
                            <img
                                src={booking.room.images[0]}
                                alt="hotel-img"
                                className='w-full md:w-44 h-40 object-cover rounded-xl shadow-sm group-hover:scale-[1.03] transition-transform duration-300'
                            />
                            <div className='flex flex-col gap-2 md:ml-5 mt-3 md:mt-0'>
                                <p className='font-playfair text-2xl font-semibold text-gray-900'>
                                    {booking.hotel.name}
                                    <span className='font-inter text-sm text-gray-500'> ({booking.room.roomType})</span>
                                </p>
                                <div className='flex items-center gap-2 text-sm text-gray-600'>
                                    <img src={assets.locationIcon} alt="location-icon" className='w-4 h-4' />
                                    <span>{booking.hotel.address}</span>
                                </div>
                                <div className='flex items-center gap-2 text-sm text-gray-600'>
                                    <img src={assets.guestsIcon} alt="guest-icon" className='w-4 h-4' />
                                    <span>Guests: {booking.guests}</span>
                                </div>
                                <p className='text-base font-medium text-pink-500'>Total: ${booking.totalPrice}</p>
                            </div>
                        </div>

                        {/* date and time */}
                        <div className='flex flex-row md:items-center md:gap-12 mt-4 md:mt-0'>
                            <div>
                                <p className='font-medium text-gray-800'>Check-In:</p>
                                <p className='text-gray-500 text-sm'>
                                    {new Date(booking.checkInDate).toDateString()}
                                </p>
                            </div>
                            <div>
                                <p className='font-medium text-gray-800'>Check-Out:</p>
                                <p className='text-gray-500 text-sm'>
                                    {new Date(booking.checkOutDate).toDateString()}
                                </p>
                            </div>
                        </div>

                        {/* payment status */}
                        <div className='flex flex-col items-start justify-center gap-3 mt-4 md:mt-0'>
                            <div className='flex items-center gap-2'>
                                <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
                                <p className={`text-sm font-medium ${booking.isPaid ? "text-green-600" : "text-red-500"}`}>
                                    {booking.isPaid ? "Paid" : "Unpaid"}
                                </p>
                            </div>

                            {!booking.isPaid && (
                                <button className='px-4 py-1.5 text-xs rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md hover:shadow-lg hover:scale-[1.05] transition-all duration-300'>
                                    Pay Now
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyBookings
