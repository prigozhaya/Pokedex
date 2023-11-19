import getPokemonCode from '../components/helpers/getPokemonCode';

describe('pokemonCode', () => {
  it('should return a string starting with "#0" followed by the pokemonId if pokemonId is greater than or equal to 10 and less than 100', () => {
    const result = getPokemonCode(50);
    expect(result).toBe('#050');
  });

  it(`should return '#001' when called with no arguments`, () => {
    const result = getPokemonCode();
    expect(result).toBe('#001');
  });

  it('should return a string starting with "#00" followed by the pokemonId if pokemonId is less than 10', () => {
    const result = getPokemonCode(5);
    expect(result).toBe('#005');
  });

  it('should return a string starting with "#" followed by the pokemonId if pokemonId is greater than or equal to 100', () => {
    const result = getPokemonCode(100);
    expect(result).toBe('#100');
  });
});
