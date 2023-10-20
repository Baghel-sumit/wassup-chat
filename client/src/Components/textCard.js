import React from 'react'

const TextCard = ({ text, imgSrc, isLeft }) => {
  return (
    <div class={`flex justify-${isLeft ? 'start' : 'end'} mb-4`}>
      <div
        class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
      >
        {text}
      </div>
      <img
        src={imgSrc || "https://source.unsplash.com/vpOeXr5wmR4/600x600"}
        class="object-cover h-8 w-8 rounded-full"
        alt=""
      />
    </div>
  )
}

export default TextCard
