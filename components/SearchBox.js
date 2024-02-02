"use client"
import React, { useState } from 'react';
import useStore from '../hooks/store';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
  const { query, setQuery, setResults } = useStore();
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/items?q=${query}`);
      setResults(response.data.listItem);
      router.push(`/item`);
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
      if (error.response && error.response.status === 404) {
        setError('No se encontraron resultados. Por favor, prueba con otra búsqueda.');
      } else {
        setError('Hubo un error al realizar la búsqueda. Por favor, inténtalo de nuevo.');
      }
    }
  };

  const isSearchButtonDisabled = query.length < 3;

  return (
    <div className="flex items-center justify-center my-4">
      <input type="text" 
        value={query} onChange={(e) => setQuery(e.target.value)}
        className="border p-2 mr-2" />
      <button onClick={handleSearch} 
      disabled={isSearchButtonDisabled}
      className={`bg-blue-500 text-white p-2 ${isSearchButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}>
        Buscar
      </button>
      {error && <p className="text-red-500 ml-2">{error}</p>} 
    </div>
  );
};

export default SearchBox;