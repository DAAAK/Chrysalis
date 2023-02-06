interface Product {
    id: number;
    name: string;
    category: string;
}

export const products: Product[] = [
    { id: 1, name: 'Product 1', category: 'Soins du visage et du corps' },
    { id: 2, name: 'Product 2', category: 'Soins du visage et du corps' },
    { id: 3, name: 'Product 3', category: 'Soins capillaires' },
    { id: 4, name: 'Product 4', category: 'Soins capillaires' },
    { id: 5, name: 'Product 5', category: 'Maquillage' },
    { id: 6, name: 'Product 6', category: 'Maquillage' },
    { id: 7, name: 'Product 7', category: 'Soins amincissants et sculptants' },
    { id: 8, name: 'Product 8', category: 'Soins amincissants et sculptants' },
    { id: 9, name: 'Product 9', category: 'Onglerie' },
    { id: 10, name: 'Product 10', category: 'Onglerie' },
];

export const features = [
    {
        id: "feature-1",
        // icon: star,
        title: "?",
        content:
            "Des soins exclusifs et innovants adaptés à vos objectifs santé & beauté.",
    },
    {
        id: "feature-2",
        // icon: shield,
        title: "100% Secured",
        content:
            "We take proactive steps make sure your information and transactions are secure.",
    },
    {
        id: "feature-3",
        // icon: send,
        title: "Balance Transfer",
        content:
            "A balance transfer credit card can save you a lot of money in interest charges.",
    },
];