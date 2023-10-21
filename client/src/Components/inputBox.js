import React from 'react'

const InputBox = ({ name, type, placeholder, value, onChange, label, isRequired=false, inputClass, labelClass }) => {
  return (
    <div>
      <label 
        htmlFor={name} 
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${labelClass || ''}`}
      >
        {label}
      </label>
      <input 
        type={type} 
        name={name} 
        className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputClass || ''}`} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={isRequired}
      />
    </div>
  )
}

export default InputBox
