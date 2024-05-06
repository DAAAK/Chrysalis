import React from 'react';
import { FormEvent } from 'react';
import { IForm } from '../../types';
import ContactForm from './contactForm';
import LoginForm from './loginForm';

interface IProps extends IForm {
  formType: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Form = ({
  formType,
  handleGoogle,
  handleFacebook,
  handleSubmit,
  email,
  setEmail,
  subject,
  setSubject,
  message,
  setMessage,
}: IProps) => {
  return formType === 'login' ? (
    <LoginForm
      email={email}
      setEmail={setEmail}
      handleGoogle={handleGoogle}
      handleSubmit={handleSubmit}
      handleFacebook={handleFacebook}
    />
  ) : (
    <ContactForm
      subject={subject}
      setSubject={setSubject}
      message={message}
      setMessage={setMessage}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form;
