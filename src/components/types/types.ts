import { ErrorInfo } from 'react';

export type PokemonUrlData = {
  name: string;
  url: string;
};

export type PokemonTypes = {
  type: { name: string };
};

export type PokemonCardProps = { pokemonName: string; key: string };

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
  abilities: PokemonAbilities[];
  height: number;
  weight: number;
};

export type PokemonResponse = {
  abilities: PokemonAbilities[];
  id: number;
  sprites: {
    front_default: string;
  };
  name: string;
  types: PokemonTypes[];
  height: number;
  weight: number;
};

export type PokemonsListResponse = {
  count: number;
  results: PokemonUrlData[];
};

export type PokemonAbilities = {
  ability: { name: string };
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

export type FetchPokemonList = {
  elementsPerPage: string;
  currentPage: number;
};
