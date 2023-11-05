import { ChangeEvent, useState } from 'react';
import './styles.css';
// import { PokemonSearchProps } from '../types/types';

export default function PokemonSearch() {
  const value = localStorage.getItem('search');
  const [searchValue, setSearchValue] = useState<string>(value || '');

  function saveRequest() {
    localStorage.setItem('search', searchValue);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  // useEffect(() => {
  //   setFetching(false);

  //   return () => {
  //     dispatch(resetProducts());
  //   };
  // }, [location, dispatch]);

  // useEffect(() => {
  //   if (fetching) {
  //     dispatch(fetchAllCategories());
  //     dispatch(fetchCatalog(catalogCurrentPage));
  //     setFetching(false);
  //   }
  // }, [fetching, dispatch, setFetching, catalogCurrentPage]);

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
