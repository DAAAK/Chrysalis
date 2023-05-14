import React, { FormEvent } from "react";
import { IForm } from "../../types"
import RegisterForm from "./registerForm";
import ContactForm from "./contactForm";
import LoginForm from "./loginForm";

interface IProps extends IForm {
    formType: string
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ formType, handleGoogle, handleSubmit, type, setType, email, setEmail, subject, setSubject, message, setMessage }: IProps) => {

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto flex-row h-5/6">
            {
                formType === "register" ?
                    <RegisterForm type={type} setType={setType} email={email} setEmail={setEmail} handleGoogle={handleGoogle} />
                    :
                formType === "login" ?
                    <LoginForm type={type} setType={setType} email={email} setEmail={setEmail} handleGoogle={handleGoogle} />
                    :
                    < ContactForm email={email} setEmail={setEmail} subject={subject} setSubject={setSubject} message={message} setMessage={setMessage} />
            }
        </form>
    );
}

export default Form