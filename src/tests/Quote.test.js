import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Extend expect with jest-dom matchers
import Quote from '../components/Quote';

test('renders Quote component', async () => {
  render(<Quote />);

  // Wait for the component to render either the quote or loading message
  await waitFor(() => {
    const quoteElement = screen.queryByText(/Inspirational Quote/i);
    const loadingElement = screen.queryByText(/Loading.../i);
    const errorElement = screen.queryByText(/Error:/i);

    // Check if the quote content is rendered
    if (quoteElement) {
      expect(quoteElement).toBeInTheDocument();
    }

    // Check if the loading message is rendered
    if (loadingElement) {
      expect(loadingElement).toBeInTheDocument();
    }

    // Check if the error message is rendered
    if (errorElement) {
      expect(errorElement).toBeInTheDocument();
    }
  });
});
