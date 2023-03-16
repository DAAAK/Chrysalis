import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { AuthForm } from "../components"

const Landing = () => {
    const navigation = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState(false)
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function renderSuccessMessage() {
        if (registrationSuccess) {
            return (
                <div className="bg-green-200 p-4 mb-9 rounded-md border border-green-400">
                    <p className="text-xl text-center font-bold">Account created successfully!</p>
                </div>
            );
        } else if (errorMessage) {
            return (
                <div className="bg-red-200 p-4 mb-9 rounded-md border border-red-400">
                    <p className="text-xl text-center font-bold">{errorMessage}</p>
                </div>
            );
        }
        return null;
    }

    async function handleRegister(event: any, setRegistrationSuccess: any) {
        event.preventDefault();

        try {
            await axios.post("http://localhost:8080/api/auth/user/register", {
                name,
                email,
                password,
            });
            setPassword("");
            setName("");
            setEmail("");
            setRegistrationSuccess(true);
            setType(false);
        } catch (error: any) {
            setErrorMessage(error.response.data.message);
        }
    }


    async function handleLogin(event: any) {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/user/login', {
                email,
                password,
            });
            const token = response.data.token;
            localStorage.setItem('access_token', token);
            setEmail('');
            setPassword('');
            navigation("/home");
        } catch (error: any) {
            setErrorMessage(error.response.data.message);
        }
    }

    async function handleGoogleLogin(event: any) {
        event.preventDefault();

        await axios.get('http://localhost:8080/api/auth/google/login', {
        })
    }

    async function handleGoogleRegister(event: any) {
        event.preventDefault();

        try {
            window.location.href = 'http://localhost:8080/api/auth/google/login';
        } catch (error: any) {
            console.log(error.response.data.message);
        };
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {renderSuccessMessage()}
            {type ?
                <AuthForm formType="register" handleGoogle={handleGoogleRegister}
                    handleSubmit={(event) => handleRegister(event, setRegistrationSuccess)} type={type} setType={() => { setType(!type); setRegistrationSuccess(false); setErrorMessage("") }} name={name} setName={setName} password={password} setPassword={setPassword}
                    email={email} setEmail={setEmail} />
                :
                <AuthForm formType="login" handleGoogle={handleGoogleLogin}
                    handleSubmit={handleLogin} type={type} setType={() => { setType(!type); setRegistrationSuccess(false); setErrorMessage("") }} name={name} setName={setName} password={password} setPassword={setPassword}
                    email={email} setEmail={setEmail} />
            }
        </div>
    );
}


export default Landing