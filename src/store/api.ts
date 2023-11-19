import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  FetchPokemonList,
  PokemonData,
  PokemonResponse,
  PokemonTypes,
  PokemonUrlData,
  PokemonsListResponse,
} from '../components/types/types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<PokemonData, string>({
      query: (name) => `pokemon/${name}`,
      transformResponse(response: PokemonResponse) {
        return {
          id: response.id,
          img: response.sprites.front_default,
          name: response.name,
          types: response.types
            .map((el: PokemonTypes) => el.type.name)
            .join('/'),
          abilities: response.abilities,
          height: response.height,
          weight: response.weight,
        } as PokemonData;
      },
    }),
    getSearchPokemonData: builder.query<PokemonUrlData[], string>({
      query: (name) => `pokemon/${name}`,
      transformResponse(response: PokemonResponse) {
        return [
          {
            name: response.name,
            url: '1',
          },
        ] as PokemonUrlData[];
      },
    }),
    getPokemonList: builder.query<PokemonsListResponse, FetchPokemonList>({
      query: ({ elementsPerPage, currentPage }) =>
        `pokemon/?limit=${elementsPerPage}&offset=${
          (currentPage - 1) * Number(elementsPerPage)
        }`,
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  useGetPokemonListQuery,
  useGetSearchPokemonDataQuery,
} = pokemonApi;
