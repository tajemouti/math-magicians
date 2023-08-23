import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CalculatorPage from '../components/CalculatorPage';

test('renders CalculatorPage component', () => {
  render(<CalculatorPage />);
  const calculatorTitleElement = screen.getByText(/Let's do some math!/i);
  expect(calculatorTitleElement).toBeInTheDocument();
});
