import { render, screen } from '@testing-library/react';
import Header from '../components/header';

it('should render a header with a logo and a search bar', () => {
  render(<Header />);
  const headerElement = screen.getByRole('banner');
  const logoElement = screen.getByAltText('pokedex-logo');
  const searchElement = screen.getByRole('textbox');

  expect(headerElement).toBeTruthy();
  expect(logoElement).toBeTruthy();
  expect(searchElement).toBeTruthy();
});
