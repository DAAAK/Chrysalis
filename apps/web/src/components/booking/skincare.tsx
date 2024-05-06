import React from 'react';
import { ChangeEvent, useState } from 'react';
import { careCategories } from '../../constants';
import { DefaultInput, SelectInput } from '../inputs';

const SkinCare = () => {
  const [selectedCareType, setSelectedCareType] = useState('');
  const [selectedFeature, setSelectedFeature] = useState('');
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
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <div className="bg-gray-150 p-8 border border-gray-250 shadow-lg rounded-lg w-4/6 mb-10">
        <h1 className="text-2xl font-bold mb-6">Prenez rendez-vous</h1>
        <div className="border border-gray-300 rounded-lg p-4">
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
      </div>
    </div>
  );
};

export default SkinCare;
