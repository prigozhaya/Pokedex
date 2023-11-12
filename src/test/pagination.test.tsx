import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CatalogPokemonContext } from '../components/catalog';
import Pagination from '../components/pagination';
import { AppPokemonContext } from '../pages/mainPage';

test('component updates URL query parameter when pagination buttons are clicked', () => {
  const setCurrentPage = vi.fn();

  const { getByText } = render(
    <BrowserRouter>
      <AppPokemonContext.Provider
        value={{
          setCurrentPage,
          pokemonsData: [],
          setPokemonsData: () => {},
          currentPage: 1,
          elementsPerPage: '30',
          setElementsPerPage: () => {},
        }}
      >
        <CatalogPokemonContext.Provider value={{ pokemonsCount: 1292 }}>
          <Pagination />
        </CatalogPokemonContext.Provider>
      </AppPokemonContext.Provider>
    </BrowserRouter>
  );

  const nextButton = getByText('▸');
  fireEvent.click(nextButton);

  expect(setCurrentPage).toHaveBeenCalledWith(2);
  expect(window.location.pathname).toBe('/catalog/2');

  const prevButton = getByText('◂');
  fireEvent.click(prevButton);

  expect(setCurrentPage).toHaveBeenCalledWith(1);
  expect(window.location.pathname).toBe('/catalog/1');
});
