import React, { useState, MouseEvent, FormEvent, useContext } from 'react'
import axios from 'axios';

import { form } from "../assets"
import { Form } from "../components"
import { AuthProvider, Loading } from '../components/global';
import { AuthContext } from '../components/global/authContext';


const Connection = () => {
    const [email, setEmail] = useState("");
    const [type, setType] = useState(false)
    const [showMessage, setShowMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const authContext = useContext(AuthContext);

    async function handleRegister(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsLoading(true);
        try {
            await axios.post("http://localhost:8080/api/auth/user/register", {
                email,
            });
            setEmail("");
            setType(true);
            setShowMessage(true);
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false);
    }


    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        setIsLoading(true);
        try {
          const response = await axios.post('http://localhost:8080/api/auth/user/login', {
            email,
          });
          const token = response.data.token;
          console.log(token)
          localStorage.setItem('jwt', token);
          setEmail('');
          if (authContext) {
            const { setIsLoggedIn } = authContext;
            setIsLoggedIn(true);
          }
        } catch (error: any) {
          console.log(error);
        }
        setIsLoading(false);
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

    if (isLoading) {
        return <Loading />;
    }

    return (
        <AuthProvider>
        <div className="flex items-center justify-center min-h-screen">
            {type ? (
                <div className="flex flex-row justify-center">
                    <div className="flex flex-1 items-center justify-center">
                        <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg border border-gray-300">
                            {showMessage && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4" role="alert">
                                    Vérifiez votre boîte de réception pour le lien de vérification.
                                </div>
                            )}
                            <div className="flex flex-1">
                                <div className="w-2/3 p-8">
                                    <Form
                                        formType="register"
                                        handleGoogle={handleGoogleRegister}
                                        handleSubmit={(event) =>
                                            handleRegister(event)
                                        }
                                        type={type}
                                        setType={() => {
                                            setType(!type);
                                        }}
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
                            <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg border border-gray-300">
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
                                            }}
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
        </AuthProvider>

    );
}


export default Connection