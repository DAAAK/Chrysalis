import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';

const LoginModal = ({ isOpen, closeModal }: { isOpen: any, closeModal: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function clearError() {
    setErrorMessage('');
  }

  function handleEmailChange(event: any) {
    setEmail(event.target.value);
    clearError()
  }

  function handlePasswordChange(event: any) {
    setPassword(event.target.value);
    clearError()
  }

  async function handleGoogle(event: any) {
    event.preventDefault();

    console.log("totot")
    await axios.get('http://localhost:3001/api/auth/google/login', {
    }).then(() => {
        closeModal();
    }
    ).catch((error: any) => {
        setErrorMessage(error.response.data.message);
    });
}

  async function handleLogin(event: any) {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/auth/user/login', {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('access_token', token);
      setEmail('');
      setPassword('');
      closeModal();
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  }

  return (
    <Transition show={isOpen}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="flex items-center justify-center min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-2xl w-full">
            <div className="bg-gray-800 px-4 py-4">
              <h2 className="text-lg font-medium text-white">Sign in</h2>
            </div>
            {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg mb-4">
                {errorMessage}
              </div>
            )}
            <div className="px-4 py-6">
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                <p className="text-gray-700 text-lg mt-4">or sign in with</p>
                <div className="flex justify-center items-center mt-4">
                  <button className="rounded-full p-2 mr-2" onClick={handleGoogle}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 23 23">
                      <path xmlns="http://www.w3.org/2000/svg" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path xmlns="http://www.w3.org/2000/svg" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path xmlns="http://www.w3.org/2000/svg" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path xmlns="http://www.w3.org/2000/svg" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      <path xmlns="http://www.w3.org/2000/svg" d="M1 1h22v22H1z" fill="none" />
                    </svg>
                  </button>
                  <button className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                      <path xmlns="http://www.w3.org/2000/svg" fill="#1976D2" d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z" />
                      <path xmlns="http://www.w3.org/2000/svg" fill="#FAFAFA" fill-rule="evenodd" d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default LoginModal;
