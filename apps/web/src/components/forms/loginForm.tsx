import React from 'react';
import { IForm } from '../../types';
import { logo } from '../../assets';

const LoginForm = ({ email, setEmail, handleGoogle, handleSubmit }: IForm) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen">
      <div className="flex bg-white rounded-lg shadow-md w-5/6 md:w-4/5 lg:w-3/5 border border-gray-300">
        <div className="md:w-1/2 md:p-12 border-r-2 border-white h-full justify-center items-center flex flex-col">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col text-center items-center  justify-center">
              <img src={logo} style={{ width: '185px' }} alt="logo" />
              <h4 className="my-5 pb-1 text-2xl font-bold">
                Nous sommes Chrysalis
              </h4>
            </div>
            <div className="items-center justify-center flex flex-col">
              <p className="my-5 text-center">
                Veuillez vous connecter à votre compte
              </p>
              <input
                className="my-5 w-5/6 px-4 py-2 border mx-auto rounded-lg focus:outline-none focus:border-[#93d9f0]"
                type="email"
                value={email}
                onChange={(event) => setEmail && setEmail(event.target.value)}
                required
                placeholder="jhon.doe@gmail.com"
              />
              <div className="text-center pt-1 mb-5 pb-1">
                <button className="mt-5 px-4 py-2 font-bold text-white rounded-lg bg-gradient-to-r from-[#93d9f0] to-green-400">
                  Connectez vous
                </button>
              </div>
            </div>
          </form>
          <div className="flex justify-center items-center mt-5">
            <div className="w-24 h-px bg-gray-400 mx-3"></div>
            <span className="text-gray-500">ou</span>
            <div className="w-24 h-px bg-gray-400 mx-3"></div>
          </div>
          <div className="flex justify-center items-center my-5">
            <button className="rounded-full p-2 mr-2" onClick={handleGoogle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 23 23"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M1 1h22v22H1z"
                  fill="none"
                />
              </svg>
            </button>
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1976D2"
                  d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FAFAFA"
                  fill-rule="evenodd"
                  d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-1/2 bg-gradient-to-r from-[#93d9f0] to-green-400 flex items-center">
          <div className="text-white px-3 py-4 p-md-5 mx-md-4 text-center">
            <h4 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold">
              Nous sommes plus qu'un institut
            </h4>
            <p className="small mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
