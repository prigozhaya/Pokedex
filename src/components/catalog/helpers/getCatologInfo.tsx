import { PokemonData, PokemonUrlData, PokemonTypes } from '../../types/types';
import { GetCatalofCommonData, GetCatalofData } from './types';

const API_LINK = 'https://pokeapi.co/api/v2/pokemon/';

export async function gettingCommonInfo({
  elementsPerPage,
  currentPage,
  setPokemonsCount,
  setCatalogPokemonCommonData,
}: GetCatalofCommonData) {
  const apiLink = `${API_LINK}?limit=${elementsPerPage}&offset=${
    (currentPage - 1) * Number(elementsPerPage)
  }`;
  const apiUrl = await fetch(apiLink);
  const searchData = await apiUrl.json();
    setCatalogPokemonCommonData(searchData.results);
    setPokemonsCount(searchData.count);
}


export async function gettingInfo({
  catalogPokemonCommonData,
  setCatalogPokemonData
}: GetCatalofData) {
const ApiPokemonsData: PokemonData[] = [];
  const foundData = new Promise<PokemonData[]>((resolve) => {
    catalogPokemonCommonData.data.forEach(
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