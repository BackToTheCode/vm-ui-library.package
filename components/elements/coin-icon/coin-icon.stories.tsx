import React from 'react';
import { CoinIcon } from '.';
import { checkA11y } from '@storybook/addon-a11y';
import metamaskLogo from '../../../public/images/ethereum-logo.svg';

export default {
  title: 'Elements|CoinIcon',
  component: CoinIcon,
  decorators: [checkA11y]
};

export const Default = () => (
  <CoinIcon icon={metamaskLogo}/>
);

