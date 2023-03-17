import React from "react";
import { Form, NavBar, Footer } from "../components";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              <FontAwesomeIcon icon={faPhone} size="2x" color="white" />
            </div>
            <div className="flex-row flex">
              <p className="text-center mt-2 font-bold">Phone:</p>
              <p className="text-center mt-2 ml-2">+225 07 77 19 58 78</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center bg-[#93d9f0] rounded-full w-12 h-12 mt-2">
              <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
            </div>
            <div className="flex-row flex">
              <p className="text-center mt-2 font-bold">Email:</p>
              <p className="text-center mt-2 ml-2">chrysalislaser@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center bg-[#93d9f0] rounded-full w-12 h-12 mt-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="white" />
            </div>
            <div className="flex-row flex">
              <p className="text-center mt-6 font-bold">Address:</p>

              <p className="text-center ml-2 mt-6">
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
