import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/notFound';

describe('Card relevant information', () => {
  it('404 page is displayed when navigating to an invalid route', () => {
    render(
      <MemoryRouter initialEntries={['/invalid']}>
        <Routes>
          <Route path="/invalid" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('404')).toBeTruthy();
  });
});
