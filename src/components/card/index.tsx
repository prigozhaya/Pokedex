import React from 'react';
import './styles.css';
import { PokemonCardProps } from '../types/types';
class PokedexCard extends React.Component<PokemonCardProps> {
  render() {
    let number = String(this.props.pokemonsCard.id);
    if (this.props.pokemonsCard.id < 100) {
      number =
        this.props.pokemonsCard.id < 10
          ? '#00' + this.props.pokemonsCard.id
          : '#0' + this.props.pokemonsCard.id;
    }
    return (
      <div className="cardWrapper">
        <img
          src={this.props.pokemonsCard.img}
          alt="pokemon-img"
          className="pokemonImg"
        />
        <p className="pokemonName">{this.props.pokemonsCard.name}</p>
        <p className="pokemonNumber">{number}</p>
        <div className="pokemonInfo">
          <p className="pokemonType">{this.props.pokemonsCard.types}</p>
        </div>
      </div>
    );
  }
}

export default PokedexCard;
