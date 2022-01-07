import React from 'react';
import './styles.css';

export const Button = React.forwardRef<HTMLButtonElement>(({ children }, ref) => {
  return <button ref={ref}>{children}</button>;
});

Button.displayName = 'Button';
