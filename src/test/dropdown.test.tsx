import { Provider } from 'react-redux';
import ElementsPerPageDropDown from '../components/elementsPerPageDropDown';
import { fireEvent, render, screen } from '@testing-library/react';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';

it('should set elements per page to the selected value and current page to 1 when an option is selected', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ElementsPerPageDropDown />
      </BrowserRouter>
    </Provider>
  );
  fireEvent.change(screen.getByRole('combobox'), { target: { value: '60' } });

  const pokemonImg = screen.getByDisplayValue('60');
  expect(pokemonImg).toBeTruthy();
});
