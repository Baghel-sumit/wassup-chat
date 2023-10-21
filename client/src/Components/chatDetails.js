import React from 'react'

const ChatDetails = ({ title, imgSrc, createdAt, description }) => {
  return (
    <div className="flex flex-col">
      <div className="font-semibold text-xl py-4 text-white">{title}</div>
      <img
        src={imgSrc || "https://source.unsplash.com/L2cxSuKWbpo/600x600"}
        className="object-cover rounded-xl h-64"
        alt=""
      />
      <div className="font-semibold py-4 text-white">{createdAt}</div>
      <div className="font-light text-white">{description}</div>
    </div>
  )
}

export default ChatDetails;
