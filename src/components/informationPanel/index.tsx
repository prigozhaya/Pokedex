import './styles.css';
import { PokemonAbilities } from '../types/types';
import { Link, useNavigate } from 'react-router-dom';
import { InfoPanelProps } from './types';
import GetPokemonCode from '../helpers/getPokemonCode';

export default function InformationPanel({pokemonInfo}:InfoPanelProps) {
  const navigate = useNavigate();
  
  const handleOutsideClick = () => {
    navigate('..');
  };
  
  const number = GetPokemonCode(pokemonInfo.id);


  return (
    <div>
      <div className="infoOverlay" onClick={handleOutsideClick}></div>

      <div className={`sidebar`}>
        <div className="infoPanelBlock">
          <Link to={'..'} className="toggle-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 38 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2.5L33.0714 18.1732C36.7502 20.0289 36.7316 25.2879 33.0398 27.1175L2 42.5"
                stroke="#131b58"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>
        <div className="infoPanel">
          <div className="content">
            <img
              src={pokemonInfo?.img}
              alt="pokemon-img"
              className="pokemonInfoImg"
            />
            <div className="infoWrapper">
              <p className="pokemonInfoData">
                <span className="metadata">Name: </span>
                {pokemonInfo?.name}
              </p>
              <p className="pokemonInfoData">
                <span className="metadata">Number: </span>
                {number}
              </p>
              <p className="pokemonInfoData">
                <span className="metadata">Type: </span>
                {pokemonInfo?.types}
              </p>
              <p className="pokemonInfoData">
                {' '}
                <span className="metadata">Height: </span>
                {(pokemonInfo?.height * 0.1).toFixed(1)} m
              </p>
              <p className="pokemonInfoData">
                <span className="metadata">Weight: </span>{' '}
                {(pokemonInfo?.weight * 0.1).toFixed(1)} kg
              </p>
              <p className="pokemonInfoData">
                <span className="metadata">Abilities: </span>{' '}
                {pokemonInfo.abilities
                  .map((pokemon: PokemonAbilities) => pokemon.ability.name)
                  .join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
