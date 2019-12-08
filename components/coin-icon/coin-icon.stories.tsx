import { checkA11y } from '@storybook/addon-a11y';
import React from 'react';
import { CoinIcon } from '../coin-icon';

export default {
  component: CoinIcon,
  decorators: [checkA11y],
  title: 'Design System|Coin Icon',
};

export const Default = () => (
  <CoinIcon />
);

