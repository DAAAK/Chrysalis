import React from 'react';
import { useState, FormEvent } from 'react';
import { Form } from '../components';
import { Loading } from '../components/global';

import Alert from '../components/global/alert';
import { axiosInstance } from '../tools';

const Login = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    try {
      // axios.defaults.withCredentials = true;
      await axiosInstance.post('auth/basic/login', {
        email,
      });
      setEmail('');
      setAlert(true);
    } catch (error) {
      console.log('Error during basic login:', error);
    }
    setIsLoading(false);
  }

  async function handleGoogleLogin() {
    try {
      const response = await axiosInstance.post('auth/google/login');
      window.location.href = response.data;
    } catch (error) {
      console.log('Error during Google login:', error);
    }
  }

  async function handleFacebookLogin() {
    try {
      const response = await axiosInstance.post('auth/facebook/login');
      window.location.href = response.data;
    } catch (error) {
      console.log('Error during Facebook login:', error);
    }
  }

  if (isLoading) return <Loading />;

  if (alert) return <Alert />;

  return (
    <Form
      formType="login"
      handleGoogle={handleGoogleLogin}
      handleFacebook={handleFacebookLogin}
      handleSubmit={(event) => handleLogin(event)}
      email={email}
      setEmail={setEmail}
    />
  );
};

export default Login;
