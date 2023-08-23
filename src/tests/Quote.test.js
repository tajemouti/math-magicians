import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../components/Quote';

test('renders Quote component', () => {
  const { container } = render(<Quote />);
  expect(container.firstChild).toMatchSnapshot();
});

test('simulates user interaction', () => {
  render(<Quote />);
  const quoteElement = screen.getByText('Loading...');
  expect(quoteElement).toBeInTheDocument();
});
