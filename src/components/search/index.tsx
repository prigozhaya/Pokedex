import React, { ChangeEvent } from 'react';
import './styles.css';
import {
  PokemonUrlData,
  PokemonTypes,
  PokemonData,
  PokemonSearchProps,
  PokemonSearchState,
} from './types';
const API_LINK = 'https://pokeapi.co/api/v2/pokemon';

class PokemonSearch extends React.Component<
  PokemonSearchProps,
  PokemonSearchState
> {
  constructor(props: PokemonSearchProps) {
    super(props);
    this.gettingInfo = this.gettingInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchValue: '',
    };
  }
  // state = {
  //   searchValue: "",
  // };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target.value });
    console.log(this.state.searchValue);
  };

  gettingInfo = async () => {
    const apiUrl = await fetch(API_LINK);
    const searchData = await apiUrl.json();
    const pokemonsData: PokemonData[] = [];
    searchData.results.forEach(async (element: PokemonUrlData) => {
      const apiUrl = await fetch(element.url);
      const searchData = await apiUrl.json();
      const pokemonTypes = searchData.types
        .map((el: PokemonTypes) => el.type.name)
        .join('/');
      const prepareData = {
        id: searchData.id,
        name: searchData.name,
        types: pokemonTypes,
      };
      pokemonsData.push(prepareData);
    });
    console.log(pokemonsData);
    this.props.onPokemoDataChange(pokemonsData);
  };

  render() {
    return (
      <div className="searcWrapper">
        <button
          className="searchButton"
          onClick={() => this.gettingInfo()}
        ></button>
        <div className="SearchWrapper">
          <input
            type="text"
            className="SearchInput"
            onChange={this.handleChange}
            value={this.state.searchValue}
          />
        </div>
      </div>
    );
  }
}

export default PokemonSearch;
