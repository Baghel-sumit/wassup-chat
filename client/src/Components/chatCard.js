import React from 'react'

const ChatCard = ({ imgSrc, name, description, onClick, isActive }) => {
  return (
    <div className={`flex flex-row py-4 px-2 justify-center items-center border-b-2 cursor-pointer border-${isActive ? 'slate-700' : 'gray-900'}`} onClick={onClick}>
      <div className="w-1/4">
        <img
          src={imgSrc || "https://source.unsplash.com/_7LbC5J-jw4/600x600"}
          className="object-cover h-12 w-12 rounded-full"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="text-lg font-semibold text-white">{name}</div>
        <span className="text-gray-400">{description}</span>
      </div>
    </div>
  )
}

export default ChatCard
