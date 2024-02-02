"use client"
import { create } from 'zustand';

const useStore = create((set) => ({
  query: '',
  results: [],
  item: null,
  setQuery: (query) => set({ query }),
  setResults: (results) => set({ results }),
  setItem: (item) => set({ item }),
}));

export default useStore;