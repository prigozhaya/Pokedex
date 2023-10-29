import React from 'react';
import './styles.css';
import { PokemonCardProps } from '../search/types';
class PokedexCard extends React.Component<PokemonCardProps> {
  render() {
    return (
      <div className="cardWrapper">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
          alt=""
          className="pokemonImg"
        />
        <p className="pokemonName">{this.props.pokemonsCard.id}</p>
        <p className="pokemonNumber">#035</p>
        <div className="pokemonInfo">
          <p className="pokemonType">fairy</p>
        </div>
      </div>
    );
  }
}

export default PokedexCard;
