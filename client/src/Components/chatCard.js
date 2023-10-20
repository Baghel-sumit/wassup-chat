import React from 'react'

const ChatCard = ({ imgSrc, userName, lastText }) => {
  return (
    <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2 border-gray-900">
      <div class="w-1/4">
        <img
          src={imgSrc || "https://source.unsplash.com/_7LbC5J-jw4/600x600"}
          class="object-cover h-12 w-12 rounded-full"
          alt=""
        />
      </div>
      <div class="w-full">
        <div class="text-lg font-semibold text-white">{userName}</div>
        <span class="text-gray-400">{lastText}</span>
      </div>
    </div>
  )
}

export default ChatCard
