import { ICategories, IFeatures } from '../types';

export const visage: ICategories = {
  other: [
    { nom: 'Nettoyage express du visage', duration: '15mn', price: 10000 },
  ],
  title: 'Soins du visage',
  categories: [
    {
      nom: 'Gamme phytomer / Phytoceane / Vie collection',
      elements: [
        {
          nom: 'ACNIPUR soin solution imperfections',
          duration: '1h',
          price: 35000,
        },
        { nom: 'HYDRA ORIGINEL soin Eclat uniformisant', price: 35000 },
        {
          nom: 'REVELATION LUMIERE soin Eclat uniformisant',
          duration: '1h',
          price: 40000,
        },
        {
          nom: 'OLIGOFORCE LUMIERE soin teint-taches-rides',
          duration: '1h15',
          price: 60000,
        },
        {
          nom: 'SOIN PIONNIER révélateur de jeunesse',
          duration: '1h15',
          price: 50000,
        },
        {
          nom: 'REGARD PARFAIT soin lissant éclat des yeux',
          duration: '20mn',
          price: 20000,
        },
        {
          nom: 'PHYTOCEANE VOILE DE PURETE soin Purifiant',
          duration: '1h',
          price: 30000,
        },
        {
          nom: 'PHYTOCEANE ECLAT DE LUMIERE soin uniformisant taches',
          duration: '1h',
          price: 35000,
        },
        { nom: 'PEELING ACIDE 20% soin resurfaçant rénovateur', price: 35000 },
        {
          nom: 'RETINOPUR 30% peeling lissant anti-imperfections',
          price: 35000,
        },
      ],
    },
    {
      nom: 'Gamme clinique',
      elements: [
        {
          nom: 'Soins purifiants et clarifiants',
          duration: '1h',
          price: 20000,
        },
        { nom: 'Soins hydratants', duration: '1h', price: 20000 },
        { nom: 'Soins anti-âge à la vitamine C', duration: '1h', price: 25000 },
      ],
    },
    {
      nom: 'Gamme clarins',
      elements: [
        { nom: 'Soin pureté éclat fraicheur', duration: '1h', price: 20000 },
        { nom: 'Soins Unifiant perfecteur', duration: '1h', price: 20000 },
        { nom: 'Soins super hydratant', duration: '1h', price: 20000 },
        { nom: 'Soins lifts', duration: '1h', price: 25000 },
      ],
    },
    {
      nom: 'Soins machines',
      elements: [
        {
          nom: 'Soin hydrafacial purifiant, hydratant, repulpant',
          duration: '1h',
          price: 35000,
        },
        { nom: 'Soin jeunesse microneedling', duration: '1h', price: 35000 },
        {
          nom: 'Soins anti rides par radiofréquence',
          duration: '45mn',
          price: 25000,
        },
        { nom: 'Lift visage', duration: '30mn', price: 20000 },
        { nom: 'Luminothérapie LED visage', duration: '30mn', price: 15000 },
      ],
    },
  ],
};

