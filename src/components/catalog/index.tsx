/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './styles.css';
import {
  PokemonData,
  PokemonTypes,
  PokemonUrlData,
  CatalogPokemonData,
  PokemonCataloghProps,
} from '../types/types';
import PokedexCard from '../card';
import Pagination from '../pagination';

const API_LINK = 'https://pokeapi.co/api/v2/pokemon/';

export default function Catalog(catalogProps: PokemonCataloghProps) {
  const [pokemonsCount, setPokemonsCount] = useState<number>(1292);
  const [pokemonsData, setPokemonsData] = useState<CatalogPokemonData>({
    data: [],
  });

  const apiLink = `${API_LINK}?limit=${catalogProps.elementsPerPage}&offset=${
    (catalogProps.currentPage - 1) * Number(catalogProps.elementsPerPage)
  }`;

  async function gettingInfo() {
    const pokemonsData: PokemonData[] = [];
    const apiUrl = await fetch(apiLink);
    const searchData = await apiUrl.json();
    const foundData = new Promise<PokemonData[]>((resolve) => {
      setPokemonsCount(searchData.count);
      searchData.results.forEach(
        async (
          element: PokemonUrlData,
          index: number,
          arr: PokemonUrlData[]
        ) => {
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
          pokemonsData.push(prepareData);
          if (index === arr.length - 1) {
            resolve(pokemonsData);
          }
        }
      );
    });

    foundData.then((data) => {
      setPokemonsData({ data });
    });
  }
  useEffect(() => {
    gettingInfo();
  }, [catalogProps.elementsPerPage, catalogProps.currentPage]);

  const renderPokemonsData = pokemonsData.data.sort((a, b) =>
    a.id > b.id ? 1 : -1
  );

  return (
    <div>
      <div className="catalogWrapper">
        {renderPokemonsData.map((pokemon: PokemonData) => (
          <PokedexCard pokemonsCard={pokemon} key={pokemon.id} />
        ))}
      </div>
      <Pagination
        pokemosCount={pokemonsCount}
        currentPage={catalogProps.currentPage}
        pokemosPerPage={catalogProps.elementsPerPage}
        setCurrentPage={catalogProps.setCurrentPage}
      />
    </div>
  );
}
