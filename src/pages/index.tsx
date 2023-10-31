import React from 'react';
import Catalog from '../components/catalog';
import Header from '../components/header';
import { PokemonCatalogState, PokemonData } from '../components/types/types';

class HomePage extends React.Component<
  object | Readonly<object>,
  PokemonCatalogState
> {
  constructor(props: object | Readonly<object>) {
    super(props);
    this.handlePokemonDataChange = this.handlePokemonDataChange.bind(this);
    this.state = {
      pokemonsData: [],
    };
  }

  handlePokemonDataChange(data: PokemonData[]) {
    this.setState({ pokemonsData: data }, () => {});
    this.forceUpdate();
  }

  render() {
    const pokemonsData = this.state.pokemonsData;
    return (
      <>
        <Header onPokemoDataChange={this.handlePokemonDataChange} />
        <div className="pageContainer">
          <Catalog pokemonsData={pokemonsData} />
        </div>
      </>
    );
  }
}

export default HomePage;
