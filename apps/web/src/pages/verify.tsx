import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { logo } from '../assets';
import { Loading, AuthProvider } from '../components/global';

export enum EUserRole {
  User = 'user',
  Admin = 'admin',
}

const Verify = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const [clickedButton, setClickedButton] = useState<EUserRole | null>(null);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const verifyAccount = async (selectedRole: EUserRole) => {
    setIsVerifying(true);
    try {
      await axios.post(`http://localhost:8080/api/auth/user/verify/${token}`, {
        role: selectedRole,
      });
      setVerificationSuccess(true);
    } catch (error) {
      console.log(error);
    }
    setIsVerifying(false);
    setShowLoading(true);
  };

  useEffect(() => {
    if (verificationSuccess) {
      const successMessageDelay = setTimeout(() => {
        navigate('/');
      }, 5000);

      return () => clearTimeout(successMessageDelay);
    }
  }, [verificationSuccess, showLoading, navigate]);

  if (showLoading) return <Loading />;

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-1/2 w-auto" src={logo} alt="logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Vérifiez votre compte
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Cliquez sur le bouton ci-dessous pour vérifier votre compte
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <button
              type="submit"
              onClick={() => {
                verifyAccount(EUserRole.User);
                setClickedButton(EUserRole.User);
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
              disabled={isVerifying}
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
              disabled={isVerifying}
            >
              Vérifier en tant qu'Admin avec code
            </button>
          </div>
          {isVerifying && (
            <div className="mt-4">
              <p className="text-center text-sm text-gray-600">
                Vérification de votre compte en cours...
              </p>
            </div>
          )}
          {!isVerifying && !verificationSuccess && (
            <div className="mt-4">
              <p className="text-center text-sm text-gray-600">
                Votre compte a été vérifié avec succès !
              </p>
            </div>
          )}
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
                <h2 className="text-lg font-semibold mb-2">
                  Enter the admin code
                </h2>
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
                      verifyAccount(EUserRole.Admin);
                      setClickedButton(EUserRole.Admin);
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
        </div>
      </div>
    </AuthProvider>
  );
};

export default Verify;
