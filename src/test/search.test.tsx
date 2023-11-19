import { render, screen, fireEvent } from '@testing-library/react';
import PokemonSearch from '../components/search';
import { Provider } from 'react-redux';
import { store } from '../store/store';

vi.spyOn(window, 'alert').mockImplementation(() => {});

describe('PokemonSearch', () => {
  it('should save the entered value to local storage when the Search button is clicked', () => {
    render(
      <Provider store={store}>
        <PokemonSearch />
      </Provider>
    );

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button');

    fireEvent.change(searchInput, { target: { value: 'Pikachu' } });
    fireEvent.click(searchButton);

    expect(localStorage.getItem('search')).toBe('Pikachu');
  });

  it('should retrieve previous search value from local storage on load', () => {
    localStorage.setItem('search', 'Pikachu');

    render(
      <Provider store={store}>
        <PokemonSearch />
      </Provider>
    );

    const searchInput: HTMLInputElement = screen.getByRole('textbox');

    expect(searchInput.value).toBe('Pikachu');
  });
});
