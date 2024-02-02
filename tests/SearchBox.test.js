
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBox from '../components/SearchBox';
import useStore from '../hooks/store';

jest.mock('axios');
jest.mock('../hooks/store');

describe('SearchBox Component', () => {
  it('renders SearchBox correctly', () => {
    // Estado inicial para useStore
    const initialState = {
        query: '',
        setQuery: jest.fn(),
        setResults: jest.fn(),
    };
  
    // Configuración del mock de useStore
    useStore.mockReturnValue(initialState);

    render(<SearchBox />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('disables the button when the query is less than 3 characters', () => {
    // Estado inicial para useStore
    const initialState = {
        query: '',
        setQuery: jest.fn(),
        setResults: jest.fn(),
    };
  
    // Configuración del mock de useStore
    useStore.mockReturnValue(initialState);

    render(<SearchBox />);
    expect(screen.getByRole('button')).toBeDisabled();

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'ab' } });
    expect(screen.getByRole('button')).toBeDisabled();
  });
});