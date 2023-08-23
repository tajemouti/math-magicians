import { render } from '@testing-library/react';
import Home from '../components/Home';

test('renders Home component', () => {
  const { container } = render(<Home />);
  expect(container.firstChild).toMatchSnapshot();
});
