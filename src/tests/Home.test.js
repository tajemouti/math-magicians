import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';

test('renders Home component', () => {
  render(<Home />);
  const welcomeElement = screen.getByText(/Welcome to our page!/i);
  expect(welcomeElement).toBeInTheDocument();
});
