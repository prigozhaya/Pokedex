export default function getPokemonCode(pokemonId: number = 1) {
  const code =
    pokemonId >= 100
      ? `#${pokemonId}`
      : pokemonId >= 10
      ? `#0${pokemonId}`
      : `#00${pokemonId}`;
  return code;
}
