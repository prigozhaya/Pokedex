import React from 'react';
import './styles.css';
// import PokedexCard from '../card';
import { PokemonCataloghProps } from '../search/types';
class Catalog extends React.Component<
  PokemonCataloghProps,
  PokemonCataloghProps
> {
  constructor(props: PokemonCataloghProps) {
    super(props);
    this.state = {
      pokemonsData: props.pokemonsData,
    };
  }

  render() {
    const pokemonsData = this.props.pokemonsData;
    console.log('catalog', pokemonsData);
    return (
      <div className="catalogWrapper">
        {!!pokemonsData.length && <p>{pokemonsData[0]?.id}</p>}
      </div>
    );
  }
}

export default Catalog;
