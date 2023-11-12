import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InformationPanel from '../../components/informationPanel';
import { PokemonInfo } from '../../components/types/types';
import { getPokemonInfo } from './helpers/getInfo';

export default function InformationPage() {
  const { pokemonId } = useParams();

  const [pokemonInfo, setpokemonInfo] = React.useState<PokemonInfo>({
    id: 1,
    img: 'img',
    name: 'pokemon',
    types: 'type',
    abilities: [{ ability: { name: 'ability' }, is_hidden: false }],
    height: 100,
    weight: 100,
  });

  useEffect(() => {
    getPokemonInfo({ pokemonId, setpokemonInfo });
  }, [pokemonId]);

  return (
    <>
      <InformationPanel pokemonInfo={pokemonInfo} />
    </>
  );
}
