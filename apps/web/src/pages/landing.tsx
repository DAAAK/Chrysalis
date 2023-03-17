import React, { useState, MouseEvent, FormEvent } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { form } from "../assets"
import { Form } from "../components"

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

    async function handleRegister(event: FormEvent<HTMLFormElement>, setRegistrationSuccess: (bool: boolean) => void) {
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


    async function handleLogin(event: FormEvent<HTMLFormElement>) {
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

    async function handleGoogleLogin(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        await axios.get('http://localhost:8080/api/auth/google/login', {
        })
    }

    async function handleGoogleRegister(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        try {
            window.location.href = 'http://localhost:8080/api/auth/google/login';
        } catch (error: any) {
            console.log(error.response.data.message);
        };
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            {renderSuccessMessage()}
            {type ? (
                <div className="flex flex-row justify-center">
                    <div className="flex flex-1 items-center justify-center">
                        <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg border border-gray-300">
                            <div className="flex flex-1">
                                <div className="w-2/3 p-8">
                                    <Form
                                        formType="register"
                                        handleGoogle={handleGoogleRegister}
                                        handleSubmit={(event) =>
                                            handleRegister(event, setRegistrationSuccess)
                                        }
                                        type={type}
                                        setType={() => {
                                            setType(!type);
                                            setRegistrationSuccess(false);
                                            setErrorMessage("");
                                        }}
                                        name={name}
                                        setName={setName}
                                        password={password}
                                        setPassword={setPassword}
                                        email={email}
                                        setEmail={setEmail}
                                    />
                                </div>
                                <div className="w-1/3">
                                    <img
                                        className="h-full w-full"
                                        src={form}
                                        alt="chrysalis-bg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
                :
                (
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-1 items-center justify-center">
                            <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg border bg-white">
                                <div className="flex flex-1">
                                    <div className="w-1/3">
                                        <img
                                            className="h-full w-full"
                                            src={form}
                                            alt="chrysalis-bg"
                                        />
                                    </div>
                                    <div className="w-2/3 p-8">
                                        <Form
                                            formType="login"
                                            handleGoogle={handleGoogleLogin}
                                            handleSubmit={(event) =>
                                                handleLogin(event)
                                            }
                                            type={type}
                                            setType={() => {
                                                setType(!type);
                                                setRegistrationSuccess(false);
                                                setErrorMessage("");
                                            }}
                                            password={password}
                                            setPassword={setPassword}
                                            email={email}
                                            setEmail={setEmail}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
}


export default Landing