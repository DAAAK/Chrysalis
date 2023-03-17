import React from "react";
import { Form, NavBar, Footer } from "../components";

const Contacts = () => {
  return (
    <div className="overflow-hidden ">
      <NavBar />
      <div className="min-h-screen flex flex-col mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
          <div className="flex-1 md:w-1/2 mb-10">
            <Form
              formType="contact"
              handleSubmit={function (event: React.FormEvent<HTMLFormElement>): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <iframe
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.549703379306!2d-4.001277485227724!3d5.332693396131663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb9b4095e7f1%3A0xad1cca628972695a!2sInstitut%20Chrysalis!5e0!3m2!1sfr!2sus!4v1675725069927!5m2!1sfr!2sus"
              className="md:absolute h-96 md:h-3/6 md:w-3/6 md:mr-16"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-16">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center bg-[#93d9f0] rounded-full w-12 h-12 mt-2">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                className="w-6 hover:text-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                ></path>
              </svg>
            </div>
            <div className="flex-row flex">
              <p className="text-center mt-2 font-bold">Phone:</p>
              <p className="text-center mt-2 ml-2">+225 07 77 19 58 78</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center bg-[#93d9f0] rounded-full w-12 h-12 mt-2">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                className="w-6 hover:text-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
            </div>
            <div className="flex-row flex">
              <p className="text-center mt-2 font-bold">Email:</p>
              <p className="text-center mt-2 ml-2">chrysalislaser@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center bg-[#93d9f0] rounded-full w-12 h-12 mt-6">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="home"
                className="w-6 hover:text-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                ></path>
              </svg>
            </div>
            <div className="flex-row flex">
              <p className="text-center mt-3 font-bold">Address:</p>
              <p className="text-center mt-3 ml-2">
                Cocody Val Doyen <br />
                Abidjan, Côte d'Ivoire
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
