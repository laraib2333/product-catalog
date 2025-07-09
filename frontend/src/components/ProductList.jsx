import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/products`
        );
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = filter === 'All'
    ? products
    : products.filter(p => p.category === filter);

  if (loading) return <div className="text-center py-8">Loading products...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <h2 className='text-2xl font-bold mb-4'>Filter by Category:</h2>
      <select 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)}
        className='border border-gray-300 shadow-md hover:shadow-lg rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#84635A] text-[#35150c] font-semibold bg-[#D6D0CC] hover:bg-[#8a827b] transition duration-300'
      >
        <option>All</option>
        <option>Electronics</option>
        <option>Furniture</option>
        <option>Books</option>
      </select>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;