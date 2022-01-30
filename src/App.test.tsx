import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("app test", () => {
  test('renders the learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});