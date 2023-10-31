import React from 'react';
import './styles.css';
import {
  PokemonCataloghProps,
  PokemonData,
  PokemonTypes,
  PokemonUrlData,
} from '../types/types';
import PokedexCard from '../card';

const API_LINK = 'https://pokeapi.co/api/v2/pokemon/';

class Catalog extends React.Component<
  PokemonCataloghProps,
  { pokemonsData: { data: PokemonData[] } }
> {
  constructor(props: PokemonCataloghProps) {
    super(props);
    this.state = {
      pokemonsData: { data: [] },
    };
  }

  gettingInfo = async () => {
    const pokemonsData: PokemonData[] = [];
    const apiUrl = await fetch(API_LINK);
    const searchData = await apiUrl.json();
    const foundData = new Promise<PokemonData[]>((resolve) => {
      searchData.results.forEach(async (element: PokemonUrlData, index: number, arr: PokemonUrlData[]) => {
        const apiUrl = await fetch(element.url);
        const searchData = await apiUrl.json();
        const pokemonTypes = searchData.types
          .map((el: PokemonTypes) => el.type.name)
          .join('/');
        const prepareData = {
          id: searchData.id,
          img:searchData.sprites.front_default,
          name: searchData.name,
          types: pokemonTypes,
        };
        pokemonsData.push(prepareData);
        if (index === arr.length - 1) {
          resolve(pokemonsData);
        }
      });
    });

    foundData.then((data) => {
      this.setState({ pokemonsData: { data } });
    });
  };

  componentDidMount() {
    this.gettingInfo();
  }

  render() {
    const pokemonsData = this.state.pokemonsData.data.sort((a, b) => a.id > b.id ? 1 : -1);
    return (
      <div className="catalogWrapper">
                {pokemonsData.map((pokemon: PokemonData) => (
          <PokedexCard pokemonsCard={pokemon} key={pokemon.id} />
        ))}
      </div>
    );
  }
}

export default Catalog;
