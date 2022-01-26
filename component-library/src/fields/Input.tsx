import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { InputWrapper } from './styles';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<'input'>
>((props, ref) => {
  const id = useContext(FieldContext);

  return <InputWrapper ref={ref} id={id} {...props} />;
});

Input.displayName = 'Field.Input';
