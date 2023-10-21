import React, { useEffect, useState } from 'react'
import Header from '../../Components/header';
import MainSection from './mainSection';
import { socket } from '../../Services/socket';

const ShowChat = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    }

    const onDisconnect = () => {
      setIsConnected(false);
    }

    const onError = (err) => {
      console.log('Received error:', err);
    }
    socket.on('error', onError);
    
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-900">
      <Header isActive={isConnected} />
      <MainSection />
    </div>
  )
}

export default ShowChat;
