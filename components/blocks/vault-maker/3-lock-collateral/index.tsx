import React, { Children, FC } from 'react';
import { Box } from 'rebass';
import { DRAW_DAI_NUM, CONFIRM_COLLATERAL_NUM } from '../../../../constants/step-names';
import { CTAButton, CTAButtonProps } from '../shared/cta-button';
import { OAButton, OAButtonProps } from '../shared/oa-button';
import { Title, TitleProps } from '../shared/title';
import { SelectAmount, SelectAmountProps } from './select-amount';
import styles from './styles';


export interface LockCollateral {
  SelectAmount: FC<SelectAmountProps>;
  CTAButton: FC<CTAButtonProps>;
  OAButton: FC<OAButtonProps>;
  Title: FC<TitleProps>;
  Wrapped?: any;
}

export interface LockCollateralProps {
  children: React.ReactNode;
  symbol?: string;
  tokens: any[];
  dipatchLockCollateral: ({ lockAmount }: { lockAmount: number }) => void;
  dispatchStep: ({ step }: { step: number }) => void;
}

export const LockCollateral: FC<LockCollateralProps> &
  LockCollateral = props => {
  const { children, symbol, tokens, dispatchStep } = props;

  const handleSubmit = (event: React.SyntheticEvent) => event.preventDefault();

  const handleLockedCollateralChange = ({ lockAmount }) => {
    props.dipatchLockCollateral({ lockAmount });
  };

  return (
    <Box as="form" sx={styles.form} onSubmit={handleSubmit}>
      {Children.map(children, (child: any) => {
        if (child.type.displayName === 'Title') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'SelectAmount') {
          const newProps: SelectAmountProps = {
            ...child.props,
            handleLockedCollateralChange,
            symbol,
            tokens
          };
          return React.cloneElement(child, newProps);
        }

        if (child.type.displayName === 'CTAButton') {
          const newProps: CTAButtonProps = {
            ...child.props,
            dispatchStep,
            step: DRAW_DAI_NUM
          };
          return React.cloneElement(child, newProps);
        }

        if (child.type.displayName === 'OAButton') {
          const newProps: OAButtonProps = {
            ...child.props,
            dispatchStep,
            step: CONFIRM_COLLATERAL_NUM
          };
          return React.cloneElement(child, newProps);
        }

        return child;
      })}
    </Box>
  );
};

LockCollateral.Title = Title;
LockCollateral.CTAButton = CTAButton;
LockCollateral.OAButton = OAButton;
LockCollateral.SelectAmount = SelectAmount;
