/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import './styles.css';
import {
  CatalogPokemonData,
  CatalogPokemonContextData,
  CatalogPokemonCommonData,
} from '../types/types';
import Pagination from '../pagination';
import { AppPokemonContext } from '../../pages/mainPage';
import CardList from '../cardList';
import { gettingCommonInfo, gettingInfo } from './helpers/getCatologInfo';

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
  const [catalogPokemonCommonData, setCatalogPokemonCommonData] =
    useState<CatalogPokemonCommonData>({
      data: [],
    });

  useEffect(() => {
    gettingCommonInfo({
      elementsPerPage,
      currentPage,
      setPokemonsCount,
      setCatalogPokemonCommonData,
    });
  }, [elementsPerPage, currentPage]);

  useEffect(() => {
    gettingInfo({ catalogPokemonCommonData, setCatalogPokemonData });
  }, [catalogPokemonCommonData]);

  useEffect(() => {
    if (pokemonsData) {
      if (pokemonsData?.length > 0) {
        setCatalogPokemonData({
          data: pokemonsData,
        });
      } else {
        gettingCommonInfo({
          elementsPerPage,
          currentPage,
          setPokemonsCount,
          setCatalogPokemonCommonData,
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