export const corps: ICategories = {
  title: 'Soins du corps',
  categories: [
    {
      nom: 'Massage',
      elements: [
        { nom: 'Massage relaxant', duration: '45mn', price: 20000 },

        { nom: 'Massage aux pierres chaudes', duration: '1h15', price: 30000 },
        { nom: 'Massage aux pierres froides', duration: '1h15', price: 30000 },
      ],
    },
    {
      nom: 'Gommage',
      elements: [
        { nom: 'Gommage purifiant', duration: '20mn', price: 15000 },
        { nom: 'Gommage ECLAT', duration: '20mn', price: 25000 },
      ],
    },
    {
      nom: 'Hammam',
      elements: [
        { nom: 'Hammam DETOX', duration: '30mn', price: 20000 },
        {
          nom: 'Hammam et gommage purifiant au savon noir',
          duration: '30mn',
          price: 30000,
        },
        { nom: 'Hammam et gommage ECLAT', duration: '30mn', price: 40000 },
        {
          nom: 'Hammam, gommage purifiant, masque corporel',
          duration: '1h',
          price: 40000,
        },
        {
          nom: 'Hammam, gommage ECLAT, masque corporel',
          duration: '1h',
          price: 50000,
        },
      ],
    },
    {
      nom: 'Sauna dôme/Couverture chauffante',
      elements: [
        {
          nom: 'Thermosudation par sauna dôme',
          duration: '30mn',
          price: 20000,
        },
      ],
    },

    {
      nom: 'Soins amincissants et sculptants',
      elements: [
        {
          nom: 'Lipomassage lasers Combinés v10',
          price: 35000,
        },
        { nom: 'Lipomassage large Roller', price: 25000 },
        {
          nom: 'Lipocavitation',
          price: 25000,
        },
        {
          nom: 'Vaccum radiofréquence',
          price: 25000,
        },
        {
          nom: 'Radiofréquence Laser (anti cellulite)',
          price: 25000,
        },
        {
          nom: 'Laser froid de bas débit',
          price: 25000,
        },
        {
          nom: 'CRYOLIPOLYSE traitement par zone',
          price: 100000,
        },
        {
          nom: 'Protocole CASMARA (amincissant ou raffermissant) ',
          price: 35000,
        },
      ],
    },
    {
      nom: 'Electrostimulation',
      elements: [
        {
          nom: 'EMSCULPT',
          price: 75000,
        },
      ],
    },
    {
      nom: 'Soins mammaires',
      elements: [
        { nom: 'Raffermissement mammaire', price: 20000 },
        { nom: 'Développement mammaire', price: 20000 },
      ],
    },
    {
      nom: 'Soins fessiers',
      elements: [
        {
          nom: 'Massage colombien',
          price: 20000,
        },
        { nom: 'Lifting colombien', price: 20000 },
      ],
    },
    {
      nom: 'Epilation à la cire',
      elements: [
        {
          nom: 'Lèvres',
          price: 3000,
        },
        { nom: 'Menton', price: 3000 },
        { nom: 'Sourcils', price: 5000 },
        { nom: 'Visage', price: 10000 },
        { nom: 'Dos', price: 10000 },
        { nom: 'Torse', price: 10000 },
        { nom: 'Aisselles', price: 5000 },
        { nom: 'Maillot', price: 10000 },
        { nom: 'Maillot intégral', price: 15000 },
        { nom: 'Jambes entières', price: 15000 },
        { nom: 'Demi jambe', price: 10000 },
        { nom: 'Corps intégral', price: 35000 },
      ],
    },
  ],
};

export const makeUp: IFeatures = {
  title: 'Maquillage',
  elements: [
    {
      nom: 'Make-up Flash',
      price: 5000,
    },
    { nom: 'Make-up cérémonies', price: 15000 },
    {
      nom: 'Make-up mariage',
      price: 50000,
    },
  ],
};

export const onglerie: IFeatures = {
  title: 'Onglerie',
  elements: [
    {
      nom: 'Mise en beauté',
      price: 3000,
    },
    { nom: 'Manucure', price: 5000 },
    { nom: 'Pédicure', price: 7000 },
    { nom: 'Manucure et pédicure', price: 7000 },
    { nom: 'Pose de vernis permanent', price: 7000 },
    { nom: 'Pose capsules', price: 5000 },
    { nom: 'Gainage sur ongles naturels', price: 10000 },
    { nom: 'Pose de gel avec capsules', price: 15000 },
    { nom: 'Remplissage gel', price: 10000 },
    { nom: 'Gainage Acrygel sur ongles naturels', price: 10000 },
    { nom: 'Pose Acrygel avec capsules', price: 15000 },
    { nom: 'Remplissage Acrygel', price: 10000 },
    { nom: 'Réparation par ongle', price: 2000 },
    { nom: 'Nail Art par ongle', price: 1000 },
  ],
};

export const coiffure: IFeatures = {
  title: 'Soins capillaires',
  elements: [
    { nom: 'Shampoing', price: 3000 },
    { nom: 'Shampoing et brushing', price: 5000 },
    { nom: 'Mise en forme lisseur', price: 4000 },
    { nom: 'Défrisage (Produits clientes)', price: 7000 },
    { nom: 'Défrisage Chrysalis', price: 15000 },
    { nom: "Bain d'huile (ou bain de crème)", price: 8000 },
    { nom: 'Teinture', price: 8000 },
    { nom: 'Tissage', price: 8000 },
    { nom: 'Twists', price: 7000 },
    { nom: 'Tresses', price: 10000 },
    { nom: 'Coiffures mariage', price: 25000 },
    { nom: 'Consultation coiffure médicale', price: 20000 },
    { nom: 'Séances coiffure médicale', price: 10000 },
    { nom: 'Kit produits complet coiffure médicale', price: 100000 },
  ],
};
