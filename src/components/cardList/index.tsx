/* eslint-disable react-hooks/exhaustive-deps */
import {
  useGetPokemonListQuery,
  useGetSearchPokemonDataQuery,
} from '../../store/api';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import PokedexCard from '../card';
import { PokemonUrlData } from '../types/types';
import getSearchResult from './helpers/searchResult';
import { setSearchValue } from '../../store/slices/searchSlice';
import {
  setCurrentPage,
  setPokemonsCount,
} from '../../store/slices/metaInfoSlice';
import { useEffect } from 'react';
import { setCatalogLoadingStatus } from '../../store/slices/loadingStatusSlice';
import { useNavigate } from 'react-router-dom';

export default function CardList() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPage = useAppSelector((state) => state.metaInfo.currentPage);
  const searchValue = useAppSelector((state) => state.searchValue.searchValue);
  const searchResult = getSearchResult(searchValue);
  const elementsPerPage = useAppSelector(
    (state) => state.metaInfo.elementsPerPage
  );
  const { data } = useGetPokemonListQuery({ elementsPerPage, currentPage });
  const {
    data: searchData = [],
    error,
    isLoading,
  } = useGetSearchPokemonDataQuery(searchValue);
  const renderPokemonsData =
    searchData.length > 0 && searchData[0].name
      ? searchData
      : data?.results || ([] as PokemonUrlData[]);
  const emptyCardList =
    renderPokemonsData.length === 0 ? `... it seems the pokedex is empty` : '';

  useEffect(() => {
    if (error && searchValue !== '') {
      alert('Pokemon not found (ฅ• . •ฅ)');
      dispatch(setSearchValue({ searchInputValue: '' }));
    }
  }, [error]);

  useEffect(() => {
    dispatch(setCatalogLoadingStatus({ catalogLoadingStatus: isLoading }));
  }, [isLoading]);

  useEffect(() => {
    if (searchData.length > 0 && searchData[0].name) {
      dispatch(setPokemonsCount({ pokemonsCount: 1 }));
      dispatch(setCurrentPage({ currentPage: 1 }));
      navigate('..');
    } else {
      dispatch(setPokemonsCount({ pokemonsCount: data?.count || 1292 }));
    }
  }, [searchData]);

  return (
    <div>
      <p className="catalogMsg">{searchResult}</p>
      <div className="catalogWrapper">
        <p className="catalogMsg">{emptyCardList}</p>
        {renderPokemonsData.map((pokemon: PokemonUrlData) => (
          <PokedexCard pokemonName={pokemon.name} key={pokemon.url} />
        ))}
      </div>
    </div>
  );
}
