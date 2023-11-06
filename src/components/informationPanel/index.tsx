import { useEffect, useRef, useState } from 'react';
import './styles.css';
import { PokemonAbilities, PokemonInfo, PokemonTypes } from '../types/types';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function InformationPanel() {
  const { pokemonId } = useParams();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [pokemonInfo, setpokemonInfo] = useState<PokemonInfo>({
    id: 1,
    img: 'img',
    name: 'pokemon',
    types: 'type',
    abilities: [{ ability: { name: 'ability' }, is_hidden: false }],
    height: 100,
    weight: 100,
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      navigate('..');
    }
  };

  async function getPokemonInfo() {
    const API_LINK = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const apiUrl = await fetch(API_LINK);
    const pokemonInfo = await apiUrl.json();
    const pokemonTypes = pokemonInfo.types
      .map((el: PokemonTypes) => el.type.name)
      .join('/');
    const prepareData = {
      id: pokemonInfo.id,
      img: pokemonInfo.sprites.front_default,
      name: pokemonInfo.name,
      types: pokemonTypes,
      abilities: pokemonInfo.abilities,
      height: pokemonInfo.height,
      weight: pokemonInfo.weight,
    };
    setpokemonInfo(prepareData);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    getPokemonInfo();
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  let number = String(pokemonInfo?.id);
  if (pokemonInfo.id < 100) {
    number =
      pokemonInfo.id < 10 ? '#00' + pokemonInfo.id : '#0' + pokemonInfo.id;
  }
  return (
    <div className="infoOverlay">
      <div ref={ref} className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="infoPanelBlock">
          <Link to={'..'} className="toggle-btn" onClick={toggleSidebar}>
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
