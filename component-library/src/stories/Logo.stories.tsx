import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Logo } from '../logo/Logo';

export default {
  title: 'Example/Logo',
  component: Logo,
} as Meta;

const Template: Story = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  srcIcon: '/assets/logo.png',
};
