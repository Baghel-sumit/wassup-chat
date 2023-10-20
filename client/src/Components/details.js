import React from 'react'

const Details = ({ title, imgSrc, createdAt, description }) => {
  return (
    <div class="flex flex-col">
      <div class="font-semibold text-xl py-4 text-white">{title}</div>
      <img
        src={imgSrc || "https://source.unsplash.com/L2cxSuKWbpo/600x600"}
        class="object-cover rounded-xl h-64"
        alt=""
      />
      <div class="font-semibold py-4 text-white">{createdAt}</div>
      <div class="font-light text-white">{description}</div>
    </div>
  )
}

export default Details;
