export interface ICategory {
  nom: string;
  elements: {
    nom: string;
    duration?: string;
    price: number;
  }[];
}

export interface ICategories {
  other?: { nom: string; duration?: string; price: number }[];
  title: string;
  categories?: ICategory[];
}

interface IFeatures {
  title: string;
  elements: {
    nom: string;
    duration?: string;
    price: number;
  }[];
}
