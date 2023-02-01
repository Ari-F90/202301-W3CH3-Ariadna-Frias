import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { Component } from '../component/component';
import { Header } from './header';

describe('Given Header Component', () => {
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const mockTitle = 'Test';
    const element = new Header('slot', mockTitle);
    expect(element).toBeInstanceOf(Component);
    const h1 = screen.getByText(mockTitle);
    expect(h1).toBeInTheDocument();
  });
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Header('slot');
    expect(element).toBeInstanceOf(Component);
    const h1 = screen.getByRole('heading');
    expect(h1).toBeInTheDocument();
  });
});
