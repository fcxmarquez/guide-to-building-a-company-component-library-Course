import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('applies default type of button', () => {
    render(<Button>Hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('applies specific type if provided', () => {
    render(<Button type="submit">Hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('applies valid attribute to element', () => {
    /* This is for check if the element accept a button type atribute  */
    render(<Button aria-label="test">Hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'test');
  });
});
