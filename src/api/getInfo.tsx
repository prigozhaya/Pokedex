import React from 'react';
const API_LINK = 'https://pokeapi.co/api/v2/pokemon/ditto';

class PokemonInfo extends React.Component {
  gettingInfo = async () => {
    const apiUrl = await fetch(API_LINK);
    const data = await apiUrl.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <button onClick={() => this.gettingInfo()}>check</button>
        <p>{}</p>
      </div>
    );
  }
}

export default PokemonInfo;
