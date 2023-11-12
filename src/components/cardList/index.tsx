import PokedexCard from "../card";
import { PokemonData } from "../types/types";
import GetSearchResult from "./helpers/searchResult";
import PokemonDataSort from "./helpers/sortData";
import { CardListProps } from "./types";

export default function CardList({catalogPokemonData} :CardListProps) {
  const searchResult = GetSearchResult();
  const emptyCardList = catalogPokemonData.data.length === 0 ? `... it seems the pokedex is empty` : '';
  const renderPokemonsData = PokemonDataSort(catalogPokemonData);

  return (
      <div>
        <p className="catalogMsg">{searchResult}</p>
        <div className="catalogWrapper">
          <p className="catalogMsg">{emptyCardList}</p>
          {renderPokemonsData.map((pokemon: PokemonData) => (
            <PokedexCard pokemonsCard={pokemon} key={pokemon.id} />
          ))}
        </div>
      </div>
  );
}
