import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CalculatorPage from '../components/CalculatorPage';

test('renders CalculatorPage component', () => {
  const { container } = render(<CalculatorPage />);
  expect(container.firstChild).toMatchSnapshot();
});

test('simulates user interaction', () => {
  render(<CalculatorPage />);

  const buttonElement = screen.getByText('7');
  fireEvent.click(buttonElement);

  const resultElements = screen.queryAllByText('7');
  const resultElement = resultElements.find((element) => element.tagName === 'DIV');
  expect(resultElement).toBeInTheDocument();
});