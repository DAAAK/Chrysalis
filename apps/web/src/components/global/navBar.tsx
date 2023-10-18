import { useCallback, useContext, useEffect, useState } from 'react';
import { logo } from '../../assets';
import { AuthContext } from './authContext';
import Cookies from 'js-cookie';
import axios from 'axios';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const authContext = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getUser = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/user`, {
        withCredentials: true,
        headers: { crossDomain: true, 'Content-Type': 'application/json' },
      });
      if (response.data.connectedUser && authContext) {
        authContext.setUserRole(response.data.connectedUser.role);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }, [authContext]);

  useEffect(() => {
    if (!authContext) return;

    const jwtToken = Cookies.get('jwt');

    if (jwtToken) authContext.setIsLoggedIn(true);

    getUser();
  }, [authContext, getUser]);

  if (!authContext) return null;

  const handleLogout = async () => {
    Cookies.remove('jwt');
    if (authContext) {
      authContext.setIsLoggedIn(false);
    }
  };

  return (
    <nav className="w-full  bg-gradient-to-r from-[#93d9f0] to-green-400">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex items-center flex-shrink-0  mr-6">
              <img
                className="fill-current h-16 w-16 mr-2"
                src={logo}
                alt="chrysalis-logo"
              />
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 outline-none rounded-md focus:border-gray-400 focus:border"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <ul className="flex flex-col items-center justify-center space-y-8 md:flex-row md:flex-wrap md:space-x-6 md:space-y-0 md:justify-end">
              <li className="text-black hover:text-white">
                <a href="/home">Accueil</a>
              </li>
              <li className="text-black hover:text-white">
                <a href="/features">Prestations</a>
              </li>
              <li className="text-black hover:text-white">
                <a href="/book">Reservation</a>
              </li>
              <li className="text-black hover:text-white">
                <a href="/contacts">Contacts</a>
              </li>
              <li className="p-2">
                {authContext.isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="bg-black px-4 py-2 rounded-lg text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <a
                    href="/login"
                    className="bg-black px-4 py-2 rounded-lg text-white"
                  >
                    Connection
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
