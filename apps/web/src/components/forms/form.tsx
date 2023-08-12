import React, { FormEvent } from 'react';
import { IForm } from '../../types';
import RegisterForm from './registerForm';
import ContactForm from './contactForm';
import LoginForm from './loginForm';

interface IProps extends IForm {
  formType: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Form = ({
  formType,
  handleGoogle,
  handleSubmit,
  email,
  setEmail,
  subject,
  setSubject,
  message,
  setMessage,
}: IProps) => {
  return formType === 'register' ? (
    <RegisterForm
      email={email}
      setEmail={setEmail}
      handleGoogle={handleGoogle}
      handleSubmit={handleSubmit}
    />
  ) : formType === 'login' ? (
    <LoginForm
      email={email}
      setEmail={setEmail}
      handleGoogle={handleGoogle}
      handleSubmit={handleSubmit}
    />
  ) : (
    <ContactForm
      email={email}
      setEmail={setEmail}
      subject={subject}
      setSubject={setSubject}
      message={message}
      setMessage={setMessage}
    />
  );
};

export default Form;