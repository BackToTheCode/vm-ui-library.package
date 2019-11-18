import React from 'react';
import Header from '../header';
import logoImage from '../../../public/images/mark-maker.svg';
import { checkA11y } from '@storybook/addon-a11y';

export default {
  title: 'Header',
  component: Header,
  decorators: [checkA11y]
};

export const WithAddress = () => (
  <Header connected>
    <Header.Logo image={logoImage} />
    <Header.Address ern="james.eth" address="0x61049F5e03Bfe3823f274C479158A94bcA26456c" />
  </Header>
);
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
