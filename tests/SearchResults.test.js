import React from 'react';
import { render, screen } from '@testing-library/react';
import useStore from '../hooks/store';
import dynamic from 'next/dynamic';
import '@testing-library/jest-dom'

jest.mock('../hooks/store');
jest.mock('next/router', () => jest.requireActual('next-router-mock'))

const SearchResults = dynamic(() => import('../components/SearchResults'));


describe('SearchResults Component', () => {


  it('displays search results', async () => {
    const initialState = {
        query: '',
        setQuery: jest.fn(),
        setResults: jest.fn(),
    };

    useStore.mockReturnValue(initialState);
    
    render(<SearchResults />);
    
    const loadingElement = await screen.findByText('Cargando resultados...');
    expect(loadingElement).toBeInTheDocument();
  });


  it('displays search results', async () => {

    const initialState = {
      results: [
        { id: '1', name: 'Item 1', description: 'Description 1' },
        { id: '2', name: 'Item 2', description: 'Description 2' },
      ],
    };

    useStore.mockReturnValue(initialState);

    render(<SearchResults />);

    let loadingElement = await screen.findByText('Resultados de la búsqueda:');
    expect(loadingElement).toBeInTheDocument();
  });

});