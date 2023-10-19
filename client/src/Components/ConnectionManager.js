import React from 'react';
import { socket } from '../Services/socket';

export function ConnectionManager({ isConnected }) {
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <div className='flex gap-2 mx-auto my-3 w-max'>
      {!isConnected ? 
        <button className='mx-auto my-2 w-max bg-green-500 text-gray-300 p-3 rounded-lg font-semibold' onClick={ connect }>Connect</button>
      : <button className='mx-auto my-2 w-max bg-red-500 text-gray-300 p-3 rounded-lg font-semibold' onClick={ disconnect }>Disconnect</button>}
    </div>
  );
}