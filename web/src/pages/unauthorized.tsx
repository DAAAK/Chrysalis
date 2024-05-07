import React from 'react';
import { logo } from '../assets';

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={logo} alt="Logo" className="w-32 h-32 mb-10" />
      <div className="text-6xl font-bold text-gray-800 mb-4">403</div>
      <div className="text-4xl font-bold text-gray-800 mb-2">Non autorisé</div>
      <div className="text-xl text-gray-600 mb-2">
        Désolé, vous n'avez pas l'autorisation d'accéder à cette page.
      </div>
      <div className="text-xl text-gray-600 mb-6">
        Veuillez vous connecter pour pouvoir accéder à cette page.
      </div>
      <a href="/" className="flex items-center text-blue-600 hover:underline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Retour à la page d'accueil
      </a>
    </div>
  );
};

export default Unauthorized;
