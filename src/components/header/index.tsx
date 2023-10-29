import React from 'react';
import './styles.css';
import PokemonSearch from '../search';
import { PokemonSearchProps } from '../search/types';

class Header extends React.Component<PokemonSearchProps> {
  render() {
    return (
      <header>
        <div className="styledFirstHeaderRow">
          <img
            src="src/assets/pokedex.png"
            alt="pokedex-logo"
            className="pokedexLogo"
          />
        </div>
        <div className="headerContainer">
          <PokemonSearch onPokemoDataChange={this.props.onPokemoDataChange} />
        </div>
      </header>
    );
  }
}

export default Header;
