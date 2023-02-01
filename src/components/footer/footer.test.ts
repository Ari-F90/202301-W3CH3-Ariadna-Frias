/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { Component } from '../component/component';
import { Footer } from './footer';

describe('Given Header Component', () => {
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Footer('slot');
    expect(element).toBeInstanceOf(Component);
  });
});
