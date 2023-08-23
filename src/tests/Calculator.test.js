import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Calculator from '../components/Calculator';

test('renders Calculator component', () => {
  render(<Calculator />);
  const resultElement = screen.getByText(/Do some math!/i);
  expect(resultElement).toBeInTheDocument();
});
