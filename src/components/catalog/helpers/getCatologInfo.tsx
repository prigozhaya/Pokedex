import { PokemonData, PokemonUrlData, PokemonTypes } from '../../types/types';
import { GetCatalofData } from './types';

const API_LINK = 'https://pokeapi.co/api/v2/pokemon/';

export default async function gettingInfo({
  elementsPerPage,
  currentPage,
  setPokemonsCount,
  setCatalogPokemonData,
}: GetCatalofData) {
  const apiLink = `${API_LINK}?limit=${elementsPerPage}&offset=${
    (currentPage - 1) * Number(elementsPerPage)
  }`;
  const ApiPokemonsData: PokemonData[] = [];
  const apiUrl = await fetch(apiLink);
  const searchData = await apiUrl.json();
  const foundData = new Promise<PokemonData[]>((resolve) => {
    setPokemonsCount(searchData.count);
    searchData.results.forEach(
      async (element: PokemonUrlData, index: number, arr: PokemonUrlData[]) => {
        const apiUrl = await fetch(element.url);
        const searchData = await apiUrl.json();
        const pokemonTypes = searchData.types
          .map((el: PokemonTypes) => el.type.name)
          .join('/');
        const prepareData = {
          id: searchData.id,
          img: searchData.sprites.front_default,
          name: searchData.name,
          types: pokemonTypes,
        };
        ApiPokemonsData.push(prepareData);
        if (index === arr.length - 1) {
          resolve(ApiPokemonsData);
        }
      }
    );
  });
  foundData.then((data) => {
    setCatalogPokemonData({ data });
  });
}
