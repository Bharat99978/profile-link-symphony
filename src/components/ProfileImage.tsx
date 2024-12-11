import { useState } from "react"

export const ProfileImage = () => {
  const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1649972904349-6e44c42644a7")

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Animated green circle */}
      <div className="absolute w-52 h-52 rounded-full animate-[spin_3s_linear_infinite]">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-green-300 to-green-500 blur-sm opacity-50"></div>
      </div>
      
      {/* Static green ring */}
      <div className="absolute w-52 h-52 rounded-full bg-gradient-to-r from-green-400 to-green-600 animate-pulse"></div>
      
      {/* Profile image container */}
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}