import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { logo } from "../assets"

const Verify = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const verifyAccount = async () => {
    setIsVerifying(true);
    try {
      await axios.post(
        `http://localhost:8080/api/auth/user/verify/${token}`
      );
      setVerificationSuccess(true);
      navigate("/");
    } catch (error) {
      console.log(error)
    }
    setIsVerifying(false);

  };

  const handleVerifyClick = () => {
    verifyAccount();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-1/2 w-auto"
          src={logo}
          alt="logo"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Vérifiez votre compte
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Cliquez sur le bouton ci-dessous pour vérifier votre compte
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {isVerifying && (
          <div className="mt-4">
            <p className="text-center text-sm text-gray-600">
              Vérification de votre compte en cours...
            </p>
          </div>
        )}
        {!isVerifying && verificationSuccess && (
          <div className="mt-4">
            <p className="text-center text-sm text-gray-600">
              Votre compte a été vérifié avec succès !
            </p>
          </div>
        )}
        {!isVerifying && !verificationSuccess && (
          <div className="mt-4">
            <button
              type="submit"
              onClick={handleVerifyClick}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-[#93d9f0] hover:bg-[#84afbd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#93d9f0]"
            >
              Vérifier le compte
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;
