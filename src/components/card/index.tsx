import './styles.css';
import { PokemonCardProps } from '../types/types';
import { Link } from 'react-router-dom';
import getPokemonCode from '../helpers/getPokemonCode';
import { useAppSelector } from '../../store/hooks';
import { useGetPokemonByNameQuery } from '../../store/api';
import CardSpinner from '../spiner/cardSpinner';

export default function PokedexCard(cardProps: PokemonCardProps) {
  const currentPage = useAppSelector((state) => state.metaInfo.currentPage);
  const { data, isLoading } = useGetPokemonByNameQuery(cardProps.pokemonName);
  const number = getPokemonCode(data?.id);

  if (isLoading) {
    return (
      <div className="cardWrapper">
        <CardSpinner />
      </div>
    );
  }

  return (
    <Link to={`/catalog/${currentPage}/${data?.name}`} className="linkWrapper">
      <div className="cardWrapper">
        <img src={data?.img} alt="pokemon-img" className="pokemonImg" />
        <p className="pokemonName">{data?.name}</p>
        <p className="pokemonNumber">{number}</p>
        <div className="pokemonInfo">
          <p className="pokemonType">{data?.types}</p>
        </div>
      </div>
    </Link>
  );
}
