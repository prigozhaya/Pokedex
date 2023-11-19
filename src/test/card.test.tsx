import { describe, it, expect } from 'vitest';
import PokedexCard from '../components/card';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Card', () => {
  it('Component renders spiner when loading', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <PokedexCard pokemonName={'bulbasaur'} key={'1'} />
        </BrowserRouter>
      </Provider>
    );

    const spinner = container.getElementsByClassName('cardSpinnerContainer');

    expect(spinner).toBeTruthy();
  });
});

describe('Card', () => {
  it('Component renders Pokemon info when not loading', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <PokedexCard pokemonName={'bulbasaur'} key={'1'} />
        </BrowserRouter>
      </Provider>
    );

    const pokemonImg = container.getElementsByClassName('pokemonImg');
    const pokemonName = container.getElementsByClassName('pokemonName');
    const pokemonNumber = container.getElementsByClassName('pokemonNumber');
    const pokemonType = container.getElementsByClassName('pokemonType');

    expect(pokemonImg).toBeTruthy();
    expect(pokemonName).toBeTruthy();
    expect(pokemonNumber).toBeTruthy();
    expect(pokemonType).toBeTruthy();
  });
});
