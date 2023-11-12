import { render, screen } from '@testing-library/react';
import CardList from '../components/cardList';
import { BrowserRouter } from 'react-router-dom';

test('renders the specified number of cards', () => {
  const mockCatalogPokemonData = {
    data: [
      { id: 1, img: 'image1.jpg', name: 'Pokemon 1', types: 'Type 1' },
      { id: 2, img: 'image2.jpg', name: 'Pokemon 2', types: 'Type 2' },
      { id: 3, img: 'image3.jpg', name: 'Pokemon 3', types: 'Type 3' },
    ],
  };

  render(
    <BrowserRouter>
  <CardList catalogPokemonData={mockCatalogPokemonData} />
  </BrowserRouter>
  );

  const cards = screen.getAllByRole('img');
  expect(cards).toHaveLength(mockCatalogPokemonData.data.length);
});

test('Check that an appropriate message is displayed if no cards are present', () => {
  const mockCatalogPokemonData = {
    data: [],
  };

  render(
    <BrowserRouter>
  <CardList catalogPokemonData={mockCatalogPokemonData} />
  </BrowserRouter>
  );

  const msg = screen.getByText('... it seems the pokedex is empty');
  expect(msg).toBeTruthy();
});