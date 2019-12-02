import { Card, Container } from '@backtothecode/vault-maker-ui/dist/cjs/index';
import React, { FC } from 'react';
import steps, {
  CHANGE_COLLATERAL,
  CONFIRM_COLLATERAL,
  CONFIRM_VAULT,
  DRAW_DAI,
  LOCK_COLLATERAL,
  OPEN_VAULT
} from '../../../constants/step-names';
import render from './render';
import { cardStyle, containerStyle } from './styles';

export interface VaultMakerProps {
  children?: any;
  step?: number;
  symbol?: string;
  usdValue?: number;
  balance?: number;
  price?: number;
}

interface VaultMaker {
  Wrapped?: any;
}

export const VaultMaker: FC<VaultMakerProps> & VaultMaker = props => {
  const { step, symbol, usdValue, balance, price } = props;
  const {
    confirmCollateral,
    changeCollateral,
    lockCollateral,
    drawDai,
    confirmVault,
    openVault
  } = render;

  return (
    <Card sx={cardStyle}>
      <Container sx={containerStyle} variant="container.default">
        {step === steps[CONFIRM_COLLATERAL] &&
          confirmCollateral(symbol, balance, price, usdValue)}

        {step === steps[CHANGE_COLLATERAL] && changeCollateral()}

        {step === steps[LOCK_COLLATERAL] && lockCollateral(symbol)}

        {step === steps[DRAW_DAI] && drawDai()}

        {step === steps[CONFIRM_VAULT] && confirmVault()}

        {step === steps[OPEN_VAULT] && openVault()}
      </Container>
    </Card>
  );
};

VaultMaker.displayName = 'VaultMaker';
