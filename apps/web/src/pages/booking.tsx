import { useState, ChangeEvent } from 'react';
import { AuthProvider, Footer, NavBar } from '../components/global';
import { DefaultInput, SelectInput } from '../components/inputs';
import { careCategories } from '../constants';

const Booking = () => {
  const [selectedCareType, setSelectedCareType] = useState('');
  const [selectedFeature, setSelectedFeature] = useState('');

  const [inputDate, setInputDate] = useState('');

  const handleInputDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputDate(event.target.value);
  };

  const [inputTime, setInputTime] = useState('');

  const handleInputTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTime(event.target.value);
  };

  const [inputNumber, setInputNumber] = useState('');

  const handleInputNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputNumber(event.target.value);
  };

  const handleCareTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCareType(event.target.value);
    setSelectedFeature('');
  };

  const handleFeatureChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFeature(event.target.value);
  };

  const handleClick = () => {
    console.log(inputNumber);
    console.log(inputTime);
    console.log(inputDate);
    console.log(selectedCareType);
    console.log(selectedFeature);
  };

  return (
    <AuthProvider>
      <NavBar />
      <div className="min-h-screen flex flex-col items-center justify-center mt-20">
        <div className="bg-gray-150 p-8 border border-gray-250 shadow-lg rounded-lg w-4/6 mb-10">
          <h1 className="text-2xl font-bold mb-6">Prenez rendez-vous</h1>
          <div className="border border-gray-300 rounded-lg p-4">
            <DefaultInput
              label="Choisissez la date"
              type="date"
              value={inputDate}
              handleInputChange={handleInputDateChange}
            />
            <DefaultInput
              label="Choisissez l'heure"
              type="time"
              value={inputTime}
              handleInputChange={handleInputTimeChange}
            />
            <DefaultInput
              label="Nombre de personne(s)"
              type="number"
              value={inputNumber}
              handleInputChange={handleInputNumberChange}
            />

            <SelectInput
              label={careCategories[0].label}
              options={careCategories[0].options}
              value={selectedCareType}
              onChange={handleCareTypeChange}
            />

            {selectedCareType === 'Soins du visage' && (
              <SelectInput
                label="Type de soin"
                options={careCategories[1].options}
                value={selectedFeature}
                onChange={handleFeatureChange}
              />
            )}
            {selectedCareType === 'Soins du corps' && (
              <SelectInput
                label="Type de soin"
                options={careCategories[2].options}
                value={selectedFeature}
                onChange={handleFeatureChange}
              />
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-gradient-to-r from-[#93d9f0] to-green-400 text-black hover:text-white font-semibold py-2 px-4 rounded"
              onClick={handleClick}
            >
              Réservez
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Booking;
