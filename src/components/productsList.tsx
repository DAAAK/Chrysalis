import React from 'react';

import { products } from "../constants"

const ProductList = (): JSX.Element => {
  const categories = Array.from(new Set(products.map(p => p.category))).sort();

  return (
    <div className="min-h-screen p-6 flex-col flex items-center">
      <div className="grid grid-cols-3 gap-6">
        {categories.map(category => (
          <div key={category} className="mr-10">
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
    </div>
  );
};

export default ProductList;