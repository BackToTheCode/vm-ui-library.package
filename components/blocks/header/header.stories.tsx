import React from 'react';
import { Header } from '.';
import logoImage from '../../../public/images/mark-maker.svg';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Blocks|Header',
  component: Header,
  decorators: [checkA11y]
};

export const NotConnected = () => (
  <Header>
    <Header.Logo image={logoImage} />
    <Header.Address />
  </Header>
);

export const Connected = () => (
  <Header isConnected>
    <Header.Logo image={logoImage} />
    <Header.Address address="0x61049F5e03Bfe3823f274C479158A94bcA26456c" />
  </Header>
);

export const WithErn = () => (
  <Header isConnected>
    <Header.Logo image={logoImage} />
    <Header.Address
      ern="james.eth"
      address="0x61049F5e03Bfe3823f274C479158A94bcA26456c"
    />
  </Header>
);

export const WithoutAddress = () => (
  <Header isConnected>
    <Header.Logo image={logoImage} />
    <Header.Address />
  </Header>
);

export const WithKnobs = () => (
  <Header isConnected={boolean('Connected', true)}>
    <Header.Logo image={logoImage} />
    <Header.Address
      address={select(
        'Address',
        ['0x61049F5e03Bfe3823f274C479158A94bcA26456c', ''],
        '0x61049F5e03Bfe3823f274C479158A94bcA26456c'
      )}
      ern={select('Ern', ['james.eth', ''], '')}
    />
  </Header>
);
WithKnobs.story = {
  decorators: [withKnobs]
};
