import React from 'react';
import { render } from '@testing-library/react';
import { BasicMyComponent } from './my-component.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicMyComponent />);
  const rendered = getByText('hello from MyComponent');
  expect(rendered).toBeTruthy();
});
