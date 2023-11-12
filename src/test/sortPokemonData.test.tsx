import PokemonDataSort from '../components/cardList/helpers/sortData';
import { CatalogPokemonData } from '../components/types/types';

it('should return a sorted array of PokemonData objects based on their id property', () => {
  const catalogPokemonData: CatalogPokemonData = {
    data: [
      { id: 3, name: 'Bulbasaur', img: 'img', types: 'types' },
      { id: 1, name: 'Charmander', img: 'img', types: 'types' },
      { id: 2, name: 'Squirtle', img: 'img', types: 'types' },
    ],
  };

  const sortedData = PokemonDataSort(catalogPokemonData);

  expect(sortedData).toEqual([
    { id: 1, name: 'Charmander', img: 'img', types: 'types' },
    { id: 2, name: 'Squirtle', img: 'img', types: 'types' },
    { id: 3, name: 'Bulbasaur', img: 'img', types: 'types' },
  ]);
});
