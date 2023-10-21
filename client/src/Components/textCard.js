import React from 'react'

const TextCard = ({ text, imgSrc, isLeft }) => {
  return (
    <div className={`flex ${isLeft ? 'justify-start w-fit' : 'justify-end'} mb-4`}>
      <div
        className={`mr-2 py-3 px-4 ${!isLeft ? 'rounded-bl-3xl rounded-tl-3xl rounded-tr-xl bg-blue-400' : 'rounded-br-3xl rounded-tr-3xl rounded-tl-xl bg-slate-600'} text-white`}
      >
        {text}
      </div>
      <img
        src={imgSrc || "https://source.unsplash.com/vpOeXr5wmR4/600x600"}
        className="object-cover h-8 w-8 rounded-full my-auto float-left"
        alt=""
      />
    </div>
  )
}

export default TextCard
