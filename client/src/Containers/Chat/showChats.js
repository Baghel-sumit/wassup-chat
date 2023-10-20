import React from 'react'
import Header from '../../Components/header';
import MainSection from './mainSection';

const ShowChat = () => {
  return (
    <div class="w-screen h-screen bg-gray-900">
      <Header />
      <MainSection
        userChats={[]}
      />
    </div>
  )
}

export default ShowChat;
