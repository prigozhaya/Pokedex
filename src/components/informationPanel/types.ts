import { PokemonInfo } from '../types/types';

export type GetPokemonInfoArgs = {
  pokemonId?: string;
  setpokemonInfo: (value: PokemonInfo) => void;
};

export type InfoPanelProps = {
  pokemonInfo:PokemonInfo
};
