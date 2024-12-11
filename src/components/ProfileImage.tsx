import { useState } from "react"

export const ProfileImage = () => {
  const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1649972904349-6e44c42644a7")

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Outer rotating gradient ring */}
      <div className="absolute w-56 h-56 rounded-full animate-[spin_8s_linear_infinite]">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-green-300 via-green-500 to-green-300 blur-md opacity-40"></div>
      </div>

      {/* Middle pulsing ring */}
      <div className="absolute w-54 h-54 rounded-full animate-pulse">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-green-400 to-green-600 blur-sm opacity-60"></div>
      </div>

      {/* Inner spinning ring */}
      <div className="absolute w-52 h-52 rounded-full animate-[spin_4s_linear_infinite_reverse]">
        <div className="w-full h-full rounded-full bg-gradient-to-bl from-green-200 via-green-400 to-green-200 blur-sm opacity-50"></div>
      </div>
      
      {/* Glowing effect */}
      <div className="absolute w-50 h-50 rounded-full bg-green-400/20 filter blur-xl animate-pulse"></div>
      
      {/* Profile image container */}
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl backdrop-blur-sm">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}