import React from 'react';
import Catalog from '../components/catalog';
import Header from '../components/header';
import { PokemonCatalogState, PokemonData } from '../components/search/types';

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

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

  handlePokemonDataChange(data: PokemonData[]) {
    console.log('data', data);
    this.setState({ pokemonsData: data }, () => {});
    this.forceUpdate();
    // this.setState(() => ({
    //   pokemonsData: [ ...data],
    // }));
    console.log('state', this.state.pokemonsData);
  }

  shouldComponentUpdate(
    nextProps: object | Readonly<object>,
    nextState: PokemonCatalogState
  ) {
    console.log(nextProps);
    console.log('nextState', nextState);
    return !!nextState.pokemonsData.length && true;
  }

  render() {
    console.log('stateRender', this.state.pokemonsData);
    const pokemonsData = this.state.pokemonsData;
    return (
      <>
        <Header onPokemoDataChange={this.handlePokemonDataChange} />
        <div className="pageContainer">
          {pokemonsData[0]?.id}
          <Catalog pokemonsData={pokemonsData} />
        </div>
      </>
    );
  }
}

export default HomePage;
