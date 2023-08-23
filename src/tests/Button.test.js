import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Extend expect with jest-dom matchers
import Button from '../components/Button';

test('renders Button component with label', () => {
  render(<Button label="AC" />);
  const buttonElement = screen.getByText(/AC/i);
  expect(buttonElement).toBeInTheDocument();
});
