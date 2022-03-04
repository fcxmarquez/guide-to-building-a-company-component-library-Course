import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Logo, LogoProps } from '../logo/Logo';

export default {
  title: 'Example/Logo',
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  srcIcon: '/assets/logo.png',
};
