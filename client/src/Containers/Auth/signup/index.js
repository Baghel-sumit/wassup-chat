import React from 'react';
import { Link } from 'react-router-dom'
import InputBox from '../../../Components/inputBox';

const Signup = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create New Account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <InputBox
                      label='Your Name'
                      name='name'
                      placeholder='John Doe'
                      type='text'
                      isRequired
                    />
                    <InputBox
                      label='Your Email'
                      name='email'
                      placeholder='Email@example.com'
                      type='email'
                      isRequired
                    />
                    <InputBox
                      label='New Password'
                      name='password'
                      placeholder='••••••••'
                      type='password'
                      isRequired
                    />
                    <button type="submit" className="w-full text-white bg-primary hover:opacity-7 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary">Create Account</button>
                    <p className="text-sm text-center text-gray-500 dark:text-white">
                      Already have an account? <Link to="/auth/login" className="font-medium text-primary hover:underline dark:text-primary">Login</Link>
                    </p>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Signup;
