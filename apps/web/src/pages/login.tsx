import React, { useState, FormEvent, useContext } from 'react';
import axios from 'axios';

import { Form } from '../components';
import { AuthProvider, Loading } from '../components/global';
import { AuthContext } from '../components/global/authContext';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:8080/api/auth/user/login',
        {
          email,
        }
      );
      setEmail('');

      const token = response.data.token;

      localStorage.setItem('jwt', token);

      navigate('/alert');
      if (authContext) {
        const { setIsLoggedIn } = authContext;
        setIsLoggedIn(true);
      }
    } catch (error: any) {
      console.log(error);
    }
    setIsLoading(false);
  }

  async function handleGoogleLogin() {
    const response = await axios.post(
      'http://localhost:8080/api/auth/google/login'
    );
    console.log(response.data.url);
    window.location.href = response.data.url;
    console.log(navigate(response.data.url));
  }

  // async function handleFacebookLogin(event: MouseEvent<HTMLButtonElement>) {
  //     event.preventDefault();

  //     await axios.get('http://localhost:8080/api/auth/google/login', {
  //     })
  // }

  if (isLoading) return <Loading />;

  return (
    <AuthProvider>
      <Form
        formType="login"
        handleGoogle={handleGoogleLogin}
        handleSubmit={(event) => handleLogin(event)}
        email={email}
        setEmail={setEmail}
      />
    </AuthProvider>
  );
};

export default Login;