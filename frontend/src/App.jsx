import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <div className="App">
        <header 
          style={{ backgroundImage: 'url(/background.jpg)' }} 
          className='bg-cover bg-center h-64 shadow-2xl drop-shadow-[#84635A] flex flex-col items-center justify-center gap-4'
        >
          <h1 className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#49251c] animate-pulse'>
            Product Catalog
          </h1>
          <p className='text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center px-4'>
            Discover Quality, Curated Just for You
          </p>
        </header>

        <main className="flex flex-col items-center justify-center min-h-screen bg-[#d4ceca93]">
          <Routes>
            <Route path="/" element={<ProductList />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;