export default function GetPokemonCode(pokemonId: number) {
  const code =
    pokemonId >= 100
      ? `#${pokemonId}`
      : pokemonId >= 10
      ? `#0${pokemonId}`
      : `#00${pokemonId}`;
  return code;
}
