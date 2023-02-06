import React from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
}

const products: Product[] = [
  { id: 1, name: 'Product 1', category: 'Category 1' },
  { id: 2, name: 'Product 2', category: 'Category 1' },
  { id: 3, name: 'Product 3', category: 'Category 2' },
  { id: 4, name: 'Product 4', category: 'Category 2' },
  { id: 5, name: 'Product 5', category: 'Category 3' },
];

const ProductList = (): JSX.Element => {
  const categories = Array.from(new Set(products.map(p => p.category))).sort();

  return (
    <div className="min-h-screen grid grid-cols-3 gap-6 p-6">
      {categories.map(category => (
        <div key={category}>
          <h2 className="text-xl font-bold mb-4">{category}</h2>
          <ul>
            {products
              .filter(product => product.category === category)
              .map(product => (
                <li key={product.id} className="mb-2">
                  {product.name}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductList;