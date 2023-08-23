import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuotePage from '../components/QuotePage';

test('renders QuotePage component', () => {
  const { container } = render(<QuotePage />);
  expect(container.firstChild).toMatchSnapshot();
});

test('simulates user interaction', () => {
  render(<QuotePage />);
  const quoteElement = screen.getByText('Loading...');
  expect(quoteElement).toBeInTheDocument();
});
