import React, { useEffect, useState } from 'react'
import TextCard from '../../Components/textCard'
import { socket } from '../../Services/socket';

const ChatsContainer = ({ chatTexts=[], hostEmail, senderEmail, isSendLoading, setIsSendLoading }) => {
  const [textValue, setTextValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextValue('');
    setIsSendLoading(true);
    const textMessage = { composerEmail: hostEmail, text: textValue };
    socket.emit('sendText', { composers: [ hostEmail, senderEmail ], ...textMessage });
  }

  const scrollToBottom = () => {
    const scrollableElement = document.getElementById('scrollableElement');
    scrollableElement.scrollTop = scrollableElement.scrollHeight;
  };

  useEffect(()=> {
    scrollToBottom();
  }, [chatTexts]);

  return (
    <div className="w-full px-5 flex flex-col justify-between">
      <div className="flex flex-col mt-5 max-h-full overflow-x-hidden overflow-y-auto" id='scrollableElement'>
        {chatTexts.map((item, index)=> (
          <TextCard
            key={index}
            isLeft={item.composerEmail !== hostEmail}
            text={item.text}
          />
        ))}
      </div>
      <div className="py-5">
        <form onSubmit={handleSubmit} className='flex gap-2 justify-center'>
          <input
            className="w-[80%] bg-gray-300 py-5 px-3 rounded-xl"
            type="text"
            placeholder="type your message here..."
            value={textValue}
            onChange={(e)=> setTextValue(e.target.value)}
          />
          <button 
            type="submit" 
            className={`bg-blue-700 rounded-lg text-lg p-1 text-white w-32 ${isSendLoading ? 'cursor-not-allowed opacity-[0.5]' : ''}`}
            disabled={isSendLoading}
          >
            {isSendLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatsContainer
