import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { logo } from '../assets';
import { Loading } from '../components/global';

export enum EUserRole {
  User = 'user',
  Admin = 'admin',
}

const Verify = () => {
  const [role, setRole] = useState('');

  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const verifyAccount = async () => {
    setIsVerifying(true);
    try {
      axios.defaults.withCredentials = true;
      await axios.post(`http://localhost:8080/api/auth/basic/verify/${token}`, {
        withCredentials: true,
        headers: { crossDomain: true, 'Content-Type': 'application/json' },
      });
      setVerificationSuccess(true);
    } catch (error) {
      console.log(error);
    }
    setIsVerifying(false);
    setShowLoading(true);
  };

  async function getUser() {
    const response = await axios.get(`http://localhost:8080/api/user/user`, {
      withCredentials: true,
      headers: { crossDomain: true, 'Content-Type': 'application/json' },
    });
    setRole(response.data.connectedUser.role);
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (verificationSuccess) {
      if (role === undefined || role === '') {
        navigate('/role');
      } else {
        const successMessageDelay = setTimeout(() => {
          navigate('/');
        }, 5000);

        return () => clearTimeout(successMessageDelay);
      }
    }
  }, [verificationSuccess, showLoading, navigate, role]);

  if (showLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-1/2 w-auto" src={logo} alt="logo" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Vérifiez votre compte
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Cliquez sur le bouton ci-dessous pour vérifier votre compte
        </p>
        <button
          onClick={() => {
            verifyAccount();
          }}
          className="w-full mt-5 bg-[#93d9f0] hover:bg-[#84afbd] text-white py-1 px-4 rounded-md"
        >
          Validate
        </button>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
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
      </div>
    </div>
  );
};

export default Verify;
