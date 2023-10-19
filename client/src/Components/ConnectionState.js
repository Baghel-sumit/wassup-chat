import React from 'react';

export function ConnectionState({ isConnected }) {
  return <p className='mx-auto my-2 w-max bg-slate-500 text-gray-300 p-3 rounded-lg font-semibold'>
    State: {isConnected ? 'Connected' : 'Disconnected' }
  </p>;
}