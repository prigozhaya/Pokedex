import './styles.css';
import PokemonSearch from '../search';
import { PokemonSearchProps } from '../types/types';

export default function Header(searchProps: PokemonSearchProps) {
  return (
    <header>
      <div className="styledFirstHeaderRow">
        <img
          src="/src/assets/pokedex.png"
          alt="pokedex-logo"
          className="pokedexLogo"
        />
      </div>
      <div className="headerContainer">
        <PokemonSearch onPokemoDataChange={searchProps.onPokemoDataChange} />
      </div>
    </header>
  );
}
