import './styles.css';
import { PokemonCardProps } from '../types/types';
import { Link } from 'react-router-dom';

export default function PokedexCard(cardProps: PokemonCardProps) {
  let number = String(cardProps.pokemonsCard.id);
  if (cardProps.pokemonsCard.id < 100) {
    number =
      cardProps.pokemonsCard.id < 10
        ? '#00' + cardProps.pokemonsCard.id
        : '#0' + cardProps.pokemonsCard.id;
  }
  return (
    <Link to={`${cardProps.pokemonsCard.name}`}>
      <div className="cardWrapper">
        <img
          src={cardProps.pokemonsCard.img}
          alt="pokemon-img"
          className="pokemonImg"
        />
        <p className="pokemonName">{cardProps.pokemonsCard.name}</p>
        <p className="pokemonNumber">{number}</p>
        <div className="pokemonInfo">
          <p className="pokemonType">{cardProps.pokemonsCard.types}</p>
        </div>
      </div>
    </Link>
  );
}
