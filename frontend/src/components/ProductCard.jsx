
import React from 'react';

function ProductCard({ product }) {
  return (    
  <div className='bg-white shadow-lg rounded-lg p-4 m-2 transition-transform transform hover:scale-105'>
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-fit rounded-md mb-2" 
      />
      <h4 className='text-lg font-semibold'>{product.name}</h4>
      <h5 className='text-sm text-gray-600'>Category: {product.category}</h5>
      <h5 className='text-lg font-bold text-[#49251c] '>${product.price}</h5>
    </div>
  );
}

export default ProductCard;