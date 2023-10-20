import React from 'react'
import TextCard from '../../Components/textCard'

const ChatsContainer = ({ texts=[] }) => {
  return (
    <div class="w-full px-5 flex flex-col justify-between">
      <div class="flex flex-col mt-5 max-h-full overflow-x-hidden overflow-y-auto">
        {texts.map((item, index)=> (
          <TextCard
            key={item.title + index}
            isLeft={item.isLeft}
            text={item.text}
          />
        ))}
      </div>
      <div class="py-5">
        <input
          class="w-full bg-gray-300 py-5 px-3 rounded-xl"
          type="text"
          placeholder="type your message here..."
        />
      </div>
    </div>
  )
}

export default ChatsContainer
