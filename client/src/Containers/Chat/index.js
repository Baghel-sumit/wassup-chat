import React, { useState, useEffect } from 'react';
import { socket } from '../../Services/socket';
import { ConnectionState } from '../../Components/ConnectionState';
import { ConnectionManager } from '../../Components/ConnectionManager';
import { Events } from "../../Components/Events";
import { MyForm } from '../../Components/MyForm';


const Chat = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);


  return (
    <div className="Chat">
      <ConnectionState isConnected={ isConnected } />
      <ConnectionManager isConnected={ isConnected } />
      <Events events={ fooEvents } />
      <MyForm />
    </div>
  );
}

export default Chat;
