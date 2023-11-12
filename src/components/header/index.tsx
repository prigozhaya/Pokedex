import './styles.css';
import PokemonSearch from '../search';

export default function Header() {
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
        <PokemonSearch />
      </div>
    </header>
  );
}
