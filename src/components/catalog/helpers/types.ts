import { CatalogPokemonData } from '../../types/types';

export type GetCatalofData = {
  elementsPerPage: string;
  currentPage: number;
  setPokemonsCount: (value: number) => void;
  setCatalogPokemonData: (value: CatalogPokemonData) => void;
};
