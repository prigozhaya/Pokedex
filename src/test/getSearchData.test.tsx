import { getPokemonInfo } from "../components/search/helpers/getSearchData";

it('should retrieve and format data correctly when searchInputValue is not empty', async () => {
  const searchInputValue = 'pikachu';
  const setPokemonsData = vi.fn();
  const pokemonInfo = {
    id: 25,
    sprites: { front_default: 'pikachu.png' },
    name: 'pikachu',
    types: [{ type: { name: 'electric' } }],
  };
  global.fetch = vi.fn().mockResolvedValue({
    json: vi.fn().mockResolvedValue(pokemonInfo),
  });

  await getPokemonInfo({ searchInputValue, setPokemonsData });

  expect(fetch).toHaveBeenCalledWith(
    `https://pokeapi.co/api/v2/pokemon/${searchInputValue}`
  );
  expect(setPokemonsData).toHaveBeenCalledWith([
    {
      id: pokemonInfo.id,
      img: pokemonInfo.sprites.front_default,
      name: pokemonInfo.name,
      types: pokemonInfo.types[0].type.name,
    },
  ]);
});