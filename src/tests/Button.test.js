import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

test('renders Button component', () => {
  const { container } = render(<Button label="AC" onClick={() => {}} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('simulates user interaction', () => {
  const handleClick = jest.fn();
  render(<Button label="AC" onClick={handleClick} />);

  const buttonElement = screen.getByText('AC');
  fireEvent.click(buttonElement);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
