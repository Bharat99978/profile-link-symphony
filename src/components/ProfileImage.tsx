import { useState } from "react"

export const ProfileImage = () => {
  const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1649972904349-6e44c42644a7")

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}