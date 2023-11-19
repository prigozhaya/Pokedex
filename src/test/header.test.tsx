import { render, screen } from '@testing-library/react';
import Header from '../components/header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';

it('should render a header with a logo and a search bar', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const headerElement = screen.getByRole('banner');
  const logoElement = screen.getByAltText('pokedex-logo');
  const searchElement = screen.getByRole('textbox');

  expect(headerElement).toBeTruthy();
  expect(logoElement).toBeTruthy();
  expect(searchElement).toBeTruthy();
});
