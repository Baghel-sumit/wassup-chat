import React, { useEffect, useState } from 'react';
import ChatsContainer from './chatsContainer';
import ChatDetails from '../../Components/chatDetails';
import { socket } from '../../Services/socket';
import UserChats from './userChats';
import ShowUsers from './showUsers';
import { getListChats } from '../../Services/Users';

const hostEmail = localStorage.email;

const MainSection = () => {
  const [userChatsList, setUserChatsList] = useState([]);
  const [selectedChat, setSelectedChat] = useState({ details: {}, activeIndex: '', texts: [] });
  const [isShowUsersActive, setIsShowUsersActive] = useState(false);
  const [isSendLoading, setIsSendLoading] = useState(false);

  const onClickChat = (chat, index) => {
    const senderEmail = chat.composers.find((item)=> item.toLowerCase() !== hostEmail.toLowerCase());
    socket.emit('join', { senderEmail, hostEmail });
    setSelectedChat({ details: {}, sender: senderEmail, activeIndex: index, texts: chat?.texts || [] });
  }

  useEffect(()=> {
    const handleTexts = (messages=[]) => {
      setSelectedChat(prev => ({ ...prev, texts: messages }));
      setIsSendLoading(false);
    }
    socket.on('sendMessages', handleTexts);

    return () => {
      socket.off('sendMessages', handleTexts);
    }
  }, []);

  useEffect(()=> {
    const syncChats = async () => {
      const result = await getListChats();
      if (result.status === 'Success') {
        setUserChatsList(result.body);
      }
    }

    syncChats();
  }, [])

  return (
    <div className="h-[87%] flex flex-row justify-between bg-gray-700">
      <div className="flex flex-col w-2/5 border-r-2 border-gray-900 max-h-full overflow-x-hidden overflow-y-auto relative">
        {isShowUsersActive ? (
          <ShowUsers />
        ) : (
          <UserChats
            chats={userChatsList}
            onClickChat={onClickChat}
            selectedChat={selectedChat}
          />
        )}
        {isShowUsersActive ? null : (
          <div 
            onClick={()=> setIsShowUsersActive(true)} 
            className='flex 
              justify-center items-center w-[3rem] h-[3rem] text-[1.5rem] absolute bottom-[1rem] right-[1rem] 
              bg-primary text-white font-semibold rounded-full cursor-pointer hover:border hover:border-gray-500'
          >
            <span>+</span>
          </div>
        )}
      </div>
      <ChatsContainer
        chatTexts={selectedChat.texts}
        hostEmail={hostEmail}
        senderEmail={selectedChat.sender}
        isSendLoading={isSendLoading}
        setIsSendLoading={setIsSendLoading}
      />
      <div className="w-2/5 border-l-2 border-gray-900 px-5">
        <ChatDetails
          createdAt={selectedChat.details.createdAt}
          description={selectedChat.details.description}
          title={selectedChat.details.title}
        />
      </div>
    </div>
  )
}

export default MainSection
