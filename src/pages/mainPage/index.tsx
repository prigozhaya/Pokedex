import { createContext, useState } from 'react';
import Catalog from '../../components/catalog';
import Header from '../../components/header';
import {
  PokemonData,
  AppPokemonContextData,
} from '../../components/types/types';
import ElementsPerPageDropDown from '../../components/elementsPerPageDropDown';
import { Outlet, useParams } from 'react-router-dom';

export const AppPokemonContext = createContext<AppPokemonContextData>({
  searchValue: '',
  setSearchValue: () => {},
  pokemonsData: [],
  setPokemonsData: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  elementsPerPage: '30',
  setElementsPerPage: () => {},
});

export default function HomePage() {
  const params = useParams();
  const currPage = params?.pageId ? Number(params?.pageId) : 1;
  const [pokemonsData, setPokemonsData] = useState<PokemonData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(currPage);
  const [elementsPerPage, setElementsPerPage] = useState<string>('30');
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <>
      <AppPokemonContext.Provider
        value={{
          searchValue,
          setSearchValue,
          pokemonsData,
          setPokemonsData,
          currentPage,
          setCurrentPage,
          elementsPerPage,
          setElementsPerPage,
        }}
      >
        <Header />
        <div className="pageContainer">
          <ElementsPerPageDropDown />
          <Catalog />
          <Outlet />
        </div>
      </AppPokemonContext.Provider>
    </>
  );
}
