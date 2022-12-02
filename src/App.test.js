import { render, screen } from '@testing-library/react';
import App from './App';

tdocker run -dp 80:80 docker/getting-startedest('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
