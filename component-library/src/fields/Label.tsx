import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { LabelWrapper } from './styles';

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithRef<'label'>
>((props, ref) => {
  const id = useContext(FieldContext);

  return <LabelWrapper ref={ref} htmlFor={id} {...props} />;
});

Label.displayName = 'Field.Label';
