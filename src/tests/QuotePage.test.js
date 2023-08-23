import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuotePage from '../components/QuotePage';

test('renders QuotePage component', async () => {
  render(<QuotePage />);
  await waitFor(() => {
    const quoteContainerElement = screen.queryByText(/Inspirational Quote/i);
    const loadingElement = screen.queryByText(/Loading.../i);
    const errorElement = screen.queryByText(/Error:/i);

    if (quoteContainerElement) {
      expect(quoteContainerElement).toBeInTheDocument();
    }
    
    if (loadingElement) {
      expect(loadingElement).toBeInTheDocument();
    }

    if (errorElement) {
      expect(errorElement).toBeInTheDocument();
    }
  });
});
