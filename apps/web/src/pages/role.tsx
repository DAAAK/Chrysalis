import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthProvider, NavBar } from '../components/global';

export enum EUserRole {
  User = 'user',
  Admin = 'admin',
}

const Role = () => {
  const [user, setUser] = useState('');

  const [clickedButton, setClickedButton] = useState<EUserRole | null>(null);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function getUser() {
    const response = await axios.get(
      `http://localhost:8080/api/auth/user/user`
    );
    setUser(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getUser();
    console.log('user ', user);
  }, [user]);

  async function handleRoleChange(selectedRole: string) {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/user/${user}/role`,
        {
          role: selectedRole,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <AuthProvider>
      <NavBar />
      <div className="flex justify-center">
        <button
          type="submit"
          onClick={() => {
            setClickedButton(EUserRole.User);
            handleRoleChange(EUserRole.User);
          }}
          className={`py-2 px-4 border rounded-md shadow-sm text-sm font-medium ${
            clickedButton === EUserRole.User
              ? 'border-[#84afbd] text-[#84afbd] outline-[#84afbd]'
              : 'text-black'
          } bg-[#93d9f0] hover:bg-[#84afbd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#93d9f0] ${
            clickedButton === EUserRole.Admin && !isModalVisible
              ? 'opacity-40 pointer-events-none'
              : ''
          }`}
        >
          Vérifier le compte en tant qu'Utilisateur
        </button>
        <button
          type="submit"
          onClick={() => {
            setErrorMessage('');
            setInputValue('');
            setIsModalVisible(true);
            setClickedButton(EUserRole.Admin);
          }}
          className={`ml-4 py-2 px-4 border rounded-md shadow-sm text-sm font-medium ${
            clickedButton === EUserRole.Admin
              ? 'border-[#84afbd] text-[#84afbd] outline-[#84afbd]'
              : 'text-black'
          } bg-[#93d9f0] hover:bg-[#84afbd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#93d9f0] ${
            clickedButton === EUserRole.User && !isModalVisible
              ? 'opacity-40 pointer-events-none'
              : ''
          }`}
        >
          Vérifier en tant qu'Admin avec code
        </button>
      </div>
      {isModalVisible && clickedButton === EUserRole.Admin && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-black
  "
          onClick={() => {
            setIsModalVisible(false);
            setInputValue('');
            setErrorMessage('');
          }}
        >
          <div
            className="bg-white p-6 rounded-md shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setIsModalVisible(false);
                  setInputValue('');
                  setErrorMessage('');
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
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
            <h2 className="text-lg font-semibold mb-2">Enter the admin code</h2>
            <input
              type="password"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-2 border rounded-md mb-2"
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
              onClick={() => {
                if (inputValue === '1234') {
                  setErrorMessage('');
                  setIsModalVisible(false);
                  setClickedButton(EUserRole.Admin);
                  handleRoleChange(EUserRole.Admin);
                } else {
                  setErrorMessage('Invalid code. Please try again.');
                }
              }}
              className="w-full bg-[#93d9f0] hover:bg-[#84afbd] text-white py-1 px-4 rounded-md mt-2"
            >
              Validate
            </button>
          </div>
        </div>
      )}
    </AuthProvider>
  );
};

export default Role;
