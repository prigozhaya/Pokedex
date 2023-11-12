import { render, screen, fireEvent } from '@testing-library/react';
import PokemonSearch from '../components/search';

vi.spyOn(window, 'alert').mockImplementation(() => {});

describe('PokemonSearch', () => {
  it('should save the entered value to local storage when the Search button is clicked', () => {
    render(<PokemonSearch />);

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button');

    fireEvent.change(searchInput, { target: { value: 'Pikachu' } });
    fireEvent.click(searchButton);

    expect(localStorage.getItem('search')).toBe('Pikachu');
  });

  it('should retrieve previous search value from local storage on load', () => {
    localStorage.setItem('search', 'Pikachu');

    render(<PokemonSearch />);

    const searchInput: HTMLInputElement = screen.getByRole('textbox');

    expect(searchInput.value).toBe('Pikachu');
  });
});
