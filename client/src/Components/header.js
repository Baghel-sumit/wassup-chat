import React from 'react'

const Header = () => {
  return (
    <div class="px-5 py-5 flex justify-between items-center bg-gray-900 border-b-2 border-gray-900">
      <div class="font-semibold text-2xl text-white">Wassup</div>
      <div class="w-1/2">
        <input
          type="text"
          name=""
          id=""
          placeholder="search IRL"
          class="rounded-2xl bg-gray-100 py-3 px-5 w-full"
        />
      </div>
      <div class="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">RA</div>
    </div>
  )
}

export default Header
