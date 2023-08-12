import { ISelectInput } from '../types';
import { ChangeEvent } from 'react';

export const careCategories: ISelectInput[] = [
  {
    label: 'Catégorie de soin',
    options: [
      {
        value: 'Soins du visage',
        label: 'Soins du visage',
      },
      {
        value: 'Soins du corps',
        label: 'Soins du corps',
      },
      {
        value: 'Maquillage',
        label: 'Maquillage',
      },
      {
        value: 'Onglerie',
        label: 'Onglerie',
      },
      {
        value: 'Soins capillaires',
        label: 'Soins capillaires',
      },
    ],
    value: '',
    onChange: () => {},
  },
  {
    label: 'Type de soin',
    options: [
      {
        value: 'Gamme phytomer / Phytoceane / Vie collection',
        label: 'Gamme phytomer / Phytoceane / Vie collection',
      },
      {
        value: 'Gamme clinique',
        label: 'Gamme clinique',
      },
      {
        value: 'Gamme clarins',
        label: 'Gamme clarins',
      },
      {
        value: 'Soins machines',
        label: 'Soins machines',
      },
    ],
    value: '', // Set the initial selected value here, leave empty for default
    onChange: (event: ChangeEvent<HTMLSelectElement>) => {
      // Replace this with your desired logic for handling feature change
      console.log('Selected Feature:', event.target.value);
    },
  },
  {
    label: 'Type de soin',
    options: [
      {
        value: 'Massage',
        label: 'Massage',
      },
      {
        value: 'Gommage',
        label: 'Gommage',
      },
      {
        value: 'Hammam',
        label: 'Hammam',
      },
      {
        value: 'Electrostimulation',
        label: 'Electrostimulation',
      },
      {
        value: 'Soins mammaires',
        label: 'Soins mammaires',
      },
      {
        value: 'Soins fessier',
        label: 'Soins fessiers',
      },
      {
        value: 'Epilation à la cire',
        label: 'Epilation à la cire',
      },
    ],
    value: '',
    onChange: () => {},
  },
];
