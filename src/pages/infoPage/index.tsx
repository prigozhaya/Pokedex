/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import InformationPanel from '../../components/informationPanel';
import { useGetPokemonByNameQuery } from '../../store/api';
import { useEffect } from 'react';
import { setDitailsLoadingStatus } from '../../store/slices/loadingStatusSlice';
import { useAppDispatch } from '../../store/hooks';

export default function InformationPage() {
  const { pokemonId } = useParams();
  const dispatch = useAppDispatch();

  const defaultPokemonInfo = {
    id: 1,
    img: 'img',
    name: 'pokemon',
    types: 'type',
    abilities: [{ ability: { name: 'ability' } }],
    height: 100,
    weight: 100,
  };

  const { data: pokemonInfo = defaultPokemonInfo, isLoading } =
    useGetPokemonByNameQuery(pokemonId || '');

  useEffect(() => {
    dispatch(setDitailsLoadingStatus({ ditailsLoadingStatus: isLoading }));
  }, [isLoading]);

  return (
    <>
      <InformationPanel pokemonInfo={pokemonInfo} />
    </>
  );
}
