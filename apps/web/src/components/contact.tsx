import React from 'react'
import { IForm } from '../types'

const Contact = ({ name, setName, email, setEmail, subject, setSubject, message, setMessage }: IForm) => {
    return (
        <div>
            <h2 className="text-2xl text-center font-bold mb-10">
                Contact Us
            </h2>
            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Name
                </label>
                <input
                    type="name"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={name}
                    onChange={(event) => setName && setName(event.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={email}
                    onChange={(event) => setEmail && setEmail(event.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="subject"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={subject}
                    onChange={(event) => setSubject && setSubject(event.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Message
                </label>
                <input
                    type="text"
                    multiple
                    id="message"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={message}
                    onChange={(event) => setMessage && setMessage(event.target.value)}
                    required
                />
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-[#93d9f0] text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Send Message
                </button>
            </div>
        </div>
    )
}

export default Contact
