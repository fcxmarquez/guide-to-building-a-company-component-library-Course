import React from 'react';
import './styles.css';

export const Button = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<'button'>>(({ children, ...props }, ref) => {
  return <button type="button" ref={ref} {...props}>{children}</button>;
});

Button.displayName = 'Button';
