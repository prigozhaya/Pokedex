import { CatalogPokemonData } from '../../types/types';

export default function PokemonDataSort(
  catalogPokemonData: CatalogPokemonData
) {
  return catalogPokemonData.data.sort((a, b) => (a.id > b.id ? 1 : -1));
}
