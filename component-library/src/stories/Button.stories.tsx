import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from '../Button/Button';
import { ButtonProps } from '../Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>My button component</Button>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  variant: 'primary',
  size: 'medium',
  isFullWidth: false,
};
