import React, {useState} from 'react'
import { assets, cities } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const HotelReg = () => {

    const {setShowHotelReg, axios, getToken, setIsOwner} = useAppContext();
    // console.log(appUser?._id);

    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault();
            const {data}= await axios.post(`/api/hotels/`, {name, contact, address, city}, {headers: {Authorization: `Bearer ${await getToken()}`}})
            if(data.success){
                toast.success(data.message);
                setIsOwner(true);   
                setShowHotelReg(false);
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center 
                        bg-black/50 backdrop-blur-sm p-4'>

            <form onSubmit={onSubmitHandler} onClick={(e)=>e.stopPropagation()} className='flex bg-white/90 shadow-2xl rounded-2xl max-w-4xl overflow-hidden'>
                
                {/* Left image */}
                <img 
                    src={assets.regImage} 
                    alt="reg-image" 
                    className='w-1/2 object-cover hidden md:block brightness-110 saturate-110'
                />

                {/* Right content */}
                <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10 bg-gradient-to-b from-indigo-50 to-white'>
                    
                    {/* Close button */}
                    <img 
                        src={assets.closeIcon} 
                        alt="close-icon" 
                        className='absolute top-4 right-4 h-5 w-5 cursor-pointer hover:scale-110 transition-all' onClick={()=>setShowHotelReg(false)}
                    />

                    <p className='text-3xl font-bold text-indigo-600 mt-6'>Register Your Hotel</p>
                    <p className='text-gray-500 text-sm mb-4'>Fill in the details below to get started</p>

                    {/* Hotel Name */}
                    <div className='w-full mt-4'>
                        <label htmlFor="name" className='font-medium text-gray-600'>Hotel Name</label>
                        <input 
                            id='name' onChange={(e)=> setName(e.target.value)} value={name}
                            type="text" 
                            placeholder='Type Here' 
                            className='border border-gray-300 rounded-lg w-full px-3 py-2.5 mt-1 
                                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all' 
                            required 
                        />
                    </div>

                    {/* Phone */}
                    <div className='w-full mt-4'>
                        <label htmlFor="contact" className='font-medium text-gray-600'>Phone</label>
                        <input onChange={(e)=> setContact(e.target.value)} value={contact}
                            id='contact' 
                            type="text" 
                            placeholder='Type Here' 
                            className='border border-gray-300 rounded-lg w-full px-3 py-2.5 mt-1 
                                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all' 
                            required 
                        />
                    </div>

                    {/* Address */}
                    <div className='w-full mt-4'>
                        <label htmlFor="address" className='font-medium text-gray-600'>Address</label>
                        <input onChange={(e)=> setAddress(e.target.value)} value={address}
                            id='address' 
                            type="text" 
                            placeholder='Type Here' 
                            className='border border-gray-300 rounded-lg w-full px-3 py-2.5 mt-1 
                                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all' 
                            required 
                        />
                    </div>

                    {/* City */}
                    <div className='w-full mt-4 max-w-60 mr-auto'>
                        <label htmlFor="city" className='font-medium text-gray-600'>City</label>
                        <select onChange={(e)=> setCity(e.target.value)} value={city}
                            id="city" 
                            className='border border-gray-300 rounded-lg w-full px-3 py-2.5 mt-1 
                                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all' 
                            required
                        >
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    {/* Register Button */}
                    <button 
                        className='bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 
                                   text-white mr-auto px-8 py-2.5 rounded-lg mt-6 shadow-md hover:shadow-lg 
                                   transform hover:scale-105 transition-all'
                    >
                        Register
                    </button> 

                </div>
            </form>

        </div>
    )
}

export default HotelReg
