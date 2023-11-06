import { ErrorInfo } from 'react';

export type PokemonUrlData = {
  name: string;
  url: string;
};

export type PokemonTypes = {
  type: { name: string };
};

export type PokemonSearchProps = {
  onPokemoDataChange: (data: PokemonData[]) => void;
};

export type PokemonSelectProps = {
  onElementsPerPage: (value: string) => void;
  setCurrentPage: (value: number) => void;
};

export type PokemonCataloghProps = {
  elementsPerPage: string;
  setCurrentPage: (value: number) => void;
  currentPage: number;
  pokemonsData?: PokemonData[];
};

export type PokemonCardProps = { pokemonsCard: PokemonData; key: number };

export type PaginationProps = {
  pokemosCount: number;
  currentPage: number;
  pokemosPerPage: string;
  setCurrentPage: (value: number) => void;
};

export type PokemonSearchState = {
  searchValue: string;
};

export type PokemonCatalogState = {
  pokemonsData: PokemonData[];
};

export type ErrorState = {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

export type PokemonData = {
  id: number;
  img: string;
  name: string;
  types: string;
};

export type PokemonAbilities = {
  ability: { name: string };
  is_hidden: boolean;
};

export type PokemonInfo = {
  id: number;
  img: string;
  name: string;
  types: string;
  abilities: PokemonAbilities[];
  height: number;
  weight: number;
};

export type CatalogPokemonData = {
  data: PokemonData[];
};
