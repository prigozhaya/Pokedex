import { ChangeEvent, useState } from 'react';
import './styles.css';
import { setSearchValue } from '../../store/slices/searchSlice';
import { useAppDispatch } from '../../store/hooks';

export default function PokemonSearch() {

  const value = localStorage.getItem('search');
  const [searchInputValue, setSearchInputValue] = useState<string>(value || '');
  const dispatch = useAppDispatch();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchInputValue(e.target.value);
  }

  function saveRequest() {
    localStorage.setItem('search', searchInputValue);
    dispatch(setSearchValue({searchInputValue}));
    // getPokemonInfo({ searchInputValue, setPokemonsData });
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
