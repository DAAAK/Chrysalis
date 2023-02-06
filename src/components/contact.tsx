import React from 'react';

const Contact = (): JSX.Element => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-3/4 h-3/4 p-6 mr-20">
                <div className="max-w-sm m-auto">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.549703379306!2d-4.001277485227724!3d5.332693396131663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb9b4095e7f1%3A0xad1cca628972695a!2sInstitut%20Chrysalis!5e0!3m2!1sfr!2sus!4v1675725069927!5m2!1sfr!2sus"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            <div className=" p-6 ">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <p className="mb-5">
                    <p className="font-bold text-lg mb-2">
                        Adresse:
                    </p>
                    Cocody Val Doyen <br />
                    Abidjan, Côte d'Ivoire
                </p>
                <p className="font-bold text-lg mb-2">
                    Phone:
                </p>
                <p className="mb-5">+225 07 77 19 58 78</p>
                <p className="font-bold text-lg mb-2">
                    Email:
                </p>
                <p className="mb-5"> chrysalislaser@gmail.com</p>
            </div>
        </div>
    );
};

export default Contact;