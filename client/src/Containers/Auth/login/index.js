import React from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../../../Components/inputBox';

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Login
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <InputBox
                      label='Your Email'
                      name='email'
                      placeholder='Email@example.com'
                      type='email'
                      isRequired
                    />
                    <InputBox
                      label='Password'
                      name='password'
                      placeholder='••••••••'
                      type='password'
                      isRequired
                    />
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                              <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-primary hover:opacity-7 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary">Login</button>
                    <p className="text-sm text-center text-gray-500 dark:text-white">
                        Don’t have an account yet? <Link to="/auth/signup" className="font-medium text-primary hover:underline dark:text-primary">Create New</Link>
                    </p>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Login;
