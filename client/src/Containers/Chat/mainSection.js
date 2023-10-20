import React from 'react'
import ChatsContainer from './chatsContainer'

const MainSection = ({ userChats }) => {
  return (
    <div class="h-[87%] flex flex-row justify-between bg-gray-700">
      <div class="flex flex-col w-2/5 border-r-2 border-gray-900 max-h-full overflow-x-hidden overflow-y-auto">
        <div class="border-b-2 border-gray-900 py-4 px-2">
          <input
            type="text"
            placeholder="search chatting"
            class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
          />
        </div>
        {/* user chat cards */}

      </div>
      <ChatsContainer
        texts={[]}
      />
      <div class="w-2/5 border-l-2 border-gray-900 px-5">
        {/* <Details
          createdAt=''
          description=''
          title=''
        /> */}
      </div>
    </div>
  )
}

export default MainSection
