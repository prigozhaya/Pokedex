import { gettingInfo } from '../components/catalog/helpers/getCatologInfo';

it('should fetch data from API for each element in catalogPokemonCommonData', async () => {
  const catalogPokemonCommonData = {
    data: [
      { name: 'pokemon1', url: 'url1' },
      { name: 'pokemon2', url: 'url2' },
      { name: 'pokemon3', url: 'url3' },
    ],
  };
  const pokemonInfo = {
    id: 25,
    sprites: { front_default: 'pikachu.png' },
    name: 'pikachu',
    types: [{ type: { name: 'electric' } }],
  };

  const setCatalogPokemonData = vi.fn();
  global.fetch = vi.fn().mockResolvedValue({
    json: vi.fn().mockResolvedValue(pokemonInfo),
  });

  await gettingInfo({ catalogPokemonCommonData, setCatalogPokemonData });

  expect(fetch).toHaveBeenCalledTimes(3);
});
