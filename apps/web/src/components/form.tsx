import React from "react";
import { IForm } from "../types"
import Register from "./register";
import Contact from "./contact";
import Login from "./login";

interface IProps extends IForm {
    formType: string
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ formType, handleGoogle, handleSubmit, type, setType, name, setName, email, setEmail, password, setPassword, subject, setSubject, message, setMessage }: IProps) => {

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
            {formType === "register" && (
                <Register type={type} setType={setType} name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleGoogle={handleGoogle} />
            )}
            {formType === "login" && (
                <Login type={type} setType={setType} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleGoogle={handleGoogle} />
            )}
            {formType === "contact" && (
                <Contact name={name} setName={setName} email={email} setEmail={setEmail} subject={subject} setSubject={setSubject} message={message} setMessage={setMessage} />
            )}
        </form>
    );
}

export default Form