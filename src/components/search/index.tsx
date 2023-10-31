import React, { ChangeEvent } from 'react';
import './styles.css';
import { PokemonSearchProps, PokemonSearchState } from '../types/types';

class PokemonSearch extends React.Component<
  PokemonSearchProps,
  PokemonSearchState
> {
  constructor(props: PokemonSearchProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchValue: '',
    };
  }

  saveRequest = () => {
    localStorage.setItem('search', this.state.searchValue);
  };

  componentDidMount() {
    const value = localStorage.getItem('search')
      ? localStorage.getItem('search')
      : '';
    if (value) this.setState({ searchValue: value });
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const serchValue = this.state.searchValue;
    return (
      <div className="searcWrapper">
        <button
          className="searchButton"
          onClick={() => this.saveRequest()}
        ></button>
        <div className="SearchWrapper">
          <input
            type="text"
            className="SearchInput"
            onChange={this.handleChange}
            value={serchValue}
          />
        </div>
      </div>
    );
  }
}

export default PokemonSearch;
