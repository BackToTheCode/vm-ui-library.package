import React from 'react';
import Header from '../header';
import { checkA11y } from '@storybook/addon-a11y';

export default {
  title: 'Header',
  component: Header,
  decorators: [checkA11y]
};

const connectedHeaderProps = { address: '0x61049F5e03Bfe3823f274C479158A94bcA26456c', ern: 'james.eth', variant: 'indicator.connected' };
const unConnectedHeaderProps = { variant: 'indicator.unconnected' };
const disConnectedHeaderProps = { address: '0x61049F5e03Bfe3823f274C479158A94bcA26456c', ern: 'james.eth', variant: 'indicator.disconnected' };

export const Connected = () => <Header {...connectedHeaderProps}></Header>;
export const NotConnected = () => <Header {...unConnectedHeaderProps}></Header>;
export const DisConnected = () => <Header {...disConnectedHeaderProps}></Header>;
