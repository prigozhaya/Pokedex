/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import './styles.css';
import { CatalogPokemonData, CatalogPokemonContextData } from '../types/types';
import Pagination from '../pagination';
import { AppPokemonContext } from '../../pages/mainPage';
import gettingInfo from './helpers/getCatologInfo';
import CardList from '../cardList';

export const CatalogPokemonContext = createContext<CatalogPokemonContextData>({
  pokemonsCount: 1292,
});

export default function Catalog() {
  const { elementsPerPage, currentPage, pokemonsData } =
    useContext(AppPokemonContext);
  const [pokemonsCount, setPokemonsCount] = useState<number>(1292);
  const [catalogPokemonData, setCatalogPokemonData] =
    useState<CatalogPokemonData>({
      data: [],
    });

  useEffect(() => {
    gettingInfo({
      elementsPerPage,
      currentPage,
      setPokemonsCount,
      setCatalogPokemonData,
    });
  }, [elementsPerPage, currentPage]);

  useEffect(() => {
    if (pokemonsData) {
      if (pokemonsData?.length > 0) {
        setCatalogPokemonData({
          data: pokemonsData,
        });
      } else {
        gettingInfo({
          elementsPerPage,
          currentPage,
          setPokemonsCount,
          setCatalogPokemonData,
        });
      }
    }
  }, [pokemonsData]);

  return (
    <CatalogPokemonContext.Provider value={{ pokemonsCount }}>
      <CardList catalogPokemonData={catalogPokemonData} />
      <Pagination />
    </CatalogPokemonContext.Provider>
  );
}
