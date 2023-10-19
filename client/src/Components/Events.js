import React from 'react';

export function Events({ events }) {
  return (
    <div className='m-auto bg-primary p-3 w-1/2 h-[50vh] overflow-x-hidden overflow-y-auto rounded-lg'>
    {
      events.map((event, index) =>
        <div key={ index } className='w-fit m-3 p-2 rounded-lg bg-white text-gray-500'>{ event }</div>
      )
    }
    {
      events.length ? null : (
        <div className='w-full h-full flex justify-center items-center font-semibold text-white'>No messages</div>
      )
    }
    </div>
  );
}