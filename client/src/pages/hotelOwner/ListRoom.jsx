import React, { useEffect, useState } from 'react'
// import { roomsDummyData } from '../../assets/assets'
import Title from '../../components/Title'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const ListRoom = () => {
    // const [rooms, setRooms] = useState(roomsDummyData)
    const [rooms, setRooms] = useState([])
    const { axios, getToken, user, currency } = useAppContext();

    const fetchRooms= async()=>{
        try {
            const {data}= await axios.get("/api/rooms/owner", {headers: {Authorization: `Bearer ${await getToken()}`}})
            if (data.success){
                setRooms(data.rooms)    
            }else{
                toast.error(data.message)
            }
        } catch (error) { 
            toast.error(error.message)
        }
    }

// toggle Availability of the room 
const toggleAvailability= async(roomId)=>{
    const {data}= await axios.post ("/api/rooms/toggle-availability", {roomId}, {headers: {Authorization: `Bearer ${await getToken()}`}})
    if(data.success){
        toast.success(data.message)
        fetchRooms()
    }else{
        toast.error(data.message)
    }   
}


    useEffect(()=>{
        if(user){
            fetchRooms()
        }
    }, [user])

    
    return (
        <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-md">
            <Title
                align="left"
                font="outfit"
                title="🏨 Room Listings"
                subTitle="✨ View, edit, or manage all listed rooms. Keep info fresh for the best guest experience!"
            />

            <p className="text-gray-500 mt-6 mb-3 font-medium">📋 All Rooms</p>

            <div className="w-full max-w-5xl bg-white border border-pink-200 rounded-lg shadow-lg overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gradient-to-r from-pink-100 to-rose-100">
                        <tr>
                            <th className="py-3 px-4 text-pink-900 font-semibold text-left">🏠 Name</th>
                            <th className="py-3 px-4 text-pink-900 font-semibold text-left max-sm:hidden">🛋 Facility</th>
                            <th className="py-3 px-4 text-pink-900 font-semibold">💲 Price/Night</th>
                            <th className="py-3 px-4 text-pink-900 font-semibold text-center">⚙ Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {rooms.map((item, index) => (
                            <tr
                                key={index}
                                className="hover:bg-pink-50 transition duration-200"
                            >
                                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                                    {item.roomType}
                                </td>
                                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                                    {item.amenities.join(", ")}
                                </td>
                                <td className="py-3 px-4 text-red-700 border-t border-gray-300 text-center font-semibold">
                                    {currency}{item.pricePerNight}
                                </td>
                                <td className="py-3 px-4 border-t border-gray-300 text-center">
                                    <label className="relative inline-flex items-center cursor-pointer group">
                                        <input onChange={()=> toggleAvailability(item._id)}
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={item.isAvailable}
                                            // onChange={() => toggleAvailability(index)}
                                        />
                                        <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-green-500 transition-colors duration-300 shadow-inner">
                                            <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5 shadow-md group-hover:scale-110"></span>
                                        </div>
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListRoom
