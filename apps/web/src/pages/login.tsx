import { useState, FormEvent, useContext } from 'react';
import axios from 'axios';

import { Form } from '../components';
import { AuthProvider, Loading } from '../components/global';
import { AuthContext } from '../components/global/authContext';

import Alert from '../components/global/alert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const authContext = useContext(AuthContext);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    try {
      axios.defaults.withCredentials = true;
      await axios.post('http://localhost:8080/api/auth/basic/login', {
        email,
        withCredentials: true,
        headers: { crossDomain: true, 'Content-Type': 'application/json' },
      });
      setEmail('');
      setAlert(true);
      if (authContext) {
        const { setIsLoggedIn } = authContext;
        setIsLoggedIn(true);
      }
    } catch (error: any) {
      console.log(error);
    }
    if (authContext) {
      const { setIsLoggedIn, setUserRole } = authContext;
      setIsLoggedIn(true);
      setUserRole('user');
    }
    setIsLoading(false);
  }

  async function handleGoogleLogin() {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/auth/google/login'
      );
      window.location.href = response.data;
    } catch (error) {
      console.log('Error during Google login:', error);
    }
  }

  async function handleFacebookLogin() {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/auth/facebook/login'
      );
      window.location.href = response.data;
    } catch (error) {
      console.log('Error during Google login:', error);
    }
  }

  if (isLoading) return <Loading />;

  if (alert) return <Alert />;

  return (
    <AuthProvider>
      <Form
        formType="login"
        handleGoogle={handleGoogleLogin}
        handleFacebook={handleFacebookLogin}
        handleSubmit={(event) => handleLogin(event)}
        email={email}
        setEmail={setEmail}
      />
    </AuthProvider>
  );
};

export default Login;
