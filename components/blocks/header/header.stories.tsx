import React from 'react';
import Header from '../header';
import marked from 'marked';
import logoImage from '../../../public/images/mark-maker.svg';
import { checkA11y } from '@storybook/addon-a11y';

export default {
  title: 'Blocks/Header',
  component: Header,
  parameters: { info: {
    inline: true, 
    header: false,
    text: marked(require('./headerInfo.stories.md').default)
  }},
  decorators: [checkA11y]
};

// export default {
//   title: 'MyComponent',
//   parameters: { notes: componentNotes },
// };

export const Connected = () => (
  <Header isConnected>
    <Header.Logo image={logoImage} />
    <Header.Address address="0x61049F5e03Bfe3823f274C479158A94bcA26456c" />
  </Header>
);
export const NotConnected = () => (
  <Header>
    <Header.Logo image={logoImage} />
    <Header.Address />
  </Header>
);
export const WithErn = () => (
  <Header isConnected>
    <Header.Logo image={logoImage} />
    <Header.Address ern="james.eth" address="0x61049F5e03Bfe3823f274C479158A94bcA26456c" />
  </Header>
);

export const NoAddress = () => (
  <Header isConnected>
    <Header.Logo image={logoImage} />
    <Header.Address />
  </Header>
);

