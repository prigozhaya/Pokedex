import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import PokedexCard from '../components/card';
import { PokemonData } from '../components/types/types';

const pokemonInfo: PokemonData = {
  id: 1,
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  name: 'bulbasaur',
  types: 'grass/poison',
};

describe('Card relevant information', () => {
  it('Component renders the relevant card data', () => {
    render(
      <BrowserRouter>
        <PokedexCard pokemonsCard={pokemonInfo} key={1} />
      </BrowserRouter>
    );

    const pokemonImg = screen.getByAltText('pokemon-img');
    const pokemonName = screen.getByText('bulbasaur');
    const pokemonNumber = screen.getByText('#001');
    const pokemonType = screen.getByText('grass/poison');

    expect(pokemonImg).toBeTruthy();
    expect(pokemonName).toBeTruthy();
    expect(pokemonNumber).toBeTruthy();
    expect(pokemonType).toBeTruthy();
  });

  it('Component renders with no pokemon data', () => {
    render(
      <BrowserRouter>
        <PokedexCard pokemonsCard={{} as PokemonData} key={1} />
      </BrowserRouter>
    );

    const pokemonName = screen.queryByText('bulbasaur');
    const pokemonNumber = screen.queryByText('#001');
    const pokemonType = screen.queryByText('grass/poison');

    expect(pokemonName).toBeNull();
    expect(pokemonNumber).toBeNull();
    expect(pokemonType).toBeNull();
  });
});

describe('Open a detailed information panel', () => {
  it('Should open a detailed card component when clicked', () => {
    render(
      <BrowserRouter>
        <PokedexCard pokemonsCard={pokemonInfo} key={1} />
      </BrowserRouter>
    );

    const cardElement = screen.getByRole('link');

    fireEvent.click(cardElement);
    expect(window.location.pathname).toBe('/catalog/1/bulbasaur');
  });
});
