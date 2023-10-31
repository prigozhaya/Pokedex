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

export type PokemonCataloghProps = { pokemonsData: PokemonData[] };

export type PokemonCardProps = { pokemonsCard: PokemonData; key: number };

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
