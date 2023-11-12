import { renderHook } from '@testing-library/react';
import GetSearchResult from '../components/cardList/helpers/searchResult';
import { AppPokemonContext } from '../pages/mainPage';

it('should return a string with the search query when searchValue is not an empty string', () => {
  const { result } = renderHook(() => GetSearchResult(), {
    wrapper: ({ children }) => (
      <AppPokemonContext.Provider
        value={{
          searchValue: 'pikachu',
          setSearchValue: () => {},
          pokemonsData: [],
          setPokemonsData: () => {},
          currentPage: 1,
          setCurrentPage: () => {},
          elementsPerPage: '30',
          setElementsPerPage: () => {},
        }}
      >
        {children}
      </AppPokemonContext.Provider>
    ),
  });
  expect(result.current).toBe('Searching results for the query "pikachu"');
});
