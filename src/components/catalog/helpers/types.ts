import {
  CatalogPokemonCommonData,
  CatalogPokemonData,
} from '../../types/types';

export type GetCatalofData = {
  catalogPokemonCommonData: CatalogPokemonCommonData;
  setCatalogPokemonData: (value: CatalogPokemonData) => void;
};

export type GetCatalofCommonData = {
  elementsPerPage: string;
  currentPage: number;
  setPokemonsCount: (value: number) => void;
  setCatalogPokemonCommonData: (value: CatalogPokemonCommonData) => void;
};
