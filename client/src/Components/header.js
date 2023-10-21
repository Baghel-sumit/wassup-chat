import React from 'react'

const Header = ({ isActive }) => {
  return (
    <div className="px-5 py-5 flex justify-between items-center bg-gray-900 border-b-2 border-gray-900">
      <div className="font-semibold text-2xl text-white">Wassup</div>
      <div className="w-1/2">
        <input
          type="text"
          name=""
          id=""
          placeholder="search IRL"
          className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
        />
      </div>
      <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center relative">
        RA
        {isActive ? <span className='w-3 h-3 bg-green-600 rounded-full absolute top-1 right-0' /> : null}
      </div>
    </div>
  )
}

export default Header
