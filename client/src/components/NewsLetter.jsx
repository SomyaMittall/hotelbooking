import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">
      
      {/* Attractive title with gradient + hover effect */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 transition-all duration-500 hover:scale-105 hover:from-purple-500 hover:via-pink-500 hover:to-yellow-400">
        ✈️ Stay Inspired, Keep Exploring 
      </h2>
      
      {/* Engaging subtitle with emojis */}
      <p className="mt-3 text-center max-w-2xl text-lg text-gray-300 italic">
        📬 Join our vibrant travel family and be the <span className="text-yellow-400 font-semibold">first</span> to discover 
        breathtaking destinations 🏝️, irresistible offers 💎, and endless wanderlust vibes 🌟.  
        Your next adventure is just one click away!
      </p>

      {/* Input & Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <input 
          type="text" 
          className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full" 
          placeholder="Enter your email" 
        />
        <button className="flex items-center justify-center gap-2 group bg-gradient-to-r from-pink-500 to-purple-600 px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all hover:from-purple-600 hover:to-pink-500">
          Subscribe
          <img 
            src={assets.arrowIcon} 
            alt="arrow-icon" 
            className="w-3.5 invert group-hover:translate-x-1 transition-all" 
          />
        </button>
      </div>

      {/* Small note */}
      <p className="text-gray-500 mt-6 text-xs text-center">
        By subscribing, you agree to our <span className="underline cursor-pointer hover:text-white">Privacy Policy</span> and consent to receive travel updates ✨.
      </p>
    </div>
  )
}

export default NewsLetter
