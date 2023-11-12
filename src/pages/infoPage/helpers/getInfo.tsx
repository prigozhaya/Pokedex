import { PokemonTypes } from '../../../components/types/types';
import { GetPokemonInfoArgs } from '../../../components/informationPanel/types';

export async function getPokemonInfo({
  pokemonId,
  setpokemonInfo,
}: GetPokemonInfoArgs) {
  const API_LINK = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const apiUrl = await fetch(API_LINK);
  const pokemonInfo = await apiUrl.json();
  const pokemonTypes = pokemonInfo.types
    .map((el: PokemonTypes) => el.type.name)
    .join('/');
  const prepareData = {
    id: pokemonInfo.id,
    img: pokemonInfo.sprites.front_default,
    name: pokemonInfo.name,
    types: pokemonTypes,
    abilities: pokemonInfo.abilities,
    height: pokemonInfo.height,
    weight: pokemonInfo.weight,
  };
  setpokemonInfo(prepareData);
}
