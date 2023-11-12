import { PokemonTypes } from '../../types/types';
import { GetPokemonSerchInfo } from '../types';

export async function getPokemonInfo({
  searchInputValue,
  setPokemonsData,
}: GetPokemonSerchInfo) {
  const API_LINK = `https://pokeapi.co/api/v2/pokemon/${searchInputValue}`;
  try {
    if (searchInputValue === '') {
      setPokemonsData([]);
    } else {
      const apiUrl = await fetch(API_LINK);
      const pokemonInfo = await apiUrl.json();
      const pokemonTypes = pokemonInfo.types
        .map((el: PokemonTypes) => el.type.name)
        .join('/');
      const prepareData = [
        {
          id: pokemonInfo.id,
          img: pokemonInfo.sprites.front_default,
          name: pokemonInfo.name,
          types: pokemonTypes,
        },
      ];
      setPokemonsData(prepareData);
    }
  } catch (e) {
    alert('Pokemon not found (ฅ• . •ฅ)');
  }
}
