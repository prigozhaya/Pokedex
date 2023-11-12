import { gettingCommonInfo } from "../components/catalog/helpers/getCatologInfo";

it('should fetch data from the API using the provided elementsPerPage and currentPage', async () => {
  const elementsPerPage = '10';
  const currentPage = 1;
  const setPokemonsCount = vi.fn();
  const setCatalogPokemonCommonData = vi.fn();
  const pokemonInfo = {
    name: 'pikachu',
    url: "url",
  };
  global.fetch = vi.fn().mockResolvedValue({
    json: vi.fn().mockResolvedValue(pokemonInfo),
  });

  await gettingCommonInfo({
    elementsPerPage,
    currentPage,
    setPokemonsCount,
    setCatalogPokemonCommonData,
  });
    
  expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/pokemon/?limit=${elementsPerPage}&offset=${(currentPage - 1) * Number(elementsPerPage)}`);
});