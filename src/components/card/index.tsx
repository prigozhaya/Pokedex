import './styles.css';
import { PokemonCardProps } from '../types/types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppPokemonContext } from '../../pages/mainPage';
import GetPokemonCode from '../helpers/getPokemonCode';

export default function PokedexCard(cardProps: PokemonCardProps) {
  const { currentPage } = useContext(AppPokemonContext);
  const number = GetPokemonCode(cardProps.pokemonsCard.id);

  return (
    <Link to={`/catalog/${currentPage}/${cardProps.pokemonsCard.name}`}>
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
