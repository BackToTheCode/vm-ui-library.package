import React from 'react';
import { CoinIcon } from '../coin-icon';
import { checkA11y } from '@storybook/addon-a11y';
import ethLogo from '../../public/images/ethereum-logo.svg';

export default {
  title: 'Design System|Coin Icon',
  component: CoinIcon,
  decorators: [checkA11y]
};

export const Default = () => (
  <CoinIcon icon={ethLogo}/>
);

