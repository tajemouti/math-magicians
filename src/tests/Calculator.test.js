import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('renders Calculator component', () => {
  render(<Calculator />);
  const calculatorComponent = screen.getByTestId('calculator-component');
  expect(calculatorComponent).toMatchSnapshot();
});

test('clicking buttons updates the display', () => {
  render(<Calculator />);

  const button7 = screen.getByText('7');
  const buttonPlus = screen.getByText('+');
  const buttonEquals = screen.getByText('=');

  const display = screen.getByTestId('display');

  fireEvent.click(button7);
  fireEvent.click(buttonPlus);
  fireEvent.click(button7);
  fireEvent.click(buttonEquals);

  expect(display.textContent).toBe('14');
});
