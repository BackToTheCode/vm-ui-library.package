import React from 'react';
import Header from '../header';
import logoImage from '../../../public/images/mark-maker.svg';
import { checkA11y } from '@storybook/addon-a11y';

export default {
  title: 'Header',
  component: Header,
  decorators: [checkA11y]
};

export const Connected = () => (
  <Header connected>
    <Header.Logo image={logoImage} />
    <Header.Address />
  </Header>
);
export const NotConnected = () => (
  <Header>
    <Header.Logo image={logoImage} />
    <Header.Address />
  </Header>
);
