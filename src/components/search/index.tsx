import { ChangeEvent, useState } from 'react';
import './styles.css';
import { PokemonSearchProps, PokemonTypes } from '../types/types';

export default function PokemonSearch(searchProps: PokemonSearchProps) {
  const value = localStorage.getItem('search');
  const [searchValue, setSearchValue] = useState<string>(value || '');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function saveRequest() {
    localStorage.setItem('search', searchValue);
    getPokemonInfo();
  }

  async function getPokemonInfo() {
    const API_LINK = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;
    try {
      if (searchValue === '') {
        searchProps.onPokemoDataChange([]);
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
        searchProps.onPokemoDataChange(prepareData);
      }
    } catch (e) {
      alert('Pokemon not found (ฅ• . •ฅ)');
    }
  }

  return (
    <div className="searcWrapper">
      <button className="searchButton" onClick={saveRequest}></button>
      <div className="SearchWrapper">
        <input
          type="text"
          className="SearchInput"
          onChange={handleChange}
          value={searchValue}
        />
      </div>
    </div>
  );
}
