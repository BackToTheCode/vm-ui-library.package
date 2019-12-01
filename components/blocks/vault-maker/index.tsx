import { Card, Container } from '@backtothecode/vault-maker-ui/dist/cjs/index';
import React, { FC } from 'react';
import steps, {
  CHANGE_COLLATERAL_CHOICE,
  CONFIRM_COLLATERAL_CHOICE,
  LOCK_COLLATERAL_CHOICE,
  DRAW_DAI_CHOICE
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
  const { confirmCollateral, changeCollateral, lockCollateral, drawDai } = render;

  return (
    <Card sx={cardStyle}>
      <Container sx={containerStyle} variant="container.default">
        {step === steps[CONFIRM_COLLATERAL_CHOICE] &&
          confirmCollateral(symbol, balance, price, usdValue)}

        {step === steps[CHANGE_COLLATERAL_CHOICE] && 
          changeCollateral()}

        {step === steps[LOCK_COLLATERAL_CHOICE] && 
          lockCollateral(symbol)}

        {step === steps[DRAW_DAI_CHOICE] && 
          drawDai()}

      </Container>
    </Card>
  );
};

VaultMaker.displayName = 'VaultMaker';
