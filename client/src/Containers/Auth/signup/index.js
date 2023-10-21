import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import InputBox from '../../../Components/inputBox';
import { createUserAccount } from '../../../Services/Auth';

const Signup = ({ goToLogin }) => {
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = Object.fromEntries(new FormData(e.target));
    try {
      setIsBtnLoading(true);
      const result = await createUserAccount(details);
      setIsBtnLoading(false);
      if (result?.status === 'Success') {
        localStorage.setItem('token', result.token);
        localStorage.setItem('email', result.body._doc.email);
        navigate('/showChat');
      } else {
        console.log(result.message);
      }
    } catch (error) {
      console.log({ error });
    }
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
                    <button type="submit" className="w-full text-white bg-primary hover:opacity-7 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-60 disabled:cursor-not-allowed dark:bg-primary" disabled={isBtnLoading}>
                      {isBtnLoading ? 'Creating...' : 'Create Account'}
                    </button>
                    <p className="text-sm text-center text-gray-500 dark:text-white">
                      Already have an account? <span className="font-medium text-primary cursor-pointer hover:underline dark:text-primary" onClick={goToLogin} >Login</span>
                    </p>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Signup;
