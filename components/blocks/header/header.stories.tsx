import React from 'react';
import Header from '../header';
import marked from 'marked';
import logoImage from '../../../public/images/mark-maker.svg';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Blocks/Header',
  component: Header,
  parameters: {
    info: {
      inline: true,
      header: false,
      text: marked(require('./headerInfo.stories.md').default)
    }
  },
  decorators: [checkA11y]
};

export const Connected = () => (
  <Header isConnected={boolean('Connected', true)}>
    <Header.Logo image={logoImage} />
    <Header.Address
      address={select(
        'Address',
        ['0x61049F5e03Bfe3823f274C479158A94bcA26456c', null],
        '0x61049F5e03Bfe3823f274C479158A94bcA26456c'
      )}
      ern={select(
        'Ern',
        ['james.eth', null],
        null
      )}
    />
  </Header>
);
Connected.story = {
  decorators: [withKnobs]
};

export const NotConnected = () => (
  <Header>
    <Header.Logo image={logoImage} />
    <Header.Address />
  </Header>
);
export const Connected_WithErn = () => (
  <Header isConnected>
    <Header.Logo image={logoImage} />
    <Header.Address
      ern="james.eth"
      address="0x61049F5e03Bfe3823f274C479158A94bcA26456c"
    />
  </Header>
);

export const Connected_NoAddress = () => (
  <Header isConnected>
    <Header.Logo image={logoImage} />
    <Header.Address />
  </Header>
);
