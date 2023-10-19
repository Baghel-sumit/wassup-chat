import React, { useState } from 'react';
import { socket } from '../Services/socket';

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setValue('');
    setIsLoading(true);

    socket.timeout(5000).emit('sendMessage', value, () => {
      setIsLoading(false);
    });
  }

  return (
    <form className='flex flex-col justify-center items-center gap-2 mx-auto my-2' onSubmit={ onSubmit }>
      <input className='p-2 border w-1/2 border-slate-500 font-serif text-gray-500 rounded-lg' value={value} onChange={ e => setValue(e.target.value) } />

      <button type="submit" className='mx-auto my-2 w-max bg-blue-500 text-gray-300 py-3 px-10 rounded-lg font-semibold disabled:opacity-5' disabled={ isLoading } onClick={onSubmit}>Submit</button>
    </form>
  );
}