import React, { useState, MouseEvent, FormEvent } from 'react';
import axios from 'axios';

import { Form } from '../components';
import { AuthProvider, Loading } from '../components/global';

import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    try {
      axios.defaults.withCredentials = true;
      await axios.post('http://localhost:8080/api/auth/user/register', {
        email,
        withCredentials: true,
        headers: { crossDomain: true, 'Content-Type': 'application/json' },
      });
      setEmail('');
      navigate('/alert');
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  async function handleGoogleRegister(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    await axios.get('http://localhost:8080/api/auth/google/login', {});
  }

  // async function handleFacebookRegister(event: MouseEvent<HTMLButtonElement>) {
  //   event.preventDefault();

  //   try {
  //     window.location.href = 'http://localhost:8080/api/auth/google/login';
  //   } catch (error: any) {
  //     console.log(error.response.data.message);
  //   }
  // }

  if (isLoading) return <Loading />;

  return (
    <AuthProvider>
      <Form
        formType="register"
        handleGoogle={handleGoogleRegister}
        handleSubmit={(event) => handleRegister(event)}
        email={email}
        setEmail={setEmail}
      />
    </AuthProvider>
  );
};

export default Register;
