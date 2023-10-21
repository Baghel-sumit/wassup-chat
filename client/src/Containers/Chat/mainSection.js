import React, { useEffect, useState } from 'react';
import ChatsContainer from './chatsContainer';
import ChatDetails from '../../Components/chatDetails';
import { socket } from '../../Services/socket';
import UserChats from './userChats';
import ShowUsers from './showUsers';

const MainSection = () => {
  const hostEmail = localStorage.getItem('email');
  const [userChatsList, setUserChatsList] = useState([]);
  const [selectedChat, setSelectedChat] = useState({ details: {}, activeIndex: '', texts: [] });
  const [isShowUsersActive, setIsShowUsersActive] = useState(false);
  const [isSendLoading, setIsSendLoading] = useState(false);

  const onClickChat = (chat, index) => {
    const senderEmail = chat.composers.find((item)=> item.toLowerCase() !== hostEmail.toLowerCase());
    socket.emit('join', { senderEmail, hostEmail });
    setSelectedChat({ details: {}, sender: senderEmail, activeIndex: index, texts: chat?.texts || [] });
  }

  const onClickUser = (user) => {
    const senderEmail = user.email;
    socket.emit('join', { senderEmail, hostEmail });
    setSelectedChat({ details: {}, sender: senderEmail, activeIndex: -1, texts: [] });
    setIsShowUsersActive(false);
  }

  useEffect(()=> {
    const handleTexts = ({ isMessages=false, res }) => {
      if (isMessages && Object.keys(res).length) {
        if (userChatsList.length) {
          const list = userChatsList?.map((item)=> {
            if (item._id === res?._id) {
              item = res;
            }
            return item;
          });
          setUserChatsList(list);
        }
        setSelectedChat(prev => ({ ...prev, texts: res?.texts }));
        setIsSendLoading(false);
      } else if (!isMessages) {
        setUserChatsList(res);
      }
    }
    socket.on('sendMessages', handleTexts);

    return () => {
      socket.off('sendMessages', handleTexts);
    }
  }, []);

  useEffect(()=> {
    if (!hostEmail) return;

    socket.emit('onLoad', hostEmail);
  }, [hostEmail]);

  return (
    <div className="h-[87%] flex flex-row justify-between bg-gray-700">
      <div className="flex flex-col w-2/5 border-r-2 border-gray-900 max-h-full overflow-x-hidden overflow-y-auto relative">
        {isShowUsersActive ? (
          <ShowUsers onSelectUser={onClickUser} />
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
