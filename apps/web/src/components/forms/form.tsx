import React, { FormEvent } from "react";
import { IForm } from "../../types"
import RegisterForm from "./registerForm";
import ContactForm from "./contactForm";
import LoginForm from "./loginForm";

interface IProps extends IForm {
    formType: string
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ formType, handleGoogle, handleSubmit, type, setType, name, setName, email, setEmail, password, setPassword, subject, setSubject, message, setMessage }: IProps) => {

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto flex-row h-5/6">
            {
                formType === "register" ?
                    <RegisterForm type={type} setType={setType} name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleGoogle={handleGoogle} />
                    :
                formType === "login" ?
                    <LoginForm type={type} setType={setType} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleGoogle={handleGoogle} />
                    :
                    < ContactForm name={name} setName={setName} email={email} setEmail={setEmail} subject={subject} setSubject={setSubject} message={message} setMessage={setMessage} />
            }
        </form>
    );
}

export default Form