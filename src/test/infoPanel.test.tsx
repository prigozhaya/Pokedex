import { fireEvent, render, screen } from '@testing-library/react';
import InformationPanel from '../components/informationPanel';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const pokemonInfo = {
  id: 1,
  name: 'Pikachu',
  img: 'pikachu.png',
  types: 'Electric',
  height: 40,
  weight: 60,
  abilities: [
    { ability: { name: 'Ability 1' }, is_hidden: false },
    { ability: { name: 'Ability 2' }, is_hidden: true },
  ],
};
describe('InformationPanel', () => {
  test('displays the detailed card data correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <InformationPanel pokemonInfo={pokemonInfo} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText('Pikachu')).toBeTruthy();
    expect(screen.getByText('#001')).toBeTruthy();
    expect(screen.getByText('Electric')).toBeTruthy();
    expect(screen.getByText('4.0 m')).toBeTruthy();
    expect(screen.getByText('6.0 kg')).toBeTruthy();
    expect(screen.getByText('Ability 1, Ability 2')).toBeTruthy();
  });
});

describe('Close button hides the component information panel', () => {
  it('Should close a detailed card component when clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <InformationPanel pokemonInfo={pokemonInfo} />
        </BrowserRouter>
      </Provider>
    );

    const cardElement = screen.getByRole('link');

    fireEvent.click(cardElement);
    expect(window.location.pathname).toBe('/catalog/1');
  });
});
