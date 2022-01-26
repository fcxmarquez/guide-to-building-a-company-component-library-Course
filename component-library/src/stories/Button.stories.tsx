import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from '../button/Button';
import { ButtonProps } from '../button/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const ref = React.createRef<HTMLButtonElement>();

const Template: Story<ButtonProps> = (args) => (
  <Button ref={ref} {...args}>
    My button component
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  variant: 'primary',
  size: 'medium',
  isFullWidth: false,
};
