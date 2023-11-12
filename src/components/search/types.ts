import { PokemonData } from '../types/types';

export type GetPokemonSerchInfo = {
  searchInputValue: string;
  setPokemonsData: (value: PokemonData[]) => void;
};
