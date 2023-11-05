import { useState } from 'react';
import Catalog from '../components/catalog';
import Header from '../components/header';
import { PokemonData } from '../components/types/types';
import ElementsPerPageDropDown from '../components/elementsPerPageDropDown';

export default function HomePage() {
  // const dispatch = useAppDispatch();
  // const location = useLocation();

  const [pokemonsData, setPokemonsData] = useState<PokemonData[]>([]);
  const [currPage, setCurrPage] = useState<number>(1);
  const [elementsPerPage, setElementsPerPage] = useState<string>('30');

  function handlePokemonDataChange(data: PokemonData[]) {
    setPokemonsData(data);
    console.log(pokemonsData);
  }
  function handleElementsPerPageChange(value: string) {
    setElementsPerPage(value);
  }

  //   useEffect(() => {
  // console.log(elementsPerPage)
  //   }, [elementsPerPage]);

  // useEffect(() => {
  //   if (fetching) {
  //     dispatch(fetchAllCategories());
  //     dispatch(fetchCatalog(catalogCurrentPage));
  //     setFetching(false);
  //   }
  // }, [fetching, dispatch, setFetching, catalogCurrentPage]);

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
        />
      </div>
    </>
  );
}
