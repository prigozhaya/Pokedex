import { ChangeEvent, useContext, useState } from 'react';
import './styles.css';
import { AppPokemonContext } from '../../pages/mainPage';
import { getPokemonInfo } from './helpers/getSearchData';

export default function PokemonSearch() {
  const value = localStorage.getItem('search');
  const [searchInputValue, setSearchInputValue] = useState<string>(value || '');
  const { setPokemonsData, setSearchValue } = useContext(AppPokemonContext);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchInputValue(e.target.value);
  }

  function saveRequest() {
    localStorage.setItem('search', searchInputValue);
    setSearchValue(searchInputValue);
    getPokemonInfo({ searchInputValue, setPokemonsData });
  }

  return (
    <div className="searcWrapper">
      <button className="searchButton" onClick={saveRequest}></button>
      <div className="SearchWrapper">
        <input
          type="text"
          className="SearchInput"
          onChange={handleChange}
          value={searchInputValue}
        />
      </div>
    </div>
  );
}
