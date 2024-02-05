import { useEffect, useState } from 'react';
import axios from 'axios';
import { logo } from '../assets';
import { parse } from 'cookie';
import { useNavigate } from 'react-router-dom';

export enum EUserRole {
  User = 'user',
  Admin = 'admin',
}

const Role = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const [clickedButton, setClickedButton] = useState<EUserRole | null>(null);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function getAuthorizationCodeFromCookie() {
    const cookies = parse(document.cookie);
    return cookies.authorizationCode || null;
  }

  async function getUser() {
    const response = await axios.get(`http://localhost:8080/api/user/user`, {
      withCredentials: true,
      headers: { crossDomain: true, 'Content-Type': 'application/json' },
    });
    setEmail(response.data.connectedUser.email);
  }

  useEffect(() => {
    getUser();
  }, []);

  async function handleRoleChange(selectedRole: string) {
    const authorizationCode = getAuthorizationCodeFromCookie();

    try {
      await axios.post(`http://localhost:8080/api/user/role`, {
        code: authorizationCode,
        email,
        role: selectedRole,
        withCredentials: true,
        headers: { crossDomain: true, 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-10">Choisissez votre rôle</h1>
      <div className="flex space-x-8">
        <div
          className={`flex-1 p-4 border rounded-lg shadow-md text-center cursor-pointer transition-transform transform w-96 h-96 ${
            clickedButton === EUserRole.User
              ? 'border-[#84afbd]'
              : 'border-gray-300'
          } ${
            clickedButton === EUserRole.User
              ? 'scale-105 bg-[#e6f4f7]'
              : 'scale-100 bg-white hover:bg-gray-100'
          }`}
          onClick={() => setClickedButton(EUserRole.User)}
        >
          <div className="flex flex-col h-full justify-center">
            <img src={logo} alt="User" className="mx-auto mb-3 w-52 h-52" />
            <p className="text-lg font-medium">Utilisateur</p>
          </div>
        </div>
        <div
          className={`flex-1 p-4 border rounded-lg shadow-md w-96 h-96 text-center cursor-pointer transition-transform transform ${
            clickedButton === EUserRole.Admin
              ? 'border-[#84afbd]'
              : 'border-gray-300'
          } ${
            clickedButton === EUserRole.Admin
              ? 'scale-105 bg-[#e6f4f7]'
              : 'scale-100 bg-white hover:bg-gray-100'
          }`}
          onClick={() => {
            setErrorMessage('');
            setInputValue('');
            setIsModalVisible(true);
            setClickedButton(EUserRole.Admin);
          }}
        >
          <div className="flex flex-col h-full justify-center">
            <img src={logo} alt="Admin" className="mx-auto mb-3 w-52 h-52" />
            <p className="text-lg font-medium">Administrateur</p>
          </div>
        </div>
      </div>
      <button
        className="mt-20   bg-[#93d9f0] hover:bg-[#84afbd] text-white py-2 px-6 rounded-md"
        onClick={() => {
          if (clickedButton === EUserRole.User) {
            handleRoleChange(EUserRole.User);
            navigate('/');
          } else if (clickedButton === EUserRole.Admin) {
            setErrorMessage('');
            setInputValue('');
            setIsModalVisible(true);
          }
        }}
      >
        Choisissez votre role
      </button>
      {isModalVisible && clickedButton === EUserRole.Admin && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-black"
          onClick={() => {
            setIsModalVisible(false);
            setInputValue('');
            setErrorMessage('');
          }}
        >
          <div
            className="bg-white p-6 items-center justify-center flex flex-col rounded-md shadow-md h-2/6 w-2/6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end w-full ">
              <button
                onClick={() => {
                  setIsModalVisible(false);
                  setInputValue('');
                  setErrorMessage('');
                }}
                className="absolute top-2 right-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-lg font-semibold mb-5">Enter the admin code</h2>
            <input
              type="password"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-2 border rounded-md mb-2"
              placeholder="Enter the admin code"
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
              onClick={() => {
                if (inputValue === 'admin') {
                  setErrorMessage('');
                  setIsModalVisible(false);
                  setClickedButton(EUserRole.Admin);
                  handleRoleChange(EUserRole.Admin);
                  navigate('/');
                } else {
                  setErrorMessage('Invalid code. Please try again.');
                }
              }}
              className="w-full bg-[#93d9f0] hover:bg-[#84afbd] text-white py-1 px-4 rounded-md mt-5"
            >
              Validate
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Role;
