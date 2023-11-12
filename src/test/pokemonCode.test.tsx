import GetPokemonCode from '../components/helpers/getPokemonCode';

it('should return a string starting with "#0" followed by the pokemonId if pokemonId is greater than or equal to 10 and less than 100', () => {
  const result = GetPokemonCode(50);
  expect(result).toBe('#050');
});
