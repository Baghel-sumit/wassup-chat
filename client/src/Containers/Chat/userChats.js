import React from 'react'
import ChatCard from '../../Components/chatCard';


const UserChats = ({ chats, selectedChat, onClickChat }) => {
  const hostEmail = localStorage.getItem('email');
  const getChatName = (chat) => {
    const senderEmail = chat.composers.find((item)=> item.toLowerCase() !== hostEmail.toLowerCase());
    return senderEmail;
  }

  const getLastChatText = (chat) => {
    return chat.texts[chat.texts.length - 1]?.text || '';
  }

  return (
    <>
      <div className="border-b-2 border-gray-900 py-4 px-2">
        <input
          type="text"
          placeholder="search chatting"
          className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
        />
      </div>
      {chats.map((item, index)=> (
        <ChatCard
          key={index}
          description={getLastChatText(item)}
          name={getChatName(item)}
          isActive={index === selectedChat.activeIndex}
          onClick={()=> onClickChat(item, index)}
        />
      ))}
    </>
  )
}

export default UserChats
