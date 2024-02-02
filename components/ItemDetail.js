"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import useStore from '../hooks/store';

const ItemDetail = ({ id }) => {
  const { item, setItem } = useStore();
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`/api/items/${id}`);
        setItem(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching item details:', error);
        if (error.response && error.response.status === 404) {
          setError('El ítem no fue encontrado.');
        } else {
          setError('Hubo un error al cargar los detalles del ítem. Por favor, inténtalo de nuevo.');
        }
      }
    };

    if (id) {
      fetchItem();
    }
  }, [id, setItem]);

  return (
    <div className="container mx-auto p-4">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          {item ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">Detalles del ítem:</h2>
              <p className="text-gray-700">ID: {item.item.id}</p>
              <p className="text-gray-700">Nombre: {item.item.text}</p>
            </div>
          ) : (
            <p className="text-gray-700">Cargando...</p>
          )}
        </>
      )}
    </div>
  );
};

export default ItemDetail;