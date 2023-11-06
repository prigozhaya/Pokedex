import { useState } from 'react';
import Catalog from '../../components/catalog';
import Header from '../../components/header';
import { PokemonData } from '../../components/types/types';
import ElementsPerPageDropDown from '../../components/elementsPerPageDropDown';
import { Outlet, useParams } from 'react-router-dom';

export default function HomePage() {
  const params = useParams();
  const currentPage = params?.pageId ? Number(params?.pageId) : 1;

  const [pokemonsData, setPokemonsData] = useState<PokemonData[]>([]);
  const [currPage, setCurrPage] = useState<number>(currentPage);
  const [elementsPerPage, setElementsPerPage] = useState<string>('30');

  function handlePokemonDataChange(data: PokemonData[]) {
    setPokemonsData(data);
  }
  function handleElementsPerPageChange(value: string) {
    setElementsPerPage(value);
  }

  return (
    <>
      <Header onPokemoDataChange={handlePokemonDataChange} />
      <div className="pageContainer">
        <ElementsPerPageDropDown
          onElementsPerPage={handleElementsPerPageChange}
          setCurrentPage={setCurrPage}
        />
        <Catalog
          elementsPerPage={elementsPerPage}
          setCurrentPage={setCurrPage}
          currentPage={currPage}
          pokemonsData={pokemonsData}
        />
        <Outlet />
      </div>
    </>
  );
}
