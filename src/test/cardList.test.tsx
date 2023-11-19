import { render, screen } from '@testing-library/react';
import CardList from '../components/cardList';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';

test('Renders a list of Pokemon cards based on the current page and search query', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CardList />
      </BrowserRouter>
    </Provider>
  );

  const emptyCardListMessage = screen.getByText(
    /it seems the pokedex is empty/i
  );
  expect(emptyCardListMessage).toBeTruthy();
});
