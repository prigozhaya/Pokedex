import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Pagination from '../components/pagination';
import { Provider } from 'react-redux';
import { store } from '../store/store';

test('component updates URL query parameter when pagination buttons are clicked', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Pagination />
      </BrowserRouter>
    </Provider>
  );

  const nextButton = getByText('▸');
  fireEvent.click(nextButton);

  expect(window.location.pathname).toBe('/catalog/2');

  const prevButton = getByText('◂');
  fireEvent.click(prevButton);

  expect(window.location.pathname).toBe('/catalog/1');
});
