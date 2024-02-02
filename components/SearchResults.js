"use client"
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useStore from '../hooks/store';

const SearchResults = () => {
  const { results } = useStore();
  const router = useRouter();

  const handleItemClick = (itemId) => {
    router.push(`/item/${itemId}`);
  };

  useEffect(() => {
    if (results && results.length === 1) {
      const itemId = results[0].id;
      router.push(`/item/${itemId}`);
    }
  }, [results]);

  if (!results) {
    return <p>Cargando resultados...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Resultados de la búsqueda:</h2>
      {results.length === 0 ? (
        <p className="text-gray-600">No se encontraron resultados.</p>
      ) : (
        <ul className="list-disc pl-6">
          {results.map((result) => (
            <li key={result.id} className="mb-2">
              <a
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => handleItemClick(result.id)}
              >
                {result.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;